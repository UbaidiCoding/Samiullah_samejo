import React from "react";
import { X, Printer, Download, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION,
  CERTIFICATIONS,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
} from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      window.print();
    } catch {
      // Safe fallback if print is restricted in iframe
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="clean-card w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl bg-white text-slate-900 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-slate-900">
              ATS-Optimized Resume Preview
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              (Single-page engineering format)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="min-h-[40px] px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-900 bg-white leading-normal text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Samiullah Samejo"
              className="w-16 h-16 rounded-full object-cover border border-slate-300 shrink-0"
              width={64}
              height={64}
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 id="resume-modal-title" className="text-2xl font-bold tracking-tight text-slate-950">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-sky-800 mt-0.5">
                Full-Stack Developer • Android (Kotlin) Developer • AI-Assisted Workflows
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-3 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-800 underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sky-800 underline">
                  github.com/ubaidicoding
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-800 underline">
                  linkedin.com/in/devsamiubaidi
                </a>
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1">
              Technical Proficiencies
            </h2>
            <div className="space-y-1 text-xs">
              <p>
                <strong className="text-slate-900">Strong: </strong>
                {SKILL_GROUPS[0].skills.join(", ")}
              </p>
              <p>
                <strong className="text-slate-900">Working Knowledge: </strong>
                {SKILL_GROUPS[1].skills.join(", ")}
              </p>
              <p>
                <strong className="text-slate-900">Actively Learning: </strong>
                {SKILL_GROUPS[2].skills.join(", ")}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {exp.role} — <span className="font-semibold text-slate-700">{exp.organization}</span>
                    </span>
                    <span className="text-slate-500 font-normal">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1">
              Selected Technical Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {FEATURED_PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="p-2.5 rounded border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex justify-between items-center font-bold text-slate-900">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-sky-800 font-semibold">{p.category}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-snug">
                    {p.outcome}
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    Stack: {p.techStack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <strong className="text-slate-900">{EDUCATION.degree}</strong> —{" "}
                <span className="text-slate-700">{EDUCATION.institution}</span>
              </div>
              <span className="text-slate-500">{EDUCATION.duration}</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-700">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between items-center">
                  <span>
                    • <strong>{cert.title}</strong> ({cert.issuer})
                  </span>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-800 text-[10px] underline ml-1"
                  >
                    Verify
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
