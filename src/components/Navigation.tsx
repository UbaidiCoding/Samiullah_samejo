import React, { useState, useEffect, useRef } from "react";
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
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close drawer and handle focus trap
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus the first interactive element when opening drawer
  useEffect(() => {
    if (mobileMenuOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      firstFocusable?.focus();
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-page)]/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Name (Stray brand nickname removed as required) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px]"
        >
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt="Samiullah Samejo avatar"
            className="w-8 h-8 rounded-full object-cover border border-[var(--border-color)] shrink-0"
            width={32}
            height={32}
            referrerPolicy="no-referrer"
          />
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Inline Navigation (>=768px / md+) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button (visible at all widths) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)] transition-colors cursor-pointer"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Desktop Right Actions: Resume (Ghost) & Contact (Primary) >=768px (md+) */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenResume}
              className="accent-btn-secondary min-h-[44px] text-sm"
              aria-label="Open ATS Resume modal"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="accent-btn-primary min-h-[44px] text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle Button (<768px / <md) */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)] transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Full-Width Mobile Drawer (<768px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[var(--bg-page)]/95 backdrop-blur-lg border-b border-[var(--border-color)] overflow-y-auto px-4 py-6 flex flex-col justify-between"
        >
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] px-3 mb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center min-h-[48px] px-3.5 py-3 rounded-lg text-base font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[var(--border-color)] space-y-3">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenResume();
              }}
              className="accent-btn-secondary w-full justify-center min-h-[48px] text-base"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              onClick={closeMenu}
              className="accent-btn-primary w-full justify-center min-h-[48px] text-base"
            >
              <Send className="w-4 h-4" />
              <span>Contact Samiullah</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
