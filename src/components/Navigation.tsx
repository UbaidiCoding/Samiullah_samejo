import { useState, useEffect } from "react";
import { Terminal, Download, ArrowUp, Menu, X, Landmark, Code2, Shield, CalendarDays } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navigation({ onNavigate, activeSection }: NavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Reviews" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Inquire" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Back to top visibility
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
      // Offset for sticky nav
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
      {/* 1. Glowing Scroll progress line */}
      <div
        id="scroll-progress-line"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Top Glassmorphic Sticky Header */}
      <header
        id="main-sticky-navigation"
        className="fixed top-0 inset-x-0 h-16 bg-[#050505]/75 border-b border-white/10 backdrop-blur-md z-40 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with gradient and text matching Elegant Dark */}
          <div
            onClick={() => triggerScroll("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-black font-sans shadow-lg shadow-cyan-500/10">S</div>
            <div>
              <span className="text-lg font-bold tracking-tighter uppercase font-sans text-white group-hover:text-cyan-400 transition-colors">
                Sami<span className="text-cyan-400">Ubaidi</span>
              </span>
              <span className="text-[8px] font-mono block text-white/40 tracking-widest font-bold group-hover:text-purple-400 transition-colors">
                FULL-STACK • SECURE
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => triggerScroll(link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeSection === link.id
                    ? "text-cyan-400 bg-white/5 border border-white/10"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-booking"
              onClick={() => triggerScroll("contact")}
              className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-xs font-semibold hover:bg-white/10 text-white transition-all cursor-pointer select-none"
            >
              Reserve Consultation
            </button>
          </div>

          {/* Hamburger Mobile Toggle */}
          <button
            id="mobile-hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* 3. Mobile Navigation Sidebar Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-overlay" className="fixed inset-0 bg-black/95 z-30 flex flex-col pt-24 px-6 animate-fade-in lg:hidden">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => triggerScroll(link.id)}
                className={`w-full py-3.5 px-4 rounded-xl text-left text-sm font-mono tracking-wide border transition-all ${
                  activeSection === link.id
                    ? "bg-purple-950/40 border-purple-500/30 text-purple-300"
                    : "bg-stone-950/30 border-slate-900 text-slate-400"
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <button
              id="mobile-menu-consult"
              onClick={() => triggerScroll("contact")}
              className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all text-center mt-6 block cursor-pointer"
            >
              Book Consultation Session Now
            </button>
          </div>
        </div>
      )}

      {/* 4. Scroll Back-To-Top button */}
      {showBackToTop && (
        <button
          id="back-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 w-10 h-10 rounded-full bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all z-45 cursor-pointer"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* 5. Mobile Dynamic Sticky Bottom CTA Deck */}
      <div
        id="sticky-mobile-dock"
        className="fixed bottom-0 inset-x-0 h-16 bg-slate-950/90 border-t border-slate-900/80 backdrop-blur-md z-40 flex items-center justify-around px-4 lg:hidden"
      >
        <button
          id="mobile-footer-home"
          onClick={() => triggerScroll("hero")}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-cyan-400 text-[10px] font-mono gap-1 active:scale-95 transition-transform"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          Home
        </button>

        <button
          id="mobile-footer-certs"
          onClick={() => triggerScroll("certifications")}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-purple-400 text-[10px] font-mono gap-1 active:scale-95 transition-transform"
        >
          <Landmark className="w-4 h-4 text-purple-400" />
          Certs
        </button>

        <button
          id="mobile-footer-projects"
          onClick={() => triggerScroll("projects")}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-emerald-400 text-[10px] font-mono gap-1 active:scale-95 transition-transform"
        >
          <Code2 className="w-4 h-4 text-emerald-400" />
          Code
        </button>

        <button
          id="mobile-footer-contact"
          onClick={() => triggerScroll("contact")}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-amber-400 text-[10px] font-mono gap-1 active:scale-95 transition-transform"
        >
          <CalendarDays className="w-4 h-4 text-amber-400" />
          Book
        </button>
      </div>
    </>
  );
}
