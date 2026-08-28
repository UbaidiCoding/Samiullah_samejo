import React from "react";
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2, Landmark, BookOpen } from "lucide-react";
import { EDUCATION_TIMELINE } from "../data/portfolioData";

export default function EducationTimeline() {
  return (
    <div id="education-milestone-vertical-timeline" className="max-w-3xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education Item 1 */}
        <div className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase font-bold">
                Higher Secondary Certificate (HSC)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded-lg">
                Grade B
              </span>
            </div>

            <h4 className="text-base font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
              Intermediate in Pre-Engineering
            </h4>

            <p className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <Landmark className="w-4 h-4 text-cyan-400 shrink-0" />
              Government Comprehensive Higher Secondary School, Sukkur
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              2022 - 2024
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              Sukkur, Sindh 🇵🇰
            </span>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 px-2.5 py-1 rounded-full uppercase font-bold">
                Secondary School Certificate (SSC)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded-lg">
                B- Grade
              </span>
            </div>

            <h4 className="text-base font-bold text-white font-display group-hover:text-purple-400 transition-colors">
              Matriculation (Science & Math)
            </h4>

            <p className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
              Public School / Secondary Education Board, Sukkur
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              2020 - 2022
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              Sukkur, Sindh 🇵🇰
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
