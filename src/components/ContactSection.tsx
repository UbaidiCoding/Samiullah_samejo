import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    timeline: "2-4 weeks",
    message: "",
  });

  // Honeypot spam protection
  const [honeypot, setHoneypot] = useState("");

  // Validation & Submission States
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address (e.g., name@domain.com).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Silently ignore honeypot spam bot submissions
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Provide tactile UI feedback before redirecting to mail client
    setTimeout(() => {
      const subject = encodeURIComponent(
        `[Freelance Inquiry] ${formData.projectType} from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Hello Samiullah,\n\nI would like to inquire about a freelance project.\n\nClient Details:\n- Name: ${formData.name.trim()}\n- Email: ${formData.email.trim()}\n- Project Type: ${formData.projectType}\n- Estimated Timeline: ${formData.timeline}\n\nProject Brief:\n${
          formData.message.trim() ||
          "Looking forward to discussing project requirements and next steps."
        }\n\nBest regards,\n${formData.name.trim()}`
      );

      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-12 md:py-20 scroll-mt-20">
      <div className="space-y-10 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Get in Touch
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Open for full-time engineering roles, remote junior-to-mid opportunities, and select freelance builds.
          </p>
        </div>

        {/* 1. Direct Tappable Contact Cards (1 col base, 2 cols md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Email Card */}
          <div className="clean-card p-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-light)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-[var(--text-muted)] block uppercase tracking-wider">
                  Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] shrink-0 transition-colors cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* WhatsApp Card */}
          <div className="clean-card p-5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-light)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[var(--text-muted)] block uppercase tracking-wider">
                WhatsApp
              </span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px] inline-flex items-center"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="clean-card p-5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-light)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
              <Linkedin className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[var(--text-muted)] block uppercase tracking-wider">
                LinkedIn
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px] inline-flex items-center"
              >
                linkedin.com/in/devsamiubaidi
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="clean-card p-5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-light)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
              <Github className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[var(--text-muted)] block uppercase tracking-wider">
                GitHub
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px] inline-flex items-center"
              >
                github.com/ubaidicoding
              </a>
            </div>
          </div>

        </div>

        {/* 2. Project Inquiry Form */}
        <div className="clean-card p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Project inquiry (freelance)
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Have a web or Android project in mind? Share a few details and I will reply within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            
            {/* Honeypot field for bot protection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website-hp">Leave this field blank</label>
              <input
                id="website-hp"
                type="text"
                name="website_honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Single column on mobile; 2-col for name and email from md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Name Field */}
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Alex Morgan"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  disabled={isSubmitting}
                  className={`w-full min-h-[48px] px-3.5 py-3 rounded-lg border bg-[var(--bg-page)] text-[var(--text-primary)] text-base focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors ${
                    errors.name ? "border-red-500" : "border-[var(--border-color)]"
                  }`}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    aria-live="polite"
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-500 mt-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  inputMode="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={isSubmitting}
                  className={`w-full min-h-[48px] px-3.5 py-3 rounded-lg border bg-[var(--bg-page)] text-[var(--text-primary)] text-base focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors ${
                    errors.email ? "border-red-500" : "border-[var(--border-color)]"
                  }`}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    aria-live="polite"
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-500 mt-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Project Type & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-type"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Project Type
                </label>
                <select
                  id="inquiry-type"
                  autoComplete="off"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] px-3.5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-base focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <option value="Full-Stack Web App">Full-Stack Web App (React / Next.js)</option>
                  <option value="Android Mobile App">Android Mobile App (Kotlin / Compose)</option>
                  <option value="Python Automation / Dashboard">Python Automation / Dashboard</option>
                  <option value="General Consulting">Technical Consulting</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="inquiry-timeline"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Target Timeline
                </label>
                <select
                  id="inquiry-timeline"
                  autoComplete="off"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] px-3.5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-base focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                  <option value="2-4 weeks">Standard (2-4 weeks)</option>
                  <option value="1-2 months">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label
                htmlFor="inquiry-message"
                className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5"
              >
                Project Brief
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                autoComplete="off"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Briefly describe what you are looking to build or solve..."
                disabled={isSubmitting}
                className="w-full px-3.5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-base focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              />
            </div>

            {/* Submit Button with Disabled + Spinner State */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="accent-btn-primary w-full md:w-auto text-base min-h-[48px] px-8 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Send project inquiry"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Preparing inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </div>

            {/* Success notification with aria-live */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm flex items-start gap-3 mt-3 animate-fade-in"
              >
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Thank you, {formData.name || "friend"}!</p>
                  <p className="text-xs sm:text-sm mt-0.5 opacity-90">
                    Your email client has been prepared with your project inquiry details. I will review and reply within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
