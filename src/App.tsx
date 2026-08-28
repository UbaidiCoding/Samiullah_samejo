import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  Terminal,
  ShieldCheck,
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
  Flame,
  Cpu,
  Bookmark,
  Share2,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Layers,
  Smartphone,
  Copy,
  Check,
  FileText,
  UserCheck,
  HeartHandshake,
  Building2,
  Compass,
  ChevronDown,
  ChevronUp,
  FolderOpen,
} from "lucide-react";

// Lightweight High-Performance Components
import LightweightAmbientBackground from "./components/LightweightAmbientBackground";
import HeroCodeHud from "./components/HeroCodeHud";
import Navigation from "./components/Navigation";
import ResumeModal from "./components/ResumeModal";
import SkillsMatrix from "./components/SkillsMatrix";
import GitHubProjects from "./components/GitHubProjects";
import CertificatesSection from "./components/CertificatesSection";
import EducationTimeline from "./components/EducationTimeline";
import SocialFootprint from "./components/SocialFootprint";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import ContactFunnel from "./components/ContactFunnel";

// Data
import { PERSONAL_INFO, EXPERIENCES } from "./data/portfolioData";

// Comprehensive Section-Based SEO Metadata Mapping for Google, Bing & AI Engines
const SECTION_SEO_MAP: Record<string, { title: string; description: string; keywords: string }> = {
  hero: {
    title: "Samiullah Samejo (SamiUbaidi) | Full Stack & Mobile Developer Pakistan | Cybersecurity Analyst Sukkur",
    description: "Official portfolio of Samiullah Samejo (SamiUbaidi) - Full-Stack & Mobile Developer in Pakistan & Cybersecurity Analyst in Sukkur, Sindh. Shipped 15+ apps including StepFit Pro. Founder of Ubaidi IT Community.",
    keywords: "Full Stack Developer Pakistan, Mobile Developer Sukkur, Cybersecurity Analyst Sukkur, Samiullah Samejo, SamiUbaidi, Kotlin Developer Pakistan, React Next.js Developer Sindh, StepFit Pro, Ubaidi IT Community",
  },
  about: {
    title: "About Samiullah Samejo | Full Stack & Mobile Developer Pakistan | Founder Ubaidi IT",
    description: "Learn about Samiullah Samejo (SamiUbaidi), self-taught software engineer, CEO of Ubaidi IT Community, and founder of Sukkur Runners from Sukkur, Sindh, Pakistan.",
    keywords: "Samiullah Samejo Bio, Full Stack Developer Pakistan, Mobile App Developer Sukkur, SamiUbaidi Story, Ubaidi IT Community CEO, Sukkur Runners Founder",
  },
  skills: {
    title: "Technical Skills & Architecture | Samiullah Samejo - React, Kotlin, Node.js & Security",
    description: "Explore 100+ master skills of Samiullah Samejo across JavaScript, TypeScript, Kotlin, Python, React, Next.js, Android Studio, Firebase, Supabase, and OWASP security.",
    keywords: "Samiullah Samejo Skills, Full Stack Developer Pakistan Tech Stack, Kotlin Mobile Developer, Next.js Supabase PostgreSQL, Cybersecurity Analyst Sukkur",
  },
  projects: {
    title: "Production Projects & Mobile Apps | StepFit Pro, E-Commerce & SaaS | Samiullah Samejo",
    description: "Browse featured production applications built by Samiullah Samejo: StepFit Pro Android App (1k+ downloads), Next.js E-Commerce, MB2KB Converter (98+ Lighthouse), and Cyber Risk Analyzer.",
    keywords: "StepFit Pro Android, Samiullah Samejo Projects, Full Stack Developer Pakistan Portfolio, MB2KB Converter, Ubaidi Cyber Risk Analyzer, Next.js PostgreSQL",
  },
  certifications: {
    title: "Verified Certifications & Simulations | Skyscanner, HPE, Sukkur IBA, Google | SamiUbaidi",
    description: "View verified industry credentials earned by Samiullah Samejo: Skyscanner Front-End Simulation, HPE Software Engineering, Sukkur IBA Mobile/Python/Java, and Google Cybersecurity.",
    keywords: "Samiullah Samejo Certificates, Skyscanner Software Engineering, HPE RESTful Simulation, Sukkur IBA PITP, Google Cybersecurity Coursera, Verified Developer Pakistan",
  },
  experience: {
    title: "Professional Experience & Leadership | Freelance Developer & CEO Ubaidi IT Community",
    description: "Work history of Samiullah Samejo as Freelance Full-Stack & Mobile Developer, CEO of Ubaidi IT Community (5,000+ members), and technical content creator at CodeWithSamiUbaidi.",
    keywords: "Samiullah Samejo Experience, Freelance Developer Pakistan, Ubaidi IT Community CEO, Sukkur Tech Leader, Cybersecurity Auditing Sindh",
  },
  education: {
    title: "Education & Academic Background | Intermediate Pre-Engineering Sukkur | Samiullah Samejo",
    description: "Academic qualifications of Samiullah Samejo: Intermediate (HSC) in Pre-Engineering at Govt. Comprehensive Higher Secondary School Sukkur and Matriculation (Science).",
    keywords: "Samiullah Samejo Education, Govt Comprehensive Higher Secondary School Sukkur, Pre-Engineering Sindh, Computer Science Training Pakistan",
  },
  blog: {
    title: "Articles & Tech Insights | From Code to Community & Security Guides | SamiUbaidi",
    description: "Read in-depth tech articles by Samiullah Samejo covering full-stack architecture, OWASP security, AI search grounding, community leadership, and career growth.",
    keywords: "Samiullah Samejo Blog, From Code to Community, React Security Guide, Ubaidi IT Blueprint, Full Stack Developer Pakistan Insights, Sukkur Tech",
  },
  contact: {
    title: "Hire Samiullah Samejo | Full-Stack, Mobile & Security Consultation | Sukkur Pakistan",
    description: "Hire Samiullah Samejo (SamiUbaidi) for full-stack web development, Kotlin Android applications, and cybersecurity auditing. Contact via Email or WhatsApp.",
    keywords: "Hire Full Stack Developer Pakistan, Hire Mobile Developer Sukkur, Contact Samiullah Samejo, devsamiubaidi@gmail.com, WhatsApp Developer Pakistan",
  },
};

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);

  // Dynamic Head Metadata & SEO Manager based on Active Section
  useEffect(() => {
    const seoData = SECTION_SEO_MAP[activeSection] || SECTION_SEO_MAP.hero;

    // Update document title
    document.title = seoData.title;

    // Helper to dynamically update meta element attributes
    const updateMetaTag = (selector: string, content: string, attr = "content") => {
      let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (el) {
        el.setAttribute(attr, content);
      } else {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) el.setAttribute("name", name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (prop) el.setAttribute("property", prop);
        }
        el.setAttribute(attr, content);
        document.head.appendChild(el);
      }
    };

    updateMetaTag('meta[name="description"]', seoData.description);
    updateMetaTag('meta[name="keywords"]', seoData.keywords);
    updateMetaTag('meta[property="og:title"]', seoData.title);
    updateMetaTag('meta[property="og:description"]', seoData.description);
    updateMetaTag('meta[name="twitter:title"]', seoData.title);
    updateMetaTag('meta[name="twitter:description"]', seoData.description);

    // Update Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const sectionHash = activeSection === "hero" ? "" : `#${activeSection}`;
      canonicalLink.setAttribute("href", `https://devsamiubaidi.netlify.app/${sectionHash}`);
    }
  }, [activeSection]);

  // Optimized Intersection Observer for Section Tracking
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "certifications", "experience", "education", "testimonials", "blog", "contact"];
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
        { threshold: 0.2, rootMargin: "-70px 0px -40px 0px" }
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* 1. Ultra-Lightweight GPU composited ambient background */}
      <LightweightAmbientBackground />

      {/* 2. Top Sticky Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={(id) => {
          setActiveSection(id);
          if (id === "projects") {
            setIsProjectsOpen(true);
          }
        }}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* 3. Main Content Wrapper */}
      <main className="relative z-10 pt-20">
        
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Developer Persona & Identity */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Full-Stack, Mobile & Security Opportunities</span>
              </div>

              {/* Title & Name */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display">
                  Samiullah <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">Samejo</span>
                </h1>
                <p className="text-base sm:text-xl font-mono text-cyan-300 font-medium">
                  Full-Stack & Mobile Developer • Cybersecurity Analyst
                </p>
                <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Sukkur, Sindh, Pakistan 🇵🇰</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">Also known as <strong>SamiUbaidi</strong> (devsamiubaidi)</span>
                </p>
              </div>

              {/* Short Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Versatile software engineer with 2+ years of hands-on experience building production web and Android applications. Shipped <strong>15+ projects</strong> across React, Next.js, Kotlin, and Python. Published <strong>StepFit Pro</strong> on Google Play with 1,000+ real users. Consistent <strong>90+ Lighthouse</strong> performance scores. Founder & CEO of <strong>Ubaidi IT Community</strong>.
              </p>

              {/* Verified Metrics Counter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono block">15+</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Shipped Apps</span>
                </div>
                <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono block">1,000+</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">App Downloads</span>
                </div>
                <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono block">90+</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Lighthouse Avg</span>
                </div>
                <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono block">5,000+</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Community</span>
                </div>
              </div>

              {/* CTAs Row */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  View ATS Resume
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Explore Projects
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2 text-slate-400">
                <span className="text-xs font-mono text-slate-500">Connect:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-rose-400 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923420372799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="WhatsApp Contact"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Res Portrait + Developer Terminal HUD */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Profile Portrait Card */}
              <div className="glass-morph p-4 rounded-3xl border border-white/12 relative overflow-hidden shadow-2xl group">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-square max-h-[300px] sm:max-h-[340px] w-full flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Samiullah Samejo (SamiUbaidi) - Full-Stack Developer & Cybersecurity Analyst"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-white font-bold">Samiullah Samejo</span>
                    </div>
                    <span className="text-cyan-300 text-[11px]">Sukkur, Pakistan 🇵🇰</span>
                  </div>
                </div>
              </div>

              {/* Interactive Telemetry Terminal */}
              <HeroCodeHud />
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* GLOBAL VISION & DREAM COMPANIES BANNER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="glass-morph p-6 sm:p-8 rounded-3xl border border-white/12 relative overflow-hidden bg-gradient-to-r from-purple-950/20 via-[#0a0b14] to-cyan-950/20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Global Tech Ambition & Career Vision</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  From Software Engineer to Tech Founder & CEO
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Driven by relentless curiosity and community impact, aiming to join world-class startup ecosystems and tech giants.
                </p>
              </div>

              {/* Companies & Hubs Chips */}
              <div className="space-y-3 w-full lg:w-auto">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5">
                    Target Organizations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Google", "Microsoft", "Oracle", "Meta", "TikTok", "AI Startups"].map((co) => (
                      <span
                        key={co}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white font-medium hover:border-cyan-500/40 transition-colors"
                      >
                        {co}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5">
                    Target Global Workspaces:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/30 text-cyan-300 border border-cyan-800/30">Saudi Arabia 🇸🇦</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-950/30 text-purple-300 border border-purple-800/30">Dubai / UAE 🇦🇪</span>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/30 text-blue-300 border border-blue-800/30">Germany 🇩🇪</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/30 text-emerald-300 border border-emerald-800/30">Finland 🇫🇮</span>
                    <span className="px-2.5 py-1 rounded-lg bg-rose-950/30 text-rose-300 border border-rose-800/30">Paris 🇫🇷</span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-950/30 text-amber-300 border border-amber-800/30">USA 🇺🇸 & UK 🇬🇧</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ABOUT & COMMUNITY LEADERSHIP SECTION */}
        {/* ========================================================================= */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full font-bold">
                About & Bio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Engineering with Community Purpose
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Combining self-taught technical grit, regional open-source empowerment, and athletic wellness.
              </p>
            </div>

            {/* 3-Column Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Technical Craft */}
              <div className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Self-Taught & Multi-Disciplinary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mastered over 100 digital skills independently across full-stack web, Kotlin Android development, database architectures, and technical SEO. Consistent 90+ Lighthouse score benchmarks on production apps.
                </p>
              </div>

              {/* Card 2: Ubaidi IT Community */}
              <div className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Founder & CEO — Ubaidi IT Community
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Founded Sukkur's most active open tech network with 5,000+ members. Organizing free developer bootcamps, code reviews, and freelancing roadmaps for regional youth in Sindh, Pakistan.
                </p>
              </div>

              {/* Card 3: Wellness & Sukkur Runners */}
              <div className="glass-morph p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Founder — Sukkur Runners & Wellness
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Advocating for physical and mental counter-balance for software engineers. Active participant in local athletic training and youth empowerment camps like the <em>Lok Sahaita Camp</em> at Sukkur Sports Complex.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SKILLS MATRIX SECTION */}
        {/* ========================================================================= */}
        <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
                Skills & Matrix
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Comprehensive Technical Competencies
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Categorized breakdown of programming languages, frameworks, cloud databases, mobile stacks, and security protocols.
              </p>
            </div>

            <SkillsMatrix />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRODUCTION PROJECTS SECTION (COLLAPSIBLE / DROPDOWN CONTROLLED) */}
        {/* ========================================================================= */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {/* Interactive Section Header with Dropdown / Accordion Controller */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2">
                <button
                  onClick={() => setIsProjectsOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400 px-3.5 py-1 rounded-full font-bold transition-all cursor-pointer shadow-sm group"
                  title="Click to toggle Featured Work catalog"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Featured Work</span>
                  <span className="text-[10px] text-cyan-300/70 lowercase border-l border-cyan-500/30 pl-2">
                    {isProjectsOpen ? "▼ click to collapse" : "▲ click to open"}
                  </span>
                </button>
              </div>

              <h2
                onClick={() => setIsProjectsOpen((prev) => !prev)}
                className="text-2xl sm:text-4xl font-extrabold text-white font-display cursor-pointer hover:text-cyan-400 transition-colors inline-block"
              >
                Production Projects & Android Apps
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Shipped 15+ solutions with real downloads, sub-second latency, and verified source code repositories.
              </p>

              {/* Quick Toggle / Open Status Bar */}
              <div className="pt-1 flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsProjectsOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs transition-all cursor-pointer group"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{isProjectsOpen ? "Collapse Projects View" : "Click to Open Featured Work (15+ Shipped)"}</span>
                  {isProjectsOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                  )}
                </button>
              </div>
            </div>

            {/* Interactive GitHubProjects Component with Dropdown Filter Menu */}
            <GitHubProjects
              isSectionOpen={isProjectsOpen}
              onToggleSection={() => setIsProjectsOpen((prev) => !prev)}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VERIFIED CERTIFICATIONS SECTION */}
        {/* ========================================================================= */}
        <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
                Verified Credentials
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Certifications & Engineering Simulations
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Accredited certificates from Skyscanner, HPE, Sukkur IBA University, Google, Coursera, DigiSkills, and HackerRank.
              </p>
            </div>

            <CertificatesSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXPERIENCE & LEADERSHIP TIMELINE */}
        {/* ========================================================================= */}
        <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 bg-yellow-950/40 border border-yellow-500/20 px-3 py-1 rounded-full font-bold">
                Career Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Work Experience & Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building client solutions, orchestrating regional tech initiatives, and mentoring aspiring developers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="glass-morph p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EDUCATION SECTION */}
        {/* ========================================================================= */}
        <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full font-bold">
                Academic Foundation
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Education & Academic Record
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Formal secondary and higher secondary qualifications in Science and Pre-Engineering.
              </p>
            </div>

            <EducationTimeline />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SOCIAL PRESS & MEDIA FOOTPRINT */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                Regional Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Media Features & Press Coverage
              </h2>
            </div>

            <SocialFootprint />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TESTIMONIALS SECTION */}
        {/* ========================================================================= */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
                Client & Peer Feedback
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Endorsements & Recommendations
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Verifying technical diligence, proactive communication, and real-world results.
              </p>
            </div>

            <TestimonialsSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BLOG & ARTICLES SECTION */}
        {/* ========================================================================= */}
        <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full font-bold">
                Technical Articles
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Engineering Articles & Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Practical handbooks on React security, SaaS lead funnels, AI search grounding, and community building.
              </p>
            </div>

            <BlogSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONTACT & PROJECT ESTIMATOR SECTION */}
        {/* ========================================================================= */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Let's Build Something Exceptional
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Available for full-time engineering roles, freelance contracts, or technical security audits.
              </p>
            </div>

            <ContactFunnel />
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#05060a] py-12 relative z-10 text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-black font-bold font-mono">
              S
            </div>
            <div>
              <p className="text-white font-bold font-display text-sm">
                Samiullah Samejo (SamiUbaidi)
              </p>
              <p className="text-slate-500 text-[11px]">
                Founder & CEO of Ubaidi IT Community • Sukkur, Sindh 🇵🇰
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection("certifications")} className="hover:text-white transition-colors cursor-pointer">Certificates</button>
            <button onClick={() => setResumeModalOpen(true)} className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">ATS Resume</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>

          <p className="text-slate-500 text-[11px] text-center md:text-right">
            © {new Date().getFullYear()} Samiullah Samejo. Built with React & Vite. All SEO & schema rights preserved.
          </p>
        </div>
      </footer>

      {/* 4. Interactive ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
