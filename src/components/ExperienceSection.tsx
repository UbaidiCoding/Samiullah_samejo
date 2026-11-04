import React from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 scroll-mt-20 border-b border-[var(--border-color)]">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Experience &amp; Education
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Verified engineering roles, technical mentorship initiatives, and academic qualifications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[var(--accent)]" />
            <span>Work History &amp; Community Leadership</span>
          </h3>

          {/* Left timeline rail on lg+ */}
          <div className="space-y-6 lg:relative lg:pl-8 lg:before:absolute lg:before:left-3 lg:before:top-4 lg:before:bottom-4 lg:before:w-0.5 lg:before:bg-[var(--border-color)]">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="clean-card p-6 transition-colors lg:relative lg:before:absolute lg:before:-left-[27px] lg:before:top-7 lg:before:w-3.5 lg:before:h-3.5 lg:before:rounded-full lg:before:bg-[var(--accent)] lg:before:border-2 lg:before:border-[var(--bg-page)]"
              >
                {/* Below md: stack title, org, date/location vertically; From md up: date/location right-aligned */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-[var(--border-color)] pb-3 mb-4">
                  <div className="space-y-0.5">
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-muted)] md:justify-end md:text-right">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      {exp.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
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
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
            <span>Academic Background</span>
          </h3>

          <div className="clean-card p-6">
            {/* Below md: stacked vertically; md+: right-aligned */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {EDUCATION.degree}
                </h4>
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  {EDUCATION.institution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-muted)] md:justify-end md:text-right">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {EDUCATION.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
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
