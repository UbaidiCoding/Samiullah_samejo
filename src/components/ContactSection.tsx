import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Check, Copy } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    timeline: "2-4 weeks",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(
      `[Freelance Inquiry] ${formData.projectType} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Samiullah,\n\nI would like to inquire about a freelance project.\n\nClient Details:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Project Type: ${formData.projectType}\n- Estimated Timeline: ${formData.timeline}\n\nProject Brief:\n${formData.message || "Looking forward to discussing project requirements and next steps."}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-20">
      <div className="space-y-10 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Get in Touch
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Open for full-time engineering roles, remote junior-to-mid opportunities, and select freelance builds.
          </p>
        </div>

        {/* 1. Direct Tappable Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email */}
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
              onClick={handleCopyEmail}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] shrink-0 transition-colors"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* WhatsApp */}
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

          {/* LinkedIn */}
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

          {/* GitHub */}
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

        {/* 2. Project inquiry (freelance) Form */}
        <div className="clean-card p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Project inquiry (freelance)
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Have a web or Android project in mind? Share a few details and I will reply within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Morgan"
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-sm focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Your Email *
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-sm focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-type"
                  className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Project Type
                </label>
                <select
                  id="inquiry-type"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-sm focus:border-[var(--accent)]"
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
                  className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                >
                  Target Timeline
                </label>
                <select
                  id="inquiry-timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-sm focus:border-[var(--accent)]"
                >
                  <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                  <option value="2-4 weeks">Standard (2-4 weeks)</option>
                  <option value="1-2 months">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
              >
                Project Brief
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Briefly describe what you are looking to build or solve..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] text-sm focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              className="accent-btn-primary w-full sm:w-auto text-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Project Inquiry</span>
            </button>

            {submitted && (
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-2">
                Thank you! Your email client has been prepared with your inquiry details.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
