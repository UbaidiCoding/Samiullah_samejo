import React, { useState } from "react";
import { X, Download, Printer, Copy, Check, FileText, Sparkles, ExternalLink, GraduationCap, Briefcase, Award, Code2, Phone, Mail, MapPin, Globe } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_TIMELINE, CERTIFICATIONS } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "ats" | "markdown">("preview");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const atsText = `SAMIULLAH SAMEJO
Full-Stack & Mobile Developer | Cybersecurity Analyst
Sukkur, Sindh, Pakistan | Phone: +92 342 0372799 | Email: devsamiubaidi@gmail.com
LinkedIn: https://linkedin.com/in/devsamiubaidi | GitHub: https://github.com/UbaidiCoding
Portfolio: https://devsamiubaidi.netlify.app

PROFESSIONAL SUMMARY
Full-Stack and Mobile Developer with 2+ years of hands-on experience building production web and Android applications. Shipped 15+ projects using React, Next.js, Kotlin, and Python. Published StepFit Pro fitness Android app with 1,000+ real downloads. Consistent 90+ Lighthouse performance scores. Strong foundation in cybersecurity (Google/Coursera Certified) and technical mentorship as Founder & CEO of Ubaidi IT Community.

CORE SKILLS & TECHNOLOGIES
• Programming Languages: JavaScript (ES6+), TypeScript, Python, Kotlin, Java, HTML5, CSS3, SQL
• Frontend Frameworks: React, Next.js, Tailwind CSS, Vite, Redux Toolkit, Responsive UI
• Mobile Development: Kotlin, Jetpack Compose, Android Studio, Flutter, Firebase SDK, Mobile SQLite
• Backend & Databases: Node.js, Express.js, Firebase Firestore, Supabase, PostgreSQL, MongoDB, RESTful APIs, JWT Auth
• Cybersecurity & Tools: OWASP Top 10, Threat Modeling, API Proxies, Git, GitHub, VS Code, Vercel, Netlify, Linux

KEY PRODUCTION PROJECTS
1. StepFit Pro (Mobile Fitness App) - Kotlin, Jetpack Compose, Firebase, Google Play
   - Built a native Android health & fitness app featuring real-time step counter detection, custom workout trackers, and analytics.
   - Published on Google Play Store with 1,000+ real active downloads and 4.8-star user rating.
   - Implemented offline-first caching and real-time cloud data sync via Firebase.

2. Full-Stack E-Commerce Platform - Next.js, Supabase, PostgreSQL, Tailwind, Stripe
   - Built high-performance server-rendered e-commerce store with secure user authentication, catalog search, and cart engine.
   - Integrated Stripe checkout API with webhooks for automated order confirmation.
   - Achieved 95+ Google Lighthouse score across Performance, SEO, and Accessibility.

3. MB2KB File Size Converter - Next.js, React, Tailwind CSS, Vercel
   - Developed a fast client-side image and document compression web utility.
   - Optimized file processing in the browser using Web Workers to deliver zero server latency.
   - Achieved 98+ Google Lighthouse performance rating with 10k+ processed files.

4. Ubaidi Cyber Risk Analyzer - TypeScript, OWASP, Threat Modeling
   - Built vulnerability risk assessment dashboard calculating threat scores across common web vectors.

WORK EXPERIENCE
Freelance Full-Stack & Mobile Developer | Apr 2023 - Present
• Designed and shipped 15+ high-performance web applications and mobile tools for global and regional clients.
• Conducted technical SEO and security audits, improving client search rankings and mitigating critical XSS/CORS flaws.
• Maintained 100% on-time milestone delivery across React, Next.js, and Android projects.

Founder & CEO | Ubaidi IT Community & Ubaidi IT Solutions | Apr 2022 - Present
• Founded an open-source technical education hub in Sukkur with 5,000+ members and students.
• Organized coding workshops, security training sessions, and open-source project sprints.
• Mentored 100+ aspiring software engineers on modern web development and freelancing strategies.

Founder | Sukkur Runners | 2023 - Present
• Founded community running and athletic wellness group in Sukkur promoting physical and mental health balance for engineers.

EDUCATION
Intermediate (HSC) in Pre-Engineering | 2022 - 2024
Government Comprehensive Higher Secondary School, Sukkur, Sindh, Pakistan

Matriculation (Science) | 2020 - 2022
Public School / High Secondary Board, Sukkur, Sindh, Pakistan

VERIFIED CERTIFICATIONS & SIMULATIONS
• Skyscanner Front-End Software Engineering Job Simulation - Forage (Aug 2026) | Backpack React Web App
• HPE (Hewlett Packard Enterprise) Software Engineering Simulation - Forage (Aug 2026) | RESTful Web Services & Unit Tests
• Mobile App Developer Training - Sukkur IBA University (PITP) (2023)
• Python Developer Training - Sukkur IBA University (PITP) (2023)
• Java Developer Training - Sukkur IBA University (PITP) (2023)
• Foundations of Cybersecurity - Google / Coursera (2024)
• Security Risks Management - Coursera (2024)

LANGUAGES: English (Professional), Urdu (Native), Sindhi (Full Professional)`;

  const markdownText = `# SAMIULLAH SAMEJO
**Full-Stack & Mobile Developer • Cybersecurity Analyst • Founder Ubaidi IT Community**  
📍 Sukkur, Sindh, Pakistan | 📞 +92 342 0372799 | ✉️ devsamiubaidi@gmail.com  
🌐 [Portfolio](https://devsamiubaidi.netlify.app) | 🐙 [GitHub](https://github.com/UbaidiCoding) | 💼 [LinkedIn](https://linkedin.com/in/devsamiubaidi)

---

## 🚀 Summary
Full-Stack and Mobile Developer with 2+ years of hands-on experience building production web and Android applications. Shipped 15+ projects using React, Next.js, Kotlin, and Python. Published StepFit Pro fitness Android app with 1,000+ real downloads. Consistent 90+ Lighthouse performance scores.

## 🛠️ Technical Skills
- **Languages:** JavaScript (ES6+), TypeScript, Python, Kotlin, Java, HTML5, CSS3, SQL
- **Frontend / Web:** React, Next.js, Tailwind CSS, Vite, Redux Toolkit
- **Mobile Development:** Kotlin, Jetpack Compose, Android Studio, Flutter, Firebase SDK
- **Backend & DB:** Node.js, Express.js, Firebase, Supabase, PostgreSQL, MongoDB, REST APIs, JWT Auth
- **Security & Tools:** OWASP Top 10, Penetration Testing, Git, GitHub, VS Code, Vercel, Netlify

## 🌟 Featured Projects
- **StepFit Pro** (Kotlin • Jetpack Compose • Firebase • Google Play): 1,000+ real downloads, step detection, real-time sync.
- **E-Commerce Platform** (Next.js • Supabase • PostgreSQL • Stripe • Vercel): 95+ Lighthouse score, secure auth.
- **MB2KB File Converter** (Next.js • React • Tailwind • Vercel): 98+ Lighthouse score, client-side compression.
- **Ubaidi Cyber Risk Analyzer** (TypeScript • OWASP • Threat Modeling): Automated vulnerability scoring.

## 💼 Experience
- **Freelance Full-Stack & Mobile Developer** (Apr 2023 – Present)
- **Founder & CEO**, Ubaidi IT Community (Apr 2022 – Present)
- **Technical Creator**, CodeWithSamiUbaidi (2021 – Present)
- **Founder**, Sukkur Runners (2023 – Present)

## 🎓 Education
- **Intermediate (HSC) in Pre-Engineering** (2022–2024), Government Comprehensive Higher Secondary School, Sukkur

## 📜 Certifications
- **Skyscanner** Front-End Software Engineering (Forage, Aug 2026)
- **HPE** Software Engineering Simulation (Forage, Aug 2026)
- **Sukkur IBA University** Mobile App, Python & Java Developer Training
- **Google & Coursera** Foundations of Cybersecurity`;

  const downloadTextFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const textToCopy = activeTab === "markdown" ? markdownText : atsText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0d14] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-black font-bold font-mono shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                Samiullah Samejo — Official Resume
                <span className="text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  ATS Verified
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                1-Page Verified Software Engineer & Mobile Developer Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Toolbar & Tabs */}
        <div className="px-4 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "preview"
                  ? "bg-cyan-500 text-black font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Visual View
            </button>
            <button
              onClick={() => setActiveTab("ats")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "ats"
                  ? "bg-cyan-500 text-black font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ATS Plain Text
            </button>
            <button
              onClick={() => setActiveTab("markdown")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "markdown"
                  ? "bg-cyan-500 text-black font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Markdown
            </button>
          </div>

          {/* Action Download Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Text"}
            </button>
            
            <button
              onClick={() => downloadTextFile(atsText, "Samiullah_Samejo_ATS_Resume.txt", "text/plain")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download .TXT
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === "preview" && (
            <div className="bg-[#090a10] border border-white/10 p-6 sm:p-8 rounded-xl space-y-6 shadow-inner text-slate-200 font-sans leading-relaxed">
              {/* Top Contact Bar */}
              <div className="border-b border-white/10 pb-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    SAMIULLAH SAMEJO
                  </h1>
                  <p className="text-sm font-mono text-cyan-400 font-semibold mt-0.5">
                    Full-Stack & Mobile Developer • Cybersecurity Analyst
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Sukkur, Sindh, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span>+92 342 0372799</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300">devsamiubaidi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end text-cyan-400">
                    <Globe className="w-3.5 h-3.5" />
                    <span>devsamiubaidi.netlify.app</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1 mb-2">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Full-Stack and Mobile Developer with 2+ years of hands-on experience building production web and Android applications. Shipped 15+ projects using React, Next.js, Kotlin, and Python. Published <strong>StepFit Pro</strong> fitness Android app with 1,000+ real downloads. Consistent 90+ Lighthouse performance scores. Strong foundation in cybersecurity (Google/Coursera Certified) and technical mentorship as Founder & CEO of Ubaidi IT Community.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 border-b border-purple-500/20 pb-1 mb-2.5">
                  Technical Skills & Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Languages:</span>
                    <span className="text-slate-200 font-medium">JavaScript (ES6+), TypeScript, Python, Kotlin, Java, HTML5, CSS3, SQL</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Frontend / Web:</span>
                    <span className="text-slate-200 font-medium">React, Next.js, Tailwind CSS, Vite, Redux Toolkit, SPA/SSR</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Mobile Development:</span>
                    <span className="text-slate-200 font-medium">Kotlin, Jetpack Compose, Android Studio, Flutter, Firebase SDK</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Backend & Databases:</span>
                    <span className="text-slate-200 font-medium">Node.js, Express.js, Firebase Firestore, Supabase, PostgreSQL, MongoDB, JWT</span>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-3">
                  Featured Production Projects
                </h3>
                <div className="space-y-3.5">
                  <div className="border-l-2 border-cyan-500 pl-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        StepFit Pro — Mobile Fitness & Step Tracker App
                      </h4>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                        1,000+ Downloads (Google Play)
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Kotlin • Jetpack Compose • Firebase • Room SQLite • Material 3
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Native Android fitness app featuring real-time step detection, personalized workout routines, and progress analytics.</li>
                      <li>Implemented offline-first caching and real-time cloud data sync via Firebase.</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        Full-Stack E-Commerce Platform
                      </h4>
                      <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">
                        95+ Lighthouse Score
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Next.js • Supabase • PostgreSQL • Tailwind CSS • Stripe
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Server-rendered commerce platform with secure auth, inventory management, and Stripe checkout.</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        MB2KB File Size Converter
                      </h4>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        98+ Lighthouse Rating
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Next.js • React • Tailwind CSS • Web Workers • Vercel
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Client-side image and document compression utility with batch processing and instant download.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400 border-b border-yellow-500/20 pb-1 mb-3">
                  Professional Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex flex-wrap items-center justify-between text-xs">
                      <span className="font-bold text-white text-sm">Freelance Full-Stack & Mobile Developer</span>
                      <span className="font-mono text-slate-400">Apr 2023 - Present</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Designed and shipped 15+ high-performance web applications and mobile tools. Conducted technical SEO and security audits.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between text-xs">
                      <span className="font-bold text-white text-sm">Founder & CEO — Ubaidi IT Community</span>
                      <span className="font-mono text-slate-400">Apr 2022 - Present</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Founded tech community with 5,000+ members in Sukkur. Organized bootcamps, security workshops, and open-source project sprints.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1 mb-2">
                    Education
                  </h3>
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-white">Intermediate (HSC) in Pre-Engineering</p>
                    <p className="text-slate-400">Govt. Comprehensive Higher Secondary School, Sukkur</p>
                    <p className="font-mono text-[11px] text-cyan-400">2022 - 2024</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 border-b border-purple-500/20 pb-1 mb-2">
                    Top Verified Certifications
                  </h3>
                  <ul className="text-xs text-slate-300 space-y-1 font-mono">
                    <li>• Skyscanner Front-End Simulation (Forage)</li>
                    <li>• HPE Software Engineering Simulation (Forage)</li>
                    <li>• Sukkur IBA University (Mobile, Python, Java)</li>
                    <li>• Google & Coursera Cybersecurity Foundations</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ats" && (
            <div className="relative">
              <pre className="bg-[#05060a] border border-white/10 p-5 rounded-xl text-xs font-mono text-emerald-400/90 whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
                {atsText}
              </pre>
            </div>
          )}

          {activeTab === "markdown" && (
            <div className="relative">
              <pre className="bg-[#05060a] border border-white/10 p-5 rounded-xl text-xs font-mono text-cyan-300 whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
                {markdownText}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-black/50 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            Updated August 2026 • Verified Portfolio Asset
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
