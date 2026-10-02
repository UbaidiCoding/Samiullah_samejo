import React from "react";
import { CheckCircle2, Cpu, BookOpen } from "lucide-react";
import { SKILL_GROUPS } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 scroll-mt-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Technical Skills
          </h2>
          <p className="mt-1 text-base text-[var(--text-secondary)]">
            Grouped by verified execution depth — no arbitrary percentages or exaggerated metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const isStrong = group.level === "Strong";
            const isWorking = group.level === "Working";

            return (
              <div
                key={group.level}
                className="clean-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {isStrong ? (
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                    ) : isWorking ? (
                      <Cpu className="w-5 h-5 text-[var(--accent)]" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-[var(--text-muted)]" />
                    )}
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {group.level}
                    </h3>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] mb-5">
                    {group.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md border min-h-[32px] inline-flex items-center ${
                          isStrong
                            ? "bg-[var(--accent-light)] text-[var(--accent)] border-[var(--border-color)]"
                            : "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border-[var(--border-color)]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
