import React, { useState } from "react";
import { Terminal, ShieldCheck, Cpu, Code2, Sparkles, CheckCircle2, Play, Copy, Check, Flame } from "lucide-react";

export default function HeroCodeHud() {
  const [activeTab, setActiveTab] = useState<"system" | "stack" | "vision">("system");
  const [copied, setCopied] = useState(false);

  const commandSnippet = `// Production Engineer Diagnostic
const developer = {
  name: "Samiullah Samejo",
  alias: "SamiUbaidi",
  role: "Full-Stack & Mobile Developer",
  security: "Certified Cybersecurity Analyst",
  location: "Sukkur, Sindh, Pakistan 🇵🇰",
  status: "🟢 Open for Full-Time / Contract Roles",
  metrics: {
    productionApps: "15+ Shipped",
    stepFitProDownloads: "1,000+ Real Users",
    lighthouseAvg: 96.4,
    communityMembers: "5,000+ Engineers"
  },
  dreamCompanies: ["Google", "Microsoft", "Oracle", "Meta", "TikTok"],
  dreamHubs: ["Saudi Arabia", "Dubai/UAE", "Germany", "Finland", "Paris", "US", "UK"]
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(commandSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090b14]/90 border border-white/12 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] text-slate-400 font-semibold ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            samiullah@devsamiubaidi: ~
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab("system")}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
              activeTab === "system"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Telemetry
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
              activeTab === "stack"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Stack
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
              activeTab === "vision"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Vision
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 text-slate-300 leading-relaxed min-h-[220px] flex flex-col justify-between">
        {activeTab === "system" && (
          <div className="space-y-2.5 animate-fade-in">
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5 text-slate-400">
              <span className="text-cyan-400">$ node --inspect developer.telemetry.js</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[10px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied JSON" : "Copy"}
              </button>
            </div>

            <div className="space-y-1 text-slate-300 text-[11px] sm:text-xs">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-300">samiullah</span> = &#123;</p>
              <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Samiullah Samejo (SamiUbaidi)"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">primaryFocus</span>: <span className="text-emerald-300">"React, Next.js, Kotlin Mobile & OWASP Security"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">provenProduction</span>: <span className="text-emerald-300">"15+ Apps Shipped • StepFit Pro (1k+ Users)"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">averageLighthouse</span>: <span className="text-yellow-400">96.5</span> <span className="text-slate-500">// Top 1% Performance</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">communityCEO</span>: <span className="text-emerald-300">"Ubaidi IT Community (5,000+ Members)"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">available</span>: <span className="text-emerald-400 font-bold">true</span> <span className="text-slate-500">// Ready for Global Roles</span></p>
              <p>&#125;;</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Security Audited
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                <Cpu className="w-3 h-3" /> Zero Scroll Latency
              </span>
            </div>
          </div>
        )}

        {activeTab === "stack" && (
          <div className="space-y-3 animate-fade-in text-xs">
            <p className="text-cyan-400 font-semibold">$ cat ./active-competencies.json</p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-purple-400 block font-bold mb-0.5">Frontend & Mobile</span>
                <span className="text-slate-300">React, Next.js, Kotlin, Jetpack Compose, Tailwind CSS</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-cyan-400 block font-bold mb-0.5">Backend & Cloud</span>
                <span className="text-slate-300">Node.js, Express, Firebase, PostgreSQL, Supabase</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-emerald-400 block font-bold mb-0.5">Cybersecurity</span>
                <span className="text-slate-300">OWASP Top 10, Threat Analysis, Token Security, API Proxying</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-yellow-400 block font-bold mb-0.5">Community & Leadership</span>
                <span className="text-slate-300">CEO Ubaidi IT, Sukkur Runners Founder, 100+ Mentored</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "vision" && (
          <div className="space-y-3 animate-fade-in text-xs">
            <p className="text-purple-400 font-semibold">$ cat ./global-aspirations.md</p>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-2 text-[11px]">
              <p className="text-white font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Target Global Innovation Hubs:
              </p>
              <p className="text-slate-300">
                Saudi Arabia 🇸🇦 • Dubai / UAE 🇦🇪 • Germany 🇩🇪 • Finland 🇫🇮 • Paris 🇫🇷 • United States 🇺🇸 • United Kingdom 🇬🇧
              </p>
              <p className="text-slate-400 pt-1 border-t border-white/5">
                <strong className="text-cyan-300">Target Companies:</strong> Google, Microsoft, Oracle, Meta, TikTok & High-Growth AI Ventures.
              </p>
              <p className="text-emerald-400 font-semibold">
                🎯 Career Trajectory: Software Engineer → Tech Founder & Global CEO.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-black/80 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Production Node Active (Port 3000)
        </span>
        <span className="text-cyan-400/80">UTF-8 • 120 FPS Rendering</span>
      </div>
    </div>
  );
}
