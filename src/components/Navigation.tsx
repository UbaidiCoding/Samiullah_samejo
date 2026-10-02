import React, { useState } from "react";
import { Moon, Sun, Menu, X, FileText, Send } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavigationProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export default function Navigation({
  darkMode,
  onToggleTheme,
  onOpenResume,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-page)]/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px] items-center"
        >
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt="Samiullah Samejo profile thumbnail"
            className="w-8 h-8 rounded-full object-cover border border-[var(--border-color)]"
            width={32}
            height={32}
            referrerPolicy="no-referrer"
          />
          <span>{PERSONAL_INFO.name}</span>
          <span className="hidden sm:inline text-xs font-normal text-[var(--text-muted)]">
            ({PERSONAL_INFO.brand})
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Resume (PDF) Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex accent-btn-secondary text-sm"
          >
            <FileText className="w-4 h-4 text-[var(--accent)]" />
            <span>Resume (PDF)</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex accent-btn-primary text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-md text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-color)] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="accent-btn-secondary w-full justify-center text-sm"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Resume (PDF)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="accent-btn-primary w-full justify-center text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
