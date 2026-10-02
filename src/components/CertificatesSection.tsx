import React from "react";
import { Award, ExternalLink, Briefcase } from "lucide-react";
import { CERTIFICATIONS, JOB_SIMULATIONS } from "../data/portfolioData";

export default function CertificatesSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 scroll-mt-20">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Certifications &amp; Job Simulations
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Verified credentials from industry leaders and practical open-access engineering simulations.
          </p>
        </div>

        {/* 1. Accredited Certifications */}
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

        {/* 2. Job Simulations (explicitly labeled as simulations, not certifications) */}
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
