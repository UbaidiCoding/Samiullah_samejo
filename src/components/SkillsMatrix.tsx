import React, { useState } from "react";
import { Code2, Smartphone, Database, Shield, Wrench, Sparkles, CheckCircle2, Cpu } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "TypeScript", level: 92, highlight: true },
      { name: "Kotlin", level: 90, highlight: true },
      { name: "Python", level: 88, highlight: true },
      { name: "Java", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Web Architecture",
    icon: Sparkles,
    color: "purple",
    skills: [
      { name: "React 18+", level: 94, highlight: true },
      { name: "Next.js (App Router)", level: 92, highlight: true },
      { name: "Tailwind CSS", level: 96, highlight: true },
      { name: "Vite", level: 90 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Web Workers", level: 85 },
      { name: "SEO & Lighthouse (90+)", level: 95, highlight: true },
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Engineering",
    icon: Smartphone,
    color: "emerald",
    skills: [
      { name: "Android Studio", level: 92, highlight: true },
      { name: "Jetpack Compose", level: 90, highlight: true },
      { name: "Kotlin Android", level: 90, highlight: true },
      { name: "Google Play Deployment", level: 92, highlight: true },
      { name: "Flutter", level: 80 },
      { name: "Room SQLite", level: 85 },
      { name: "Firebase Android SDK", level: 92 },
    ],
  },
  {
    id: "backend",
    title: "Backend, APIs & Databases",
    icon: Database,
    color: "blue",
    skills: [
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express.js", level: 90, highlight: true },
      { name: "Firebase Firestore", level: 94, highlight: true },
      { name: "Supabase & PostgreSQL", level: 88, highlight: true },
      { name: "MongoDB", level: 85 },
      { name: "RESTful API Design", level: 92 },
      { name: "JWT Auth & Sessions", level: 90 },
    ],
  },
  {
    id: "security_ai",
    title: "Cybersecurity & AI Acceleration",
    icon: Shield,
    color: "rose",
    skills: [
      { name: "OWASP Top 10 Security", level: 90, highlight: true },
      { name: "Penetration Testing Basics", level: 85 },
      { name: "Security Risks Auditing", level: 92, highlight: true },
      { name: "Google GenAI SDK", level: 90, highlight: true },
      { name: "Search Grounding & Agents", level: 88 },
      { name: "API Proxy Defense", level: 92 },
    ],
  },
  {
    id: "tools",
    title: "DevOps, Workflow & Systems",
    icon: Wrench,
    color: "yellow",
    skills: [
      { name: "Git & GitHub", level: 94, highlight: true },
      { name: "Vercel & Netlify", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Linux CLI", level: 85 },
      { name: "WordPress Optimization", level: 88 },
      { name: "Jira Automation", level: 85 },
    ],
  },
];

export default function SkillsMatrix() {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const displayedCategories = selectedCat === "all"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === selectedCat);

  return (
    <div id="technical-skills-matrix" className="space-y-8">
      {/* Category Tab Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto">
        <button
          onClick={() => setSelectedCat("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            selectedCat === "all"
              ? "bg-cyan-500 text-black font-bold shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          All Skills (100+ Skills)
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCat === cat.id
                ? "bg-cyan-500 text-black font-bold shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {cat.title.split("&")[0].trim()}
          </button>
        ))}
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Pills & Progress */}
                <div className="space-y-2.5 pt-1">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={`flex items-center gap-1.5 ${skill.highlight ? "text-white font-bold" : "text-slate-300"}`}>
                          {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />}
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Production Tested
                </span>
                <span className="text-cyan-400 font-semibold">High Proficiency</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
