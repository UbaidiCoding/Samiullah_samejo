import React from "react";
import { Sparkles, Facebook, Trophy, Star, ShieldCheck, MapPin } from "lucide-react";

export default function SocialFootprint() {
  return (
    <div id="social-proof-media-footprint" className="space-y-12 py-6">
      
      {/* Section Sub-heading Header */}
      <div className="text-center space-y-2">
        <span className="text-[10px] font-mono tracking-widest text-[#22d3ee] uppercase font-bold bg-[#22d3ee]/10 px-2.5 py-1 rounded-full">
          Live Press & Regional Validation
        </span>
        <h4 className="text-2xl font-bold font-display text-white">
          Media Features & Community Influence
        </h4>
        <p className="text-xs text-white/50 max-w-sm mx-auto leading-relaxed">
          Interactive feeds verifying Samiullah Samejo's high-impact IT and cybersecurity leadership on top digital channels in Pakistan.
        </p>
      </div>

      {/* Grid containing both Facebook post plugins side-by-side inside glass containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Frame Card 1: Clap Pakistan */}
        <div className="glass-morph p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-400/20 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-400/5 rounded-full blur-[30px] pointer-events-none" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                Featured Editorial Spotlight
              </span>
              <span className="text-[10px] text-cyan-400 font-mono font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Pakistan Press
              </span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                Clap Pakistan Feature Coverage
              </h5>
              <p className="text-xs text-white/50 mt-1">
                Verifying the development achievements, leadership modules, and local SaaS scale achieved across the Sindh province.
              </p>
            </div>

            {/* Simulated Frame Holder for Elegant loading of the active plugin */}
            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-2 flex justify-center items-center select-none shadow-inner">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclappk%2Fposts%2Fpfbid0WkkZj5Xki6bQWMfxAEa5iWiVoE2KaLaSZ4A7VYLHnLAtcSSrUwGQpQ9KovqsUYfTl&show_text=true&width=500" 
                width="100%" 
                height="510" 
                style={{ border: "none", overflow: "hidden", minHeight: "510px" }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Clap Pakistan Samiullah Samejo Post Embed"
                className="rounded-lg h-[510px]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
            <span className="text-[10px] text-white/45 font-mono">Status: Verified Feature</span>
            <a 
              href="https://www.facebook.com/clappk/posts/pfbid0WkkZj5Xki6bQWMfxAEa5iWiVoE2KaLaSZ4A7VYLHnLAtcSSrUwGQpQ9KovqsUYfTl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-cyan-400 hover:text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1 transition-all"
            >
              Open Original Post →
            </a>
          </div>
        </div>

        {/* Frame Card 2: Sukkur IBA University */}
        <div className="glass-morph p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-400/20 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-500/5 rounded-full blur-[30px] pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-purple-400" />
                University Collaboration Press
              </span>
              <span className="text-[10px] text-purple-400 font-mono font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> SIBA EDC
              </span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                Sukkur IBA University EDC Highlight
              </h5>
              <p className="text-xs text-white/50 mt-1">
                Promoting entrepreneurial digital capacity bootcamps and executive training networks delivered inside Sukkur.
              </p>
            </div>

            {/* Simulated Frame Holder for Elegant loading of the active plugin */}
            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-2 flex justify-center items-center select-none shadow-inner">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fsibaedc%2Fposts%2Fpfbid04N4dmiogXAVXAmRKH29k6pt3QCcnPx3km9bPkk8cS5rKVvFhvE7q9xC53uAiiCWWl&show_text=true&width=500" 
                width="100%" 
                height="510" 
                style={{ border: "none", overflow: "hidden", minHeight: "510px" }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Sukkur IBA University Samejo Post Embed"
                className="rounded-lg h-[510px]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
            <span className="text-[10px] text-white/45 font-mono">Institution: Sukkur IBA University</span>
            <a 
              href="https://www.facebook.com/sibaedc/posts/pfbid04N4dmiogXAVXAmRKH29k6pt3QCcnPx3km9bPkk8cS5rKVvFhvE7q9xC53uAiiCWWl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-purple-400 hover:text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1 transition-all"
            >
              Open Original Post →
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
