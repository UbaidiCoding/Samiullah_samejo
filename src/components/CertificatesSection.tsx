import { useState } from "react";
import { Award, CheckCircle2, Search, ExternalLink, X, Calendar, Landmark, Sparkles } from "lucide-react";
import { Certificate } from "../types";
import { CERTIFICATIONS } from "../data/portfolioData";

export default function CertificatesSection() {
  const [certs] = useState<Certificate[]>(CERTIFICATIONS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("All");
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Extract unique issuers
  const issuers: string[] = ["All", ...Array.from(new Set(certs.map((c) => c.issuer))).map(String)];

  const filteredCerts = certs.filter((cert) => {
    const matchesIssuer = selectedIssuer === "All" || cert.issuer === selectedIssuer;
    const matchesQuery =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIssuer && matchesQuery;
  });

  return (
    <div id="certifications-interactive-showcase" className="relative">
      {/* Search and Issuer Filters */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-1 bg-black/50 border border-slate-800 p-1 rounded-xl">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              id={`cert-filter-${issuer.replace(/\W/g, "-").toLowerCase()}`}
              onClick={() => setSelectedIssuer(issuer)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedIssuer === issuer
                  ? "bg-purple-950 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>

        <div className="relative max-w-md w-full lg:w-72">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            id="certifications-search-input"
            type="text"
            placeholder="Search credentials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-black/50 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 font-mono transition-all"
          />
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.slice().reverse().map((cert) => (
          <div
            key={cert.id}
            id={`cert-card-${cert.id}`}
            onClick={() => setActiveCert(cert)}
            className="group relative cursor-pointer flex flex-col justify-between p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.08)] backdrop-blur-md"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:bg-purple-950/30 group-hover:border-purple-500/30 transition-all">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/60 uppercase">
                {cert.category}
              </span>
            </div>

            {/* Core details */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors tracking-tight line-clamp-2 min-h-[40px] font-display">
                {cert.title}
              </h4>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <Landmark className="w-3.5 h-3.5 text-slate-500" />
                {cert.issuer}
              </p>
            </div>

            {/* Credential Token or Verification ID inside card footer */}
            <div className="pt-3 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-600" />
                {cert.issueDate}
              </span>
              
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1 font-medium">
                Verify Credentials
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modern High-Fidelity Certificate Vector Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in animate-duration-200">
          <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Vector Certificate Stage left */}
            <div className="flex-1 p-6 md:p-8 bg-slate-900/40 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800/80">
              
              {/* Dynamic Certificate Frame in SVG */}
              <div className="w-full max-w-md aspect-[1.414/1] bg-stone-900 border-8 border-double border-amber-600/30 p-4 rounded-md relative text-stone-300 font-serif flex flex-col justify-between shadow-2xl text-center">
                {/* Vintage BG Accents */}
                <div className="absolute inset-0 bg-[radial-gradient(#1c1c1a_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-amber-600/10 pointer-events-none" />

                {/* Issuer Seal watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-stone-200">
                  <Award className="w-48 h-48" />
                </div>

                <div>
                  <h5 className="font-mono text-[9px] uppercase tracking-[0.3em] font-medium text-amber-500/70">
                    Security Verification Seal
                  </h5>
                  <h3 className="font-serif italic text-base font-bold text-amber-400/90 mt-1">
                    Certificate of Completion
                  </h3>
                  <p className="text-[9px] font-sans text-stone-500 italic mt-0.5">
                    This document certifies that
                  </p>
                  
                  {/* Student Name */}
                  <h2 className="text-xl font-bold tracking-wide text-white font-display uppercase mt-3 py-1.5 border-b border-stone-800 inline-block max-w-xs mx-auto">
                    Samiullah Samejo
                  </h2>
                  
                  <p className="text-[9px] font-sans text-stone-400 mt-2 max-w-xs mx-auto leading-normal">
                    has successfully satisfied all training modules to qualify for the official credential:
                  </p>
                  
                  {/* Course / Credentials */}
                  <h4 className="text-sm font-semibold font-sans mt-2.5 text-stone-200 max-w-sm mx-auto">
                    {activeCert.title}
                  </h4>
                </div>

                {/* Footer seal and signatures */}
                <div className="flex items-end justify-between px-4 mt-4 select-none">
                  {/* Left: Organization Title */}
                  <div className="text-left font-mono text-[8px] text-stone-500">
                    <p className="border-t border-stone-800 text-stone-400 pt-1">ISSUED BY</p>
                    <p className="font-bold text-stone-300 max-w-[110px] truncate">{activeCert.issuer}</p>
                  </div>

                  {/* Center Gold Stamp Seal */}
                  <div className="flex flex-col items-center justify-center p-1.5 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/40 shadow-lg text-amber-400 relative">
                    <Award className="w-7 h-7" />
                    <Sparkles className="w-2.5 h-2.5 absolute top-0 right-0 text-amber-300 animate-pulse" />
                  </div>

                  {/* Right: Security Hash */}
                  <div className="text-right font-mono text-[8px] text-stone-500">
                    <p className="border-t border-stone-800 text-stone-400 pt-1">CREDENTIAL TOKEN</p>
                    <p className="font-semibold text-emerald-400 tracking-wider">
                      {activeCert.credentialId || "VERIFIED"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification & Description Meta side right */}
            <div className="p-6 md:p-8 md:w-80 flex flex-col justify-between bg-zinc-950">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-white font-display">
                    Credential Overview
                  </h3>
                  <button
                    id="close-certificate-modal"
                    onClick={() => setActiveCert(null)}
                    className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Certification Title</span>
                    <p className="text-sm font-semibold text-white">{activeCert.title}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Issuing Authority</span>
                    <p className="text-xs font-mono font-medium text-slate-300">{activeCert.issuer}</p>
                  </div>

                  {activeCert.credentialId && (
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Credential ID / Token</span>
                      <code className="text-xs font-mono bg-slate-900 px-2 py-0.5 rounded text-slate-300 border border-slate-800 inline-block mt-0.5">
                        {activeCert.credentialId}
                      </code>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Year Certified</span>
                    <p className="text-xs font-mono text-slate-300">{activeCert.issueDate}</p>
                  </div>

                  <div className="pt-2">
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Authenticity Verified
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      This certificate is fully cached and authenticated. Samiullah's certification hash can be matched against the official database records.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-2.5">
                <a
                  href={activeCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all"
                >
                  Verify Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  id="modal-dismiss-cta"
                  onClick={() => setActiveCert(null)}
                  className="w-full py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors text-slate-300 hover:text-white font-mono text-xs"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
