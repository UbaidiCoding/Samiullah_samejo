import React, { useState } from "react";
import { Mail, MessageSquare, Sparkles, Send, CheckCircle2, ShieldCheck, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

type ServiceType = "Full-Stack Web App" | "Android Mobile App (Kotlin)" | "Cybersecurity & Security Audit" | "Technical Mentorship / Consulting";

export default function ContactFunnel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$500 - $2,000",
    timeline: "2-4 weeks",
    message: "",
    serviceType: "Full-Stack Web App" as ServiceType,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const cleanMessageValue = (val: string) => {
    return val.trim() || "Let's discuss project scope, milestones, and deliverable targets.";
  };

  const handleBookWithEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const emailSubject = encodeURIComponent(`[Project Inquiry] ${formData.serviceType} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Samiullah,\n\nI would like to discuss an opportunity / project for: ${formData.serviceType}.\n\nClient / Recruiter Details:\n- Name: ${formData.name}\n- Contact Email: ${formData.email}\n- Estimated Budget: ${formData.budget}\n- Estimated Timeline: ${formData.timeline}\n\nProject Scope & Goals:\n${cleanMessageValue(formData.message)}\n\nPlease let me know your availability for a brief discovery call.\n\nWarm regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  const handleBookWithWhatsApp = () => {
    if (!formData.name || !formData.email) return;

    const formattedText = `Hello Samiullah! My name is ${formData.name} (${formData.email}). I am reaching out regarding your ${formData.serviceType} services. 

Budget: ${formData.budget}
Timeline: ${formData.timeline}
Project Brief: ${cleanMessageValue(formData.message)}

Looking forward to connecting!`;

    // WhatsApp routing using Samiullah's official phone +92 342 0372799
    const whatsappUrl = `https://wa.me/923420372799?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div id="lead-conversion-funnel" className="max-w-4xl mx-auto space-y-8">
      {/* Direct Contact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-morph p-4 rounded-2xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">Direct Email</span>
            <span className="text-xs font-mono text-white font-semibold truncate block">
              {PERSONAL_INFO.email}
            </span>
          </div>
          <button
            onClick={copyEmail}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Copy email"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="glass-morph p-4 rounded-2xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone & WhatsApp</span>
            <a
              href="https://wa.me/923420372799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white font-semibold hover:text-emerald-400 transition-colors block"
            >
              +92 342 0372799
            </a>
          </div>
        </div>

        <div className="glass-morph p-4 rounded-2xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">HQ Location</span>
            <span className="text-xs font-mono text-white font-semibold block">
              Sukkur, Sindh, Pakistan 🇵🇰
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Form */}
      <div className="glass-morph border border-white/12 p-6 sm:p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl bg-[#090b14]/80 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight font-display">
                Project Estimator & Priority Consultation
              </h3>
              <p className="text-xs text-slate-400">
                Choose service scope and dispatch your direct inquiry with 1-click
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hidden sm:inline-block">
            ⚡ Typical Response &lt; 4 Hours
          </span>
        </div>

        {submitted ? (
          <div className="text-center py-10 animate-fade-in space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-display">
                Inquiry Successfully Prepared!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
                Thank you {formData.name}, your structured inquiry has opened via your selected client. Samiullah will respond within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 border border-white/15 hover:border-white/25 bg-white/5 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookWithEmail} className="space-y-5">
            {/* Service Type Selection */}
            <div>
              <label className="block text-xs font-mono text-slate-300 font-semibold mb-2">
                1. Select Desired Service / Role
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(["Full-Stack Web App", "Android Mobile App (Kotlin)", "Cybersecurity & Security Audit", "Technical Mentorship / Consulting"] as ServiceType[]).map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: service })}
                    className={`p-3 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                      formData.serviceType === service
                        ? "bg-cyan-500/15 border-cyan-500 text-white font-bold shadow-sm"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{service}</span>
                      {formData.serviceType === service && (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Client Details Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                  2. Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                  3. Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
                />
              </div>
            </div>

            {/* Scope / Budget / Timeline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                  4. Estimated Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50 font-mono transition-colors cursor-pointer"
                >
                  <option value="$300 - $1,000">$300 - $1,000 (Small / Component / Audit)</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000 (Complete Full-Stack Web / App)</option>
                  <option value="$3,000 - $8,000+">$3,000 - $8,000+ (Enterprise / SaaS Scale)</option>
                  <option value="Full-Time Employment">Full-Time / Contract Employment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                  5. Target Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50 font-mono transition-colors cursor-pointer"
                >
                  <option value="Immediate / Urgent (1-2 weeks)">Immediate / Urgent (1-2 weeks)</option>
                  <option value="Standard (2-4 weeks)">Standard (2-4 weeks)</option>
                  <option value="Flexible (1-2 months)">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                6. Project Goals & Context
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your objectives, existing codebase, or timeline requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0c0d14] border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Zero Spam • Direct Personal Routing
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleBookWithWhatsApp}
                  disabled={!formData.name || !formData.email}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs font-mono flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </button>

                <button
                  type="submit"
                  disabled={!formData.name || !formData.email}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-black font-bold text-xs font-mono flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Structured Email
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
