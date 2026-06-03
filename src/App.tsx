import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  Terminal,
  ShieldAlert,
  Globe,
  Sparkles,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  Code2,
  Award,
  BookOpen,
  MapPin,
  FlameKindling,
  Cpu,
  Bookmark,
  Share2,
  ArrowUpRight,
} from "lucide-react";

// Components
import ParticleBackground from "./components/ParticleBackground";
import Hero3DScene from "./components/Hero3DScene";
import TypingText from "./components/TypingText";
import EducationTimeline from "./components/EducationTimeline";
import CertificatesSection from "./components/CertificatesSection";
import GitHubProjects from "./components/GitHubProjects";
import BlogSection from "./components/BlogSection";
import ContactFunnel from "./components/ContactFunnel";
import Navigation from "./components/Navigation";
import GitHubHeatmap from "./components/GitHubHeatmap";
import TestimonialsSection from "./components/TestimonialsSection";
import SocialFootprint from "./components/SocialFootprint";

// Data
import { PERSONAL_INFO, EXPERIENCES } from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = ["hero", "about", "education", "certifications", "projects", "experience", "testimonials", "blog", "contact"];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40px 0px" }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  // Automatic Text-Based ATS Resume Generator
  const handleDownloadResume = () => {
    const textContent = `========================================================================
SAMIULLAH SAMEJO (SamiUbaidi / DevSamiUbaidi)
========================================================================
Full-Stack Developer, Cybersecurity Analyst, and Digital Marketer
Location: Sukkur, Sindh, Pakistan 🇵🇰
Email: devsamiubaidi@gmail.com
GitHub: https://github.com/UbaidiCoding
LinkedIn: https://linkedin.com/in/devsamiubaidi
YouTube: https://youtube.com/@CodeWithSamiUbaidi
Founder: Ubaidi IT Community | Ubaidi IT Solutions

------------------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------------------
Highly accomplished computative developer, security assessor, and digital
branding technician. Proven developer with comprehensive proficiency in
structuring robust web designs, orchestrating modular component matrices,
configuring technical search optimizations, and implementing application defensive 
controls in client and server bounds.

------------------------------------------------------------------------
CORE TECH STACK & COMPETENCY
------------------------------------------------------------------------
* Languages: JavaScript (ES6+), TypeScript, Python, Java
* Web Systems: React, Next.js, Node.js, Express, WordPress
* Security: OWASP Core Audit Protocols, Risk Appraisals, JWT Security
* Marketing: Digital Funnel Creation, Technical SEO, Metadata Architectures

------------------------------------------------------------------------
FOUNDER & CORPORATE OUTCOMES
------------------------------------------------------------------------
* Founder & Lead Architect | Ubaidi IT Solutions (2023 - Present)
  - Deployed dozen glassmorphic systems and server-backed web apps.
  - Implemented secure API wrappers and customized lead funnels to bypass
    third-party logging engines securely.

* Founder & Director | Ubaidi IT Community (2022 - Present)
  - Established Sukkur regional hub of tech learners and enthusiasts.
  - Formulated bootcamps, security directives, and code reviews.

* Educator & Creator | CodeWithSamiUbaidi (2021 - Present)
  - Authored over 100 deep tutorial lectures detailing Java backend paradigms,
    Python coding, Canva styling, and security basics.

------------------------------------------------------------------------
ACADEMIC PATHWAY
------------------------------------------------------------------------
* Government Degree College, Sukkur
  Intermediate in Pre-Engineering (2020 - 2022) | Board Grade A
* Public School Board, Sukkur
  Matriculation in Computer Science (2018 - 2020) | A-One Grade

------------------------------------------------------------------------
CREDENTIAL CERTIFICATIONS (VERIFIED)
------------------------------------------------------------------------
- Coursera Canva Social Media Design [70SGFEAM1XT7]
- Coursera Jira Automation [889PB9HXWPSW]
- Coursera Security Risks Management [DL196U3N7TED]
- Coursera Foundations of Cybersecurity [RS0ETHEK6650]
- Coursera WordPress Website Building [ASUFO7BGIJA5]
- Coursera Canva Design Advanced [70SGFEAM1XTZ]
- PITP (Sukkur IBA University) Java Developer [311043]
- PITP (Sukkur IBA University) Python Developer [110434]
- PITP (Sukkur IBA University) Mobile App Developer [210838]
- DigiSkills Freelancing Profession [GKWHAPZMK]
- DigiSkills WordPress Profession [M6JSM6FMK]
- HackerRank CSS Basics [ACD477EOEE34]

========================================================================
Generated securely from SamiUbaidi Official Hub Portfolio
========================================================================`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Samiullah_Samejo_Resume_ATS.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-purple-500/30 selection:text-purple-300 pb-20 lg:pb-0 overflow-hidden">
      {/* Background Decorative Elements (Elegant Dark Theme Aura Blobs) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute inset-x-0 top-0 h-full opacity-15 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#222 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      {/* Dynamic particles in the sky */}
      <ParticleBackground />

      {/* Navigation Layer */}
      <Navigation
        activeSection={activeSection}
        onNavigate={(id) => setActiveSection(id)}
      />

      {/* Core Wrapper */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="py-8 lg:py-16 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left intro text info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono mb-2 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Available for Projects & Consulting
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                  Samiullah <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
                    Samejo
                  </span>
                </h1>
                
                <h2 className="text-lg sm:text-xl font-mono text-white/60 flex items-center gap-2">
                  <span>I am a</span>
                  <TypingText />
                </h2>
              </div>

              <p className="text-sm text-white/70 leading-relaxed max-w-xl">
                Highly accomplished computer systems practitioner, security analyst, and digital marketing expert centered in{" "}
                <span className="text-cyan-400 font-semibold font-mono">Sukkur, Sindh, Pakistan 🇵🇰</span>.
                Fusing professional engineering standards with secure code patterns, optimized customer acquisition funnels, and enterprise application defense.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all flex items-center gap-1.5 text-xs uppercase tracking-wider font-sans cursor-pointer"
                >
                  Explore Projects
                  <ChevronRight className="w-4 h-4" />
                </a>

                {/* Instant downloadable ATS Text summary of credentials */}
                <button
                  id="download-ats-resume-cta"
                  onClick={handleDownloadResume}
                  className="px-6 py-3.5 bg-white/5 border border-white/10 backdrop-blur-lg text-white font-bold rounded-xl hover:bg-white/10 transition-all text-xs uppercase tracking-wider font-sans flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  Get ATS Resume
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 bg-white/5 border border-white/10 backdrop-blur-lg text-white font-bold rounded-xl hover:bg-white/10 transition-all text-xs uppercase tracking-wider font-sans cursor-pointer"
                >
                  Book Appointment
                </a>
              </div>

              {/* Social badges toolbar */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4 text-slate-400 text-xs font-mono">
                <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block sm:inline">Connect on:</span>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400 hover:text-cyan-400 transition-colors" />
                  GitHub
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 hover:text-purple-400 transition-colors" />
                  LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors animate-pulse"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Right Interactive 3D Cube Canvas wrapper */}
            <div className="lg:col-span-5 h-[360px] lg:h-[450px]">
              <Hero3DScene />
            </div>

          </div>
        </section>


        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                Who stands behind Ubaidi Coding?
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                About Samiullah Samejo
              </h3>
              <p className="text-xs font-mono text-slate-500">
                Sukkur, Pakistan • Full Stack • Technical Safeguards
              </p>
            </div>

            {/* Summary card slots */}
            <div className="glass-morph p-6 md:p-8 rounded-3xl border border-slate-800/85 space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              {/* Founder badges slots */}
              <div className="pt-6 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-purple-950/15 border border-purple-500/20 text-center">
                  <h5 className="text-purple-400 font-bold font-mono text-xs">Ubaidi IT Community</h5>
                  <p className="text-[10px] text-slate-400 mt-1">Founder & Mentor</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/15 border border-cyan-500/20 text-center">
                  <h5 className="text-cyan-400 font-bold font-mono text-xs">Ubaidi IT Solutions</h5>
                  <p className="text-[10px] text-slate-400 mt-1">Lead SaaS Developer</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20 text-center">
                  <h5 className="text-emerald-400 font-bold font-mono text-xs">CodeWithSamiUbaidi</h5>
                  <p className="text-[10px] text-slate-400 mt-1">Tech Content Creator</p>
                </div>
              </div>
            </div>

            {/* Grid of Skill Badges */}
            <div className="space-y-4">
              <h4 className="text-center text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                Technical Expertise Grid
              </h4>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { name: "JavaScript", icon: "🛡️" },
                  { name: "Python", icon: "🔑" },
                  { name: "Java", icon: "☕" },
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Next.js", icon: "⚡" },
                  { name: "Cybersecurity", icon: "🛡️" },
                  { name: "SEO Audit", icon: "📈" },
                  { name: "APIs Integration", icon: "🧱" },
                  { name: "Tailwind CSS", icon: "🎨" },
                  { name: "Framer Motion", icon: "🌌" },
                  { name: "Technical Writing", icon: "📝" },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-850/80 text-xs text-slate-300 font-mono"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ================= EDUCATION SECTION ================= */}
        <section id="education" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Academic Framework
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Education History
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Primary and pre-engineering benchmarks satisfied under Sukkur Board directories.
              </p>
            </div>

            {/* Vertical timeline */}
            <EducationTimeline />

          </div>
        </section>


        {/* ================= CERTIFICATIONS SECTION ================= */}
        <section id="certifications" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                Validation & Audits
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Professional Certifications
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Hover to glow • Click cards to open the live vector proof modal.
              </p>
            </div>

            {/* Live Filterable block */}
            <CertificatesSection />

          </div>
        </section>


        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Dynamic Repository Puller
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Featured Open Source Projects
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Queried directly from Github developers REST API for <span className="text-cyan-400 font-semibold font-mono">UbaidiCoding</span>.
              </p>
            </div>

            {/* Grid display with falling system */}
            <GitHubProjects />

            {/* Comprehensive interactive contribution track record */}
            <div className="mt-12">
              <GitHubHeatmap />
            </div>

          </div>
        </section>


        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                Active Milestones
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Professional Experience
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Consulting history, business roles, and mentorship directives.
              </p>
            </div>

            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  id={`experience-block-${exp.id}`}
                  className="glass-morph p-6 rounded-2xl border border-slate-800/80 hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-purple-400 font-mono mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono tracking-wide max-w-fit">
                      📅 {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-5 pl-1.5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-xs text-slate-300/90 leading-relaxed flex items-start gap-2">
                        <span className="text-purple-500 select-none mt-1 shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="pt-3 border-t border-slate-900/60 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 text-slate-400 border border-slate-800/50">
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= TESTIMONIALS SECTION ================= */}
        <section id="testimonials" className="py-16 scroll-mt-24 border-t border-white/5 bg-[#050505]/20">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                Student Achievements & Client Feedback
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Trusted Endorsements
              </h3>
              <p className="text-xs text-white/50 max-w-sm mx-auto">
                Real feedback from corporate SaaS contracts and successful regional trainees under Sami's active mentorship.
              </p>
            </div>

            <TestimonialsSection />

            {/* Social Footprint Live Embed Plugins Block */}
            <div className="mt-16 pt-16 border-t border-white/5">
              <SocialFootprint />
            </div>

          </div>
        </section>


        {/* ================= BLOG SECTION ================= */}
        <section id="blog" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                Tech Guide Articles
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                MDX Blog Space
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Advanced guidelines regarding web security systems, SEO, and AI paradigms.
              </p>
            </div>

            {/* Blog engine rendered */}
            <BlogSection />

          </div>
        </section>


        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="py-16 scroll-mt-24 border-t border-slate-950">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Conversion Funnel
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Let's Build Something Secure Together
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Initiate a free consultation. Select your target service category below to customize email templates and WhatsApp redirections securely.
              </p>
            </div>

            {/* Funnel form */}
            <ContactFunnel />

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative mt-24 border-t border-white/5 bg-[#050505]/40 backdrop-blur-md pt-14 pb-28 lg:pb-14 text-white/60 text-xs font-mono select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-lg font-bold tracking-tighter uppercase font-sans text-white block">
              Sami<span className="text-cyan-400">Ubaidi</span>
            </span>
            <p className="text-white/55 leading-relaxed max-w-sm text-[11px]">
              Full-Stack Developer, Cybersecurity Analyst, and Digital Marketer based in Sukkur, Pakistan. Constructing high-conversion SaaS architectures with military-grade threat mitigations.
            </p>
            <p className="text-[10px] text-purple-400 font-semibold font-sans">
              Founder: Ubaidi IT Community • Solutions
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-white font-bold text-xs uppercase block tracking-wider font-sans">Digital Hubs</span>
            <ul className="space-y-2 text-[11px] text-white/45">
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub Profile (@UbaidiCoding)
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  LinkedIn Network
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                  YouTube (@CodeWithSami)
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Facebook (@sami.samejo.75)
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  Instagram (@sami_ubaidi)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-white font-bold text-xs uppercase block tracking-wider font-sans">Verified Credentials</span>
            <ul className="space-y-2 text-[11px] text-white/45">
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                devsamiubaidi@gmail.com
              </li>
              <li>
                <span className="text-white/30 block">Sukkur Office:</span>
                Sukkur, Sindh, Pakistan 🇵🇰
              </li>
            </ul>
          </div>

        </div>

        {/* Brand visual dashboard info footer row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-sans font-bold">Based In</span>
              <span className="text-xs font-semibold text-white/80">Sukkur, Pakistan 🇵🇰</span>
            </div>
            <div className="hidden sm:block w-[1px] h-6 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-sans font-bold">Github Activity</span>
              <div className="flex gap-1 mt-1">
                <div className="w-2.5 h-2.5 rounded bg-cyan-950"></div>
                <div className="w-2.5 h-2.5 rounded bg-cyan-800"></div>
                <div className="w-2.5 h-2.5 rounded bg-cyan-600"></div>
                <div className="w-2.5 h-2.5 rounded bg-cyan-400"></div>
                <div className="w-2.5 h-2.5 rounded bg-white/5"></div>
                <div className="w-2.5 h-2.5 rounded bg-cyan-400"></div>
                <div className="w-2.5 h-2.5 rounded bg-purple-500"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-[10px] text-white/40">
            <p>© {new Date().getFullYear()} SamiUbaidi (Samiullah Samejo). All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/40 font-mono">
                Secure TLS Pipeline
              </span>
              <span className="text-cyan-400 font-bold">
                Pakistan Active Tech 🇵🇰
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
