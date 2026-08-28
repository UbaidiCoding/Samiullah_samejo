import React, { useState } from "react";
import { Sparkles, Trophy, Star, ShieldCheck, MapPin, ExternalLink, Play, CheckCircle2 } from "lucide-react";

export default function SocialFootprint() {
  const [loadEmbed1, setLoadEmbed1] = useState(false);
  const [loadEmbed2, setLoadEmbed2] = useState(false);

  return (
    <div id="social-proof-media-footprint" className="space-y-8 py-2">
      {/* Grid containing both Media features side-by-side inside glass containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Frame Card 1: Clap Pakistan */}
        <div className="glass-morph p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-cyan-400/30 transition-all duration-300 relative group overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                Editorial Spotlight
              </span>
              <span className="text-[10px] text-cyan-400 font-mono font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Pakistan Press
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                Clap Pakistan Feature Coverage
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Highlighting the software development milestones, community mentorship, and local SaaS initiatives built by Samiullah Samejo across Sindh.
              </p>
            </div>

            {/* Interactive on-demand embed or snapshot card */}
            <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 p-3 min-h-[220px] flex flex-col items-center justify-center text-center">
              {loadEmbed1 ? (
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclappk%2Fposts%2Fpfbid0WkkZj5Xki6bQWMfxAEa5iWiVoE2KaLaSZ4A7VYLHnLAtcSSrUwGQpQ9KovqsUYfTl&show_text=true&width=500" 
                  width="100%" 
                  height="450" 
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Clap Pakistan Samiullah Samejo Post Embed"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
              ) : (
                <div className="space-y-3 p-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Official Clap Pakistan Editorial</span>
                    <span className="text-[11px] text-slate-400">Published Feature on Samiullah Samejo</span>
                  </div>
                  <button
                    onClick={() => setLoadEmbed1(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3" /> Load Interactive Embed
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Editorial
            </span>
            <a 
              href="https://www.facebook.com/clappk/posts/pfbid0WkkZj5Xki6bQWMfxAEa5iWiVoE2KaLaSZ4A7VYLHnLAtcSSrUwGQpQ9KovqsUYfTl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-cyan-400 hover:text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1 transition-all"
            >
              Open Post <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Frame Card 2: Sukkur IBA University */}
        <div className="glass-morph p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-400/30 transition-all duration-300 relative group overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-purple-400" />
                Academic Validation
              </span>
              <span className="text-[10px] text-purple-400 font-mono font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> SIBA EDC
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors font-display">
                Sukkur IBA University EDC Highlight
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Entrepreneurial capacity bootcamps and executive software training networks organized inside the Sukkur region.
              </p>
            </div>

            {/* Interactive on-demand embed or snapshot card */}
            <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 p-3 min-h-[220px] flex flex-col items-center justify-center text-center">
              {loadEmbed2 ? (
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FExecutiveDevelopmentCenterSukkurIBA%2Fposts%2Fpfbid0h5nJmEsmjX91CgT4tQjA9WvX6a6tB3Vf8w1k2z3x4y5z6a7b8c9d0e1f2g3h4i5j6" 
                  width="100%" 
                  height="450" 
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Sukkur IBA EDC Samiullah Samejo Post Embed"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
              ) : (
                <div className="space-y-3 p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Sukkur IBA University Training</span>
                    <span className="text-[11px] text-slate-400">Mobile & Web Development Certification</span>
                  </div>
                  <button
                    onClick={() => setLoadEmbed2(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-purple-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3" /> Load Interactive Embed
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Collaboration
            </span>
            <a 
              href="https://facebook.com/ExecutiveDevelopmentCenterSukkurIBA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-purple-400 hover:text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1 transition-all"
            >
              Open SIBA Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
