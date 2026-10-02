import React, { useState, useEffect } from "react";
import {
  Download,
  Phone,
  MapPin,
  CheckCircle2,
  FileText,
  ExternalLink,
  BookOpen,
  Newspaper,
  X,
  Sparkles,
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
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors">
      {/* 1. STICKY HEADER */}
      <Navigation
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 2. HERO SECTION */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="pt-10 pb-12 sm:pt-16 sm:pb-20 border-b border-[var(--border-color)]"
        >
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 sm:gap-12">
            
            {/* Left Content */}
            <div className="space-y-6 flex-1">
              
              {/* Location & Brand Pill */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-surface-subtle)] px-3 py-1.5 rounded-full border border-[var(--border-color)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-[var(--text-muted)]">Brand: {PERSONAL_INFO.brand}</span>
              </div>

              {/* Exact H1 */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                  Samiullah Samejo - Full-Stack &amp; Android Developer
                </h1>
                
                {/* One-sentence value statement */}
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {PERSONAL_INFO.valueStatement}
                </p>
              </div>

              {/* Three Proof Stats Using Only True Facts */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-lg">
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

              {/* Two CTAs: Download Resume, WhatsApp */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="accent-btn-primary min-h-[44px] cursor-pointer"
                  aria-label="Download ATS Resume PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-btn-secondary min-h-[44px]"
                  aria-label="Chat directly with Samiullah on WhatsApp"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp (+92 342 0372799)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Actual Portrait Avatar with Zoom Feature */}
            <div className="flex md:justify-end shrink-0">
              <div
                onClick={() => setImageModalOpen(true)}
                className="group relative cursor-pointer"
                title="Click to view full verified portrait"
              >
                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md group-hover:border-[var(--accent)] transition-all">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Samiullah Samejo (SamiUbaidi) verified developer profile portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    width={176}
                    height={176}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[var(--bg-surface)] text-[var(--text-primary)] px-2 py-1 rounded-md border border-[var(--border-color)] text-[10px] font-bold flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Verified</span>
                </div>
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
                {PERSONAL_INFO.name} ({PERSONAL_INFO.brand})
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Full-Stack &amp; Android Developer • {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Articles and Media separate pages linked from the footer */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => setArticlesModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                <span>Technical Articles</span>
              </button>

              <span className="text-[var(--border-color)]">•</span>

              <button
                onClick={() => setMediaModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors min-h-[44px] cursor-pointer"
              >
                <Newspaper className="w-4 h-4 text-[var(--accent)]" />
                <span>Media &amp; Press</span>
              </button>

              <span className="text-[var(--border-color)]">•</span>

              <button
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
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React &amp; TypeScript. WCAG AA compliant.
            </p>
            <div className="flex items-center gap-4">
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
      
      {/* ATS Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Technical Articles Modal */}
      <ArticlesModal
        isOpen={articlesModalOpen}
        onClose={() => setArticlesModalOpen(false)}
      />

      {/* Media & Press Features Modal */}
      <MediaModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
      />

      {/* Portrait Lightbox Modal */}
      {imageModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile portrait"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
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
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-xs text-[var(--text-secondary)] space-y-1">
              <div className="flex items-center justify-between font-medium">
                <span className="flex items-center gap-1 text-[var(--accent)]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Developer
                </span>
                <span>Sukkur, Sindh 🇵🇰</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)]">
                Full-Stack &amp; Android Developer • Brand: {PERSONAL_INFO.brand}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
