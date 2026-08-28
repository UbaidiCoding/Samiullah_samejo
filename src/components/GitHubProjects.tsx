import React, { useState, useEffect, useRef } from "react";
import {
  FolderGit2,
  Star,
  Link,
  ExternalLink,
  Search,
  Cpu,
  ShieldAlert,
  Layers,
  Smartphone,
  Globe,
  ShoppingBag,
  FileCode2,
  Sparkles,
  X,
  CheckCircle2,
  Code2,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  FolderOpen,
  Filter,
  Eye,
  Check,
} from "lucide-react";
import { Project } from "../types";

// Production Verified Projects matching Samiullah's Resume & GitHub
const FEATURED_PROJECTS: (Project & { highlight?: string; metric?: string; techStack?: string[] })[] = [
  {
    id: 101,
    name: "StepFit Pro - Fitness & Step Tracker App",
    description: "Published native Android fitness app featuring real-time hardware step detection, custom workout trackers, offline-first caching, and real-time cloud data sync via Firebase.",
    html_url: "https://github.com/UbaidiCoding/stepfit-pro-android",
    homepage: "https://play.google.com/store/apps/details?id=com.samiubaidi.stepfitpro",
    stargazers_count: 58,
    language: "Kotlin",
    topics: ["android", "kotlin", "jetpack-compose", "firebase", "health-fitness"],
    category: "Web", // mapped to mobile tab in UI
    highlight: "1,000+ Real Play Store Downloads",
    metric: "4.8 ★ User Rating",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Room SQLite", "Material 3"],
  },
  {
    id: 102,
    name: "Full-Stack E-Commerce Platform",
    description: "High-performance server-rendered e-commerce platform with secure JWT auth, real-time inventory management, PostgreSQL database, and Stripe payment checkout integration.",
    html_url: "https://github.com/UbaidiCoding/nextjs-ecommerce-platform",
    homepage: "https://ecommerce-samiubaidi.vercel.app",
    stargazers_count: 47,
    language: "TypeScript",
    topics: ["nextjs", "supabase", "postgresql", "stripe", "tailwindcss"],
    category: "Web",
    highlight: "95+ Google Lighthouse Score",
    metric: "Sub-second LCP",
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Stripe API", "Tailwind CSS"],
  },
  {
    id: 103,
    name: "MB2KB File Size Converter Utility",
    description: "Fast client-side file compression and image optimization web utility with batch processing. Powered by client-side Web Workers for zero server load and instant processing.",
    html_url: "https://github.com/UbaidiCoding/mb2kb-file-converter",
    homepage: "https://mb2kb-converter.vercel.app",
    stargazers_count: 39,
    language: "TypeScript",
    topics: ["react", "nextjs", "web-workers", "compression", "performance"],
    category: "SaaS",
    highlight: "98+ Lighthouse Performance",
    metric: "10,000+ Files Processed",
    techStack: ["React", "Next.js", "Web Workers", "Tailwind CSS", "Vercel"],
  },
  {
    id: 104,
    name: "Ubaidi Cyber Risk Analyzer",
    description: "Automated cybersecurity vulnerability calculator & threat-mitigation auditing dashboard built on OWASP risk models to evaluate client endpoints and network vectors.",
    html_url: "https://github.com/UbaidiCoding/ubaidi-cyber-risk-analyzer",
    homepage: "https://cyber-risk-ubaidi.netlify.app",
    stargazers_count: 34,
    language: "TypeScript",
    topics: ["cybersecurity", "owasp", "security-tools", "risk-assessment"],
    category: "Cybersecurity",
    highlight: "OWASP Model Compliant",
    metric: "Automated Auditing",
    techStack: ["TypeScript", "Node.js", "OWASP Vectors", "Tailwind CSS"],
  },
  {
    id: 105,
    name: "Gemini Grounded AI Assistant",
    description: "Server-side integration built on Google GenAI SDK to prototype real-time Search Grounding capabilities and functional tool calling in developer workflows.",
    html_url: "https://github.com/UbaidiCoding/gemini-search-grounded-agent",
    homepage: "https://ai-agent-sami.vercel.app",
    stargazers_count: 28,
    language: "TypeScript",
    topics: ["ai", "gemini-api", "agentic-ai", "google-genai"],
    category: "AI",
    highlight: "@google/genai SDK Verified",
    metric: "Search Grounded",
    techStack: ["TypeScript", "Google GenAI SDK", "Express.js", "Node.js"],
  },
  {
    id: 106,
    name: "Sukkur Tech Hub Portal",
    description: "Central web community portal for Ubaidi IT Community, featuring interactive developer roadmaps, student directories, open-source challenges, and bootcamp schedules.",
    html_url: "https://github.com/UbaidiCoding/sukkur-tech-hub-portal",
    homepage: "https://devsamiubaidi.netlify.app",
    stargazers_count: 52,
    language: "React",
    topics: ["web", "community", "react", "tailwindcss"],
    category: "Web",
    highlight: "5,000+ Community Members",
    metric: "Active Regional Hub",
    techStack: ["React", "Tailwind CSS", "Vite", "Open Source"],
  }
];

export type CategoryFilter = "All" | "Mobile" | "Web" | "Cybersecurity" | "AI" | "SaaS";

const CATEGORY_OPTIONS: { id: CategoryFilter; label: string; icon: any; countNote: string }[] = [
  { id: "All", label: "All Projects (15+ Shipped)", icon: Layers, countNote: "15+ Repos" },
  { id: "Mobile", label: "Mobile Apps (Android & Kotlin)", icon: Smartphone, countNote: "StepFit Pro (1k+)" },
  { id: "Web", label: "Full-Stack Web & E-Commerce", icon: Globe, countNote: "Next.js & Supabase" },
  { id: "Cybersecurity", label: "Cybersecurity & OWASP Tools", icon: ShieldAlert, countNote: "Risk Audits" },
  { id: "AI", label: "AI Grounded & Agent Systems", icon: Sparkles, countNote: "Google GenAI" },
  { id: "SaaS", label: "SaaS & High-Perf Utilities", icon: Cpu, countNote: "MB2KB Converter" },
];

interface GitHubProjectsProps {
  isSectionOpen?: boolean;
  onToggleSection?: () => void;
  initialFilter?: CategoryFilter;
}

export default function GitHubProjects({
  isSectionOpen = true,
  onToggleSection,
  initialFilter = "All",
}: GitHubProjectsProps) {
  const [projects, setProjects] = useState(FEATURED_PROJECTS);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<typeof FEATURED_PROJECTS[0] | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function fetchAdditionalRepos() {
      try {
        const response = await fetch("https://api.github.com/users/UbaidiCoding/repos?sort=updated&per_page=15");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            const apiMapped = data.map((repo: any) => {
              let category: "Web" | "Cybersecurity" | "AI" | "SaaS" = "Web";
              const topics = (repo.topics as string[]) || [];
              const desc = (repo.description || "").toLowerCase();
              if (topics.includes("cybersecurity") || desc.includes("security") || desc.includes("cyber")) {
                category = "Cybersecurity";
              } else if (topics.includes("ai") || desc.includes("ai") || desc.includes("gemini")) {
                category = "AI";
              } else if (topics.includes("saas") || desc.includes("saas") || desc.includes("tool")) {
                category = "SaaS";
              }

              return {
                id: repo.id,
                name: repo.name,
                description: repo.description || "Open source development package maintained under the UbaidiCoding GitHub profile.",
                html_url: repo.html_url,
                homepage: repo.homepage || undefined,
                stargazers_count: repo.stargazers_count || 0,
                language: repo.language || "TypeScript",
                topics: topics,
                category,
                highlight: "GitHub Repository",
                metric: `${repo.stargazers_count || 0} Stars`,
                techStack: [repo.language || "Code", "GitHub", "Open Source"],
              };
            });

            // Merge avoiding duplicates
            const combined = [...FEATURED_PROJECTS];
            apiMapped.forEach((item) => {
              if (!combined.some((p) => p.name.toLowerCase() === item.name.toLowerCase())) {
                combined.push(item);
              }
            });
            setProjects(combined);
          }
        }
      } catch (err) {
        // Fallback to featured projects safely
      }
    }

    fetchAdditionalRepos();
  }, []);

  const filteredProjects = projects.filter((project) => {
    // Check filter
    let matchesFilter = true;
    if (activeFilter === "Mobile") {
      matchesFilter = project.name.toLowerCase().includes("stepfit") || 
                      project.topics?.includes("android") || 
                      project.topics?.includes("kotlin") || false;
    } else if (activeFilter !== "All") {
      matchesFilter = project.category === activeFilter;
    }

    // Check search
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.techStack?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ?? false);

    return matchesFilter && matchesSearch;
  });

  const handleSelectDropdownCategory = (cat: CategoryFilter) => {
    setActiveFilter(cat);
    setDropdownOpen(false);
    if (!isSectionOpen && onToggleSection) {
      onToggleSection();
    }
  };

  const currentCategoryObj = CATEGORY_OPTIONS.find((c) => c.id === activeFilter) || CATEGORY_OPTIONS[0];
  const CurrentIcon = currentCategoryObj.icon;

  return (
    <div id="github-projects-showcase" className="space-y-6">
      {/* Top Action & Dropdown Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 glass-morph p-3.5 sm:p-4 rounded-2xl border border-white/10">
        
        {/* Left: Interactive Category Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center gap-2">
            <button
              id="projects-category-dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 hover:from-cyan-500/25 hover:to-purple-500/25 border border-cyan-500/30 hover:border-cyan-400 text-white font-mono text-xs transition-all cursor-pointer shadow-md group w-full sm:w-auto justify-between"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <div className="flex items-center gap-2">
                <CurrentIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold">{currentCategoryObj.label}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {onToggleSection && (
              <button
                onClick={onToggleSection}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                title={isSectionOpen ? "Collapse Projects View" : "Expand Projects View"}
              >
                {isSectionOpen ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Collapse</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                    <span>Open Featured Work</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Floating Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-[#090b14]/98 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-2xl p-2 z-50 animate-fade-in font-mono space-y-1">
              <div className="px-3 py-1.5 text-[10px] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/5 flex items-center justify-between">
                <span>Select Project Domain</span>
                <span className="text-cyan-400">15+ Total Apps</span>
              </div>

              {CATEGORY_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = activeFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectDropdownCategory(opt.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs transition-all cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500 text-black font-bold shadow-sm"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-cyan-400"}`} />
                      <span className="truncate">{opt.label}</span>
                    </div>
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-black shrink-0" />
                    ) : (
                      <span className="text-[10px] text-slate-400 opacity-80 shrink-0">
                        {opt.countNote}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-1.5 border-t border-white/5 px-2 text-[10px] text-slate-500 flex items-center justify-between">
                <span>Click category to filter catalog</span>
                <span className="text-emerald-400">● Live Code</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: Quick Filter Pills & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Quick Pill Tabs for Desktop */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-black/40 border border-white/5 rounded-xl">
            {(["All", "Mobile", "Web", "Cybersecurity", "AI", "SaaS"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === tab
                    ? "bg-cyan-500 text-black font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab === "Mobile" ? "📱 Mobile" : tab}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 15+ projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0d14] border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Collapsed State Teaser Banner */}
      {!isSectionOpen && (
        <div
          onClick={onToggleSection}
          className="glass-morph p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group text-center space-y-3 relative overflow-hidden bg-gradient-to-r from-cyan-950/20 via-[#0a0b14] to-purple-950/20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Featured Work Dropdown Menu Ready
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
            Explore 15+ Production Apps, StepFit Pro & Security Tools
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Click here to open the full interactive project catalog with live demos, GitHub repositories, and performance metrics.
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleSection) onToggleSection();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-all shadow-lg shadow-cyan-500/20 cursor-pointer mt-1"
          >
            <FolderOpen className="w-4 h-4" />
            Click to Open Featured Work (15+ Apps)
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Expanded Projects Grid & Catalog */}
      {isSectionOpen && (
        <div className="space-y-6 animate-fade-in">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 glass-morph rounded-2xl border border-white/10 p-6 space-y-3">
              <p className="text-slate-400 text-xs font-mono">
                No projects matched "{searchQuery}" under "{activeFilter}" category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("All");
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-cyan-400 transition-colors cursor-pointer"
              >
                Reset Search & Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => {
                const isMobile = project.topics?.includes("android") || project.name.includes("StepFit");
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group glass-morph hover:border-cyan-500/30 p-5 rounded-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                  >
                    {/* Subtle top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-3.5">
                      {/* Header Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono">
                            {isMobile ? <Smartphone className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                          </span>
                          <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                            {project.language}
                          </span>
                        </div>

                        {project.highlight && (
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                            {project.highlight}
                          </span>
                        )}
                      </div>

                      {/* Project Title & Description */}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                          {project.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono bg-white/[0.04] text-slate-300 px-2 py-0.5 rounded border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        {project.metric || `${project.stargazers_count} Stars`}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          Details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Quick View Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-2xl bg-[#0c0d14] border border-white/15 rounded-2xl p-6 sm:p-7 space-y-5 shadow-2xl text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                  {selectedProject.category} Solution
                </span>
                <h3 className="text-xl font-bold text-white font-display mt-2">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Verified Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">Performance</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {selectedProject.highlight || "95+ Score"}
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">Primary Stack</span>
                <span className="text-sm font-bold text-cyan-400 font-mono">
                  {selectedProject.language}
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-slate-400 block">Status</span>
                <span className="text-sm font-bold text-yellow-400 font-mono">
                  Production Ready
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            {selectedProject.techStack && (
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-white/10">
              <a
                href={selectedProject.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors cursor-pointer"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                View GitHub Code
              </a>
              {selectedProject.homepage && (
                <a
                  href={selectedProject.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-mono text-black font-bold transition-all shadow-md cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Launch Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
