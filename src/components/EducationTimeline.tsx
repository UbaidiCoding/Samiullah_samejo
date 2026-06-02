import { GraduationCap, MapPin, Calendar, Award, Globe } from "lucide-react";
import { EDUCATION_TIMELINE } from "../data/portfolioData";

export default function EducationTimeline() {
  return (
    <div id="education-milestone-vertical-timeline" className="relative max-w-2xl mx-auto">
      {/* Central vertical line axis */}
      <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent -translate-x-1/2" />

      <div className="space-y-12">
        {EDUCATION_TIMELINE.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={item.id}
              id={`edu-item-${item.id}`}
              className={`relative flex flex-col sm:flex-row items-stretch gap-6 ${
                isLeft ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center -translate-x-1/2 z-10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-slate-900 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Empty spacing side for layout on desktop */}
              <div className="hidden sm:block w-1/2" />

              {/* Card wrapper */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                <div className="glass-morph p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/20 transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Glowing vertical marker */}
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-cyan-500/40" />
                  
                  {/* Degree name */}
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-500/10 px-2 py-0.5 rounded uppercase">
                    Verified Degree
                  </span>
                  
                  <h4 className="text-sm font-bold text-white tracking-tight mt-2.5 font-display group-hover:text-cyan-400 transition-colors">
                    {item.degree}
                  </h4>

                  {/* Institution details */}
                  <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-500" />
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-500 mt-4 pt-4 border-t border-slate-950">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {item.grade && (
                    <div className="mt-3.5 p-2 rounded-xl bg-slate-900/60 border border-slate-850/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Board Grading / Score:</span>
                      <span className="text-emerald-400 font-bold">{item.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
