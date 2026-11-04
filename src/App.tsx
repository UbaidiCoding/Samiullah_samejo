import React, { useState, useEffect } from "react";
import {
  MapPin,
  FileText,
  BookOpen,
  Newspaper,
  X,
  ArrowRight,
  Send,
  Layers,
} from "lucide-react";

// Components
import Navigation from "./components/Navigation";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";

// Modals
import ResumeModal from "./components/ResumeModal";
import ArticlesModal from "./components/ArticlesModal";
import MediaModal from "./components/MediaModal";

// Data
import { PERSONAL_INFO } from "./data/portfolioData";

export default function App() {
  // Theme state: dark / light with prefers-color-scheme detection
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  // Modals state
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [articlesModalOpen, setArticlesModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // Sync theme with HTML document class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors antialiased overflow-x-hidden">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 bg-[var(--accent)] text-[var(--accent-contrast)] font-bold rounded-lg shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Skip to main content
      </a>

      {/* 1. STICKY HEADER */}
      <Navigation
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* MAIN CONTENT AREA */}
      <main
        id="main-content"
        className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ========================================================================= */}
        {/* 2. HERO SECTION */}
        {/* Mobile: stacked (photo, location chip, H1 text-3xl, subtitle, CTAs full-width stacked, stats 3-col) */}
        {/* lg+: 2 columns (text 7/12, photo 5/12), H1 text-5xl, CTAs inline */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="py-12 md:py-20 border-b border-[var(--border-color)] scroll-mt-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Mobile: Photo is first; lg+: Photo is on right (5/12) */}
            <div className="order-1 lg:order-2 lg:w-5/12 flex justify-start lg:justify-end shrink-0">
              <button
                type="button"
                onClick={() => setImageModalOpen(true)}
                className="group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-2xl"
                aria-label="Enlarge profile photo"
                title="Click to view full portrait"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-60 lg:h-60 rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md group-hover:border-[var(--accent)] transition-all">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Samiullah Samejo developer portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    width={240}
                    height={240}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </button>
            </div>

            {/* Content: Mobile order 2; lg+ order 1 (7/12) */}
            <div className="order-2 lg:order-1 lg:w-7/12 space-y-6">
              
              {/* Location & Availability Chip */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-surface-subtle)] px-3.5 py-1.5 rounded-full border border-[var(--border-color)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Available for Hire
                </span>
              </div>

              {/* Freelance-First Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                  Full-Stack &amp; Android Developer for Fast-Moving Projects
                </h1>
                
                {/* One-sentence value statement */}
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {PERSONAL_INFO.valueStatement}
                </p>
              </div>

              {/* CTAs: Full-width stacked on mobile; inline on lg+ */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="accent-btn-primary min-h-[44px] w-full sm:w-auto justify-center text-sm font-semibold"
                  aria-label="Get a quote for your project"
                >
                  <Send className="w-4 h-4" />
                  <span>Get a quote</span>
                </a>

                <a
                  href="#projects"
                  className="accent-btn-secondary min-h-[44px] w-full sm:w-auto justify-center text-sm font-semibold"
                  aria-label="View featured engineering projects"
                >
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
                </a>
              </div>

              {/* Stats in a horizontal 3-col grid with compact cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 w-full max-w-lg">
                {PERSONAL_INFO.proofStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="clean-card p-3 sm:p-4 text-center sm:text-left"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-[var(--accent)] font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-[var(--text-secondary)] mt-0.5 line-clamp-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PROJECTS SECTION */}
        {/* ========================================================================= */}
        <ProjectShowcase />

        {/* ========================================================================= */}
        {/* 4. SKILLS SECTION */}
        {/* ========================================================================= */}
        <SkillsSection />

        {/* ========================================================================= */}
        {/* 5. EXPERIENCE SECTION */}
        {/* ========================================================================= */}
        <ExperienceSection />

        {/* ========================================================================= */}
        {/* 6. CERTIFICATIONS SECTION */}
        {/* ========================================================================= */}
        <CertificatesSection />

        {/* ========================================================================= */}
        {/* 7. CONTACT SECTION */}
        {/* ========================================================================= */}
        <ContactSection />
      </main>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] py-10 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Full-Stack &amp; Android Developer • {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Articles and Media separate pages linked from the footer */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setArticlesModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                <span>Technical Articles</span>
              </button>

              <span className="text-[var(--border-color)] hidden sm:inline">•</span>

              <button
                type="button"
                onClick={() => setMediaModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] cursor-pointer"
              >
                <Newspaper className="w-4 h-4 text-[var(--accent)]" />
                <span>Media &amp; Press</span>
              </button>

              <span className="text-[var(--border-color)] hidden sm:inline">•</span>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[var(--accent)]" />
                <span>ATS Resume (PDF)</span>
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
            <p>
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind. WCAG AA compliant.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] flex items-center"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] flex items-center"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] flex items-center"
              >
                Email
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] flex items-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODALS */}
      {/* ========================================================================= */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ArticlesModal
        isOpen={articlesModalOpen}
        onClose={() => setArticlesModalOpen(false)}
      />

      <MediaModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
      />

      {/* Full Portrait Lightbox Modal */}
      {imageModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile portrait"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="clean-card max-w-sm w-full p-4 space-y-3 bg-[var(--bg-surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
              <span className="text-sm font-bold text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </span>
              <button
                type="button"
                onClick={() => setImageModalOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Close portrait dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-square w-full rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Samiullah Samejo portrait full size"
                className="w-full h-full object-cover object-top"
                width={360}
                height={360}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-xs text-[var(--text-secondary)] space-y-1">
              <div className="flex items-center justify-between font-medium">
                <span className="text-[var(--accent)] font-semibold">
                  Full-Stack &amp; Android Developer
                </span>
                <span>Sukkur, Sindh 🇵🇰</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
