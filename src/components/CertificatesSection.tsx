import React, { useState } from "react";
import { Award, ExternalLink, Briefcase, Shield, ChevronDown, CheckCircle2 } from "lucide-react";
import {
  CERTIFICATIONS,
  JOB_SIMULATIONS,
  MICROSOFT_LEARN_GROUPS,
  MICROSOFT_LEARN_PROFILE_URL,
} from "../data/portfolioData";

export default function CertificatesSection() {
  // First group ("cloud-basics") open by default
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "cloud-basics": true,
  });

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const totalBadges = MICROSOFT_LEARN_GROUPS.reduce(
    (acc, group) => acc + group.badges.length,
    0
  );

  return (
    <section id="certifications" className="py-12 sm:py-16 scroll-mt-20">
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Certifications &amp; Technical Credentials
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Accredited industry certifications, Microsoft security fundamentals training, and virtual engineering simulations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. ACCREDITED CERTIFICATIONS */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Award className="w-5 h-5 text-[var(--accent)]" />
            <span>Accredited Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="clean-card p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[var(--accent)] block mb-1">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">Verified</span>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline min-h-[36px]"
                    aria-label={`Verify ${cert.title}`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MICROSOFT LEARN - SECURITY, COMPLIANCE & IDENTITY FUNDAMENTALS */}
        {/* ========================================================================= */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
          {/* Header block with Title, Subtitle, Total Badges Chip, and Verify Button */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <Shield className="w-5 h-5 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  Microsoft Learn - Security, Compliance &amp; Identity Fundamentals
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)] shrink-0">
                  {totalBadges} badges
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                18 completed module badges (Aug-Sep 2026). Training aligned with the SC-900 exam; not the SC-900 certification.
              </p>
            </div>

            <a
              href={MICROSOFT_LEARN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-btn-secondary text-xs inline-flex items-center gap-2 min-h-[44px] px-4 shrink-0 self-start sm:self-center font-semibold"
              aria-label="Verify on Microsoft Learn profile"
            >
              <span>Verify on Microsoft Learn</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)]" />
            </a>
          </div>

          {/* Single Accordion Card with 6 Collapsible Groups */}
          <div className="clean-card divide-y divide-[var(--border-color)] overflow-hidden shadow-sm">
            {MICROSOFT_LEARN_GROUPS.map((group) => {
              const isOpen = !!openGroups[group.id];
              const panelId = `ms-panel-${group.id}`;
              const buttonId = `ms-btn-${group.id}`;

              return (
                <div key={group.id} className="transition-colors">
                  {/* Accordion Group Header Button */}
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleGroup(group.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-[var(--bg-surface-subtle)] transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                      <span className="text-sm font-bold text-[var(--text-primary)]">
                        {group.title}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-normal">
                        ({group.date})
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                        {group.badges.length} {group.badges.length === 1 ? "badge" : "badges"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Accordion Collapsible Panel */}
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 bg-[var(--bg-surface-subtle)]/40 border-t border-[var(--border-color)]/60"
                    >
                      <p className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                        Completed Badges • {group.date}
                      </p>
                      <ul className="space-y-2.5" role="list">
                        {group.badges.map((badge, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                          >
                            <Shield
                              className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{badge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. JOB SIMULATIONS */}
        {/* ========================================================================= */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[var(--accent)]" />
              <span>Job Simulations</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Hands-on corporate engineering task simulations completed via Forage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JOB_SIMULATIONS.map((sim) => (
              <div
                key={sim.id}
                className="clean-card p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[var(--accent)] block mb-1">
                    {sim.issuer} • Virtual Job Simulation
                  </span>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {sim.title}
                  </h4>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">Completed</span>
                  <a
                    href={sim.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline min-h-[36px]"
                    aria-label={`View ${sim.title} certificate of completion`}
                  >
                    <span>View Completion</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
