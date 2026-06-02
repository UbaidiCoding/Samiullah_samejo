import React, { useState } from "react";
import { Mail, MessageSquare, Sparkles, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

type ServiceType = "Full-Stack Development" | "Cybersecurity Consultation" | "Digital Marketing" | "Mentorship & Consulting";

export default function ContactFunnel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    serviceType: "Full-Stack Development" as ServiceType,
  });

  const [submitted, setSubmitted] = useState(false);

  // Prefilled service descriptions to prompt clients with ideas
  const getServiceBrief = (type: ServiceType) => {
    switch (type) {
      case "Full-Stack Development":
        return "Custom SaaS apps, React/Node codebases, database setups, and API structures.";
      case "Cybersecurity Consultation":
        return "OWASP baseline checks, vulnerability scanning, security audits, and penetration testing.";
      case "Digital Marketing":
        return "Conversion-driven funnel development, landing page optimizations, and technical SEO structure.";
      case "Mentorship & Consulting":
        return "Direct remote 1-on-1 coding tutorials, certification guidance, and portfolio audits.";
    }
  };

  const cleanMessageValue = (val: string) => {
    return val.trim() || "No custom message provided. Looking forward to talking soon!";
  };

  const handleBookWithEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Build the mailto link structure
    const emailSubject = encodeURIComponent(`[Appointment Request] ${formData.serviceType} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Samiullah,\n\nI hope you are doing well.\n\nI am contacting you to book a consult appointment for "${formData.serviceType}".\n\nClient Details:\n- Name: ${formData.name}\n- Contact Email: ${formData.email}\n- Inquired Service: ${formData.serviceType}\n\nProject Scope & Message:\n${cleanMessageValue(formData.message)}\n\nPlease let me know your availability for a discovery call.\n\nWarm regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  const handleBookWithWhatsApp = () => {
    if (!formData.name || !formData.email) return;

    // Prefill direct text message
    const formattedText = `Hello Samiullah! My name is ${formData.name} (${formData.email}). I am writing to book an appointment for your ${formData.serviceType} services. 

Project Brief: ${cleanMessageValue(formData.message)}

Let's schedule a brief conversation on this!`;

    const whatsappUrl = `https://wa.me/923053424699?text=${encodeURIComponent(formattedText)}`; // Samiullah Pakistan routing number
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div id="lead-conversion-funnel" className="max-w-2xl mx-auto">
      <div className="glass-morph border border-slate-800/80 p-6 md:p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl bg-black/50">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-emerald-500/20 blur-md" />

        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          <h3 className="text-lg font-bold text-white tracking-tight font-display">
            Interactive Project Builder & Appointment Funnel
          </h3>
        </div>

        {submitted ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-12 h-12 bg-purple-950/40 border border-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <CheckCircle2 className="w-6 h-6 animate-pulse" />
            </div>
            <h4 className="text-base font-bold text-white font-display mb-2">
              Funnel Action Dispatched!
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
              Thank you {formData.name}, your structured inquiry has been loaded. Your system has launched direct email and WhatsApp message links. 
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                id="reset-form-success"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "", serviceType: "Full-Stack Development" });
                }}
                className="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-950/60 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Inquire Another Service
              </button>
              
              <button
                id="direct-whatsapp-redirect"
                onClick={handleBookWithWhatsApp}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Launch WhatsApp Line
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookWithEmail} className="space-y-5">
            {/* Service Selection Card Tabs */}
            <div>
              <label className="block text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest mb-2.5">
                1. Select Desired Service Category
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(["Full-Stack Development", "Cybersecurity Consultation", "Digital Marketing", "Mentorship & Consulting"] as const).map((service) => (
                  <div
                    key={service}
                    id={`service-select-${service.replace(/\W/g, "-").toLowerCase()}`}
                    onClick={() => setFormData({ ...formData, serviceType: service })}
                    className={`cursor-pointer p-4 rounded-xl border text-left transition-all duration-200 ${
                      formData.serviceType === service
                        ? "bg-purple-950/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.06)]"
                        : "bg-black/30 border-slate-800 hover:border-slate-700 hover:bg-black/50"
                    }`}
                  >
                    <p className={`text-xs font-bold transition-all ${
                      formData.serviceType === service ? "text-purple-300" : "text-white"
                    }`}>
                      {service}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
                      {getServiceBrief(service)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  id="client-name-input"
                  type="text"
                  required
                  placeholder="e.g. Richard Hendricks"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 font-mono transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Best Contact Email
                </label>
                <input
                  id="client-email-input"
                  type="email"
                  required
                  placeholder="e.g. richard@piedpiper.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-black/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 font-mono transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Brief Project Scope or Inquiry (Optional)
              </label>
              <textarea
                id="client-message-input"
                rows={3}
                placeholder="Briefly cover details like targets, specifications, timeframes or mentoring request..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-black/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 font-mono transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Actions Panel */}
            <div className="pt-3 border-t border-slate-900/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-slate-500 leading-snug max-w-xs flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-purple-500/60 shrink-0" />
                This secure form is safe to use. Redirects bypass third-party logging engines entirely.
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Email dispatch */}
                <button
                  id="book-via-email-cta"
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  E-Mail Proposal
                </button>

                {/* WhatsApp dispatch */}
                <button
                  id="book-via-whatsapp-cta"
                  type="button"
                  onClick={handleBookWithWhatsApp}
                  disabled={!formData.name || !formData.email}
                  className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:bg-emerald-950/20 hover:border-emerald-500/30 disabled:opacity-50 disabled:hover:bg-slate-950/80 disabled:hover:border-slate-800 text-emerald-400 hover:text-emerald-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Direct
                </button>
              </div>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
}
