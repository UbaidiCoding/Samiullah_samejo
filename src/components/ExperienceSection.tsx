import React from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 scroll-mt-20">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Experience &amp; Education
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Verified roles, technical mentorship initiatives, and academic qualifications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[var(--accent)]" />
            <span>Work History &amp; Community Leadership</span>
          </h3>

          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="clean-card p-6 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-color)] pb-3 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-medium text-[var(--accent)]">
                      {exp.organization}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Block */}
        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
            <span>Academic Background</span>
          </h3>

          <div className="clean-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {EDUCATION.degree}
                </h4>
                <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                  {EDUCATION.institution}
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-1 sm:mt-0">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {EDUCATION.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {EDUCATION.location}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
