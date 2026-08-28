import React, { useState, useEffect } from "react";
import { Terminal, Download, ArrowUp, Menu, X, Landmark, Code2, Shield, CalendarDays, FileText, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenResume: () => void;
}

export default function Navigation({ onNavigate, activeSection, onOpenResume }: NavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certs" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Hire Me" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerScroll = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* 1. Ultra-thin glowing Scroll progress line */}
      <div
        id="scroll-progress-line"
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Top Glassmorphic Sticky Header */}
      <header
        id="main-sticky-navigation"
        className="fixed top-0 inset-x-0 h-16 bg-[#07080d]/80 border-b border-white/10 backdrop-blur-xl z-40 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div
            onClick={() => triggerScroll("hero")}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-bold text-black font-mono shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight uppercase font-display text-white group-hover:text-cyan-400 transition-colors">
                  Sami<span className="text-cyan-400">Ubaidi</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
              </div>
              <span className="text-[9px] font-mono block text-slate-400 tracking-wider font-semibold group-hover:text-purple-400 transition-colors">
                FULL-STACK & MOBILE DEV
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => triggerScroll(link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeSection === link.id
                    ? "bg-white/15 text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/12 text-xs font-mono text-cyan-300 hover:text-white transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ATS</span> Resume
            </button>

            {/* Inquire CTA */}
            <button
              onClick={() => triggerScroll("contact")}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Hire Me
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0b12]/95 border-b border-white/15 backdrop-blur-2xl px-4 py-4 space-y-2 animate-fade-in shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => triggerScroll(link.id)}
                  className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all ${
                    activeSection === link.id
                      ? "bg-cyan-500 text-black font-bold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-cyan-300 flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4" /> View Resume
              </button>
              <button
                onClick={() => triggerScroll("contact")}
                className="w-full py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs font-mono flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" /> Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Back to Top floating button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-cyan-500 text-black shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer font-bold border border-cyan-300"
          title="Back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
