import React, { useState } from "react";
import { Star, Quote, MessageSquare, Sparkles, UserPlus, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";
import { Testimonial } from "../types";

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "community">("all");
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);

  // Dynamic feedback state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [segment, setSegment] = useState<"client" | "community">("client");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  // Filter list
  const filteredReviews = reviewsList.filter((rev) => {
    if (activeTab === "all") return true;
    if (activeTab === "client") return rev.id.startsWith("t-1") || rev.id.startsWith("t-3") || rev.id.includes("client");
    if (activeTab === "community") return rev.id.startsWith("t-2") || rev.id.startsWith("t-4") || rev.id.includes("community");
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !content.trim()) {
      setErrors("Mandatory fields: Name, Role, Review comment.");
      return;
    }

    setErrors(null);
    const newId = `t-${Date.now()}-${segment}`;
    
    const newReview: Testimonial = {
      id: newId,
      name,
      role,
      company: company.trim() || "Freelance Client / Student",
      content,
      rating,
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    
    // Reset form fields
    setName("");
    setRole("");
    setCompany("");
    setContent("");
    setRating(5);
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div id="testimonials-main-layout" className="space-y-12">
      
      {/* Category selector row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl">
          {(["all", "client", "community"] as const).map((tab) => (
            <button
               key={tab}
               id={`testimonial-tab-${tab}`}
               onClick={() => setActiveTab(tab)}
               className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all uppercase tracking-wider cursor-pointer ${
                 activeTab === tab
                   ? "bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                   : "text-white/60 hover:text-white"
               }`}
            >
              {tab === "all" ? "All Endorsements" : tab === "client" ? "Global Clients" : "Community Students"}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-white/40">
          Showing {filteredReviews.length} verified reviews
        </span>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            id={`testimonial-card-${rev.id}`}
            className="glass-morph p-6 rounded-3xl border border-white/10 hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-300 relative flex flex-col justify-between"
          >
            {/* Visual Quotes floating */}
            <span className="absolute top-6 right-6 text-cyan-400/10 pointer-events-none">
              <Quote className="w-12 h-12" />
            </span>

            <div>
              {/* Rating stars */}
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Review Statement */}
              <p className="text-white/80 text-xs leading-relaxed italic mb-6">
                "{rev.content}"
              </p>
            </div>

            {/* Author Credential Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                {rev.name.substring(0, 2).toUpperCase()}
              </div>

              <div>
                <h5 className="text-xs font-bold text-white tracking-tight">{rev.name}</h5>
                <p className="text-[10px] text-white/50 font-mono">
                  {rev.role} • <span className="text-cyan-400">{rev.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a review interactive segment (Increases conversion value of branding!) */}
      <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-400/5 rounded-full blur-[40px] pointer-events-none"></div>

        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-5 h-5 text-purple-400" />
          <h4 className="text-sm font-bold text-white font-display">Add Your Endorsement</h4>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-mono ml-auto">
            LIVE CLIENT DESK
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h5 className="text-sm font-bold text-white">Review Added Successfully!</h5>
            <p className="text-[11px] text-white/50 max-w-sm mx-auto leading-relaxed">
              Your endorsement has been added live to the catalog and is rendered directly based on your selected tier. Thank you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitReview} className="space-y-4">
            
            {errors && (
              <p className="p-3 text-[11px] font-mono rounded-xl bg-red-500/15 border border-red-500/20 text-red-400">
                ❌ {errors}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-white/50 block">Your Full Name *</label>
                <input
                  id="testimonial-form-name"
                  type="text"
                  placeholder="e.g. Bilal Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-white/50 block">Your Role / Designation *</label>
                <input
                  id="testimonial-form-role"
                  type="text"
                  placeholder="e.g. Senior Software Engineer / Trainee Developer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-white/50 block">Company / Community Brand</label>
                <input
                  id="testimonial-form-company"
                  type="text"
                  placeholder="e.g. Apex Corp / Sukkur IBA University"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-white/50 block">Endorsement Category</label>
                  <select
                    id="testimonial-form-category"
                    value={segment}
                    onChange={(e) => setSegment(e.target.value as "client" | "community")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors select-none"
                  >
                    <option value="client" className="bg-[#050505] text-white">Client Portfolio</option>
                    <option value="community" className="bg-[#050505] text-white">IT Community Student</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-white/50 block">Rating Score</label>
                  <select
                    id="testimonial-form-rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22d3ee] transition-colors select-none"
                  >
                    <option value="5" className="bg-[#050505] text-white">5 Stars (Perfect)</option>
                    <option value="4" className="bg-[#050505] text-white">4 Stars (Good)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono text-white/50 block">Your Feedback Comment *</label>
              <textarea
                id="testimonial-form-text"
                rows={3}
                placeholder="Share your experience working with SamiUbaidi..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <button
              id="testimonial-submit-btn"
              type="submit"
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider font-sans shadow-lg shadow-cyan-500/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Publish Endorsement Live
            </button>

          </form>
        )}

      </div>

    </div>
  );
}
