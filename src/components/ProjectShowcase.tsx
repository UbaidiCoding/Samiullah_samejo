import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  FolderGit2,
  Code2,
} from "lucide-react";
import { FEATURED_PROJECTS } from "../data/portfolioData";
import { ProjectItem } from "../types";

// Additional open-source repositories by Samiullah Samejo available via dropdown menu
const OTHER_GITHUB_REPOSITORIES = [
  {
    name: "nextjs-ecommerce-platform",
    title: "Next.js Full-Stack E-Commerce",
    description: "Server-rendered store with Supabase PostgreSQL, Stripe checkout, and responsive design.",
    language: "TypeScript",
    url: "https://github.com/ubaidicoding/nextjs-ecommerce-platform",
  },
  {
    name: "pitp-python-automation",
    title: "Python PITP Automation Suite",
    description: "Automation scripts, file handling utilities, and data processing algorithms developed during Sukkur IBA PITP.",
    language: "Python",
    url: "https://github.com/ubaidicoding/pitp-python-automation",
  },
  {
    name: "spring-boot-starter-api",
    title: "Spring Boot Enterprise Starter",
    description: "RESTful API backend template with Spring Security, PostgreSQL connection pooling, and JWT auth.",
    language: "Java",
    url: "https://github.com/ubaidicoding/spring-boot-starter-api",
  },
  {
    name: "compose-ui-kit",
    title: "Jetpack Compose Android UI Kit",
    description: "Reusable Material 3 component library and custom canvas charts for native Android apps.",
    language: "Kotlin",
    url: "https://github.com/ubaidicoding/compose-ui-kit",
  },
  {
    name: "cybersecurity-lab-scripts",
    title: "Cybersecurity Auditing & Recon Scripts",
    description: "Bash and Python auditing utilities aligned with Google Cybersecurity Certificate labs.",
    language: "Python",
    url: "https://github.com/ubaidicoding/cybersecurity-lab-scripts",
  },
  {
    name: "ubaidi-community-resources",
    title: "Ubaidi IT Community Bootcamps & Syllabus",
    description: "Open-source teaching guides, beginner roadmaps, and coding challenge solutions for local students.",
    language: "Markdown / JS",
    url: "https://github.com/ubaidicoding/ubaidi-community-resources",
  },
];

// Helper to render crisp 16:9 thumbnail illustrations with explicit 480x270 dimensions and lazy loading
function ProjectThumbnail({ project }: { project: ProjectItem }) {
  const getGradientAndIcon = () => {
    switch (project.id) {
      case "stepfit-pro":
        return {
          bg: "from-sky-500/20 via-sky-600/10 to-transparent",
          badge: "Kotlin • Android SDK",
          tag: "Health & Fitness",
          symbol: (
            <svg className="w-12 h-12 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5v14" strokeDasharray="2 2" />
            </svg>
          ),
        };
      case "mb2kb":
        return {
          bg: "from-cyan-500/20 via-teal-600/10 to-transparent",
          badge: "React • Web Workers",
          tag: "Client-Side Utility",
          symbol: (
            <svg className="w-12 h-12 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="m9 15 3-3 3 3" />
              <path d="M12 12v6" />
            </svg>
          ),
        };
      case "ai-data-dashboard":
        return {
          bg: "from-indigo-500/20 via-purple-600/10 to-transparent",
          badge: "Python • Streamlit",
          tag: "Analytics & ML",
          symbol: (
            <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
              <circle cx="12" cy="4" r="2" />
            </svg>
          ),
        };
      case "business-suite-erp":
        return {
          bg: "from-emerald-500/20 via-emerald-600/10 to-transparent",
          badge: "React • SQLite POS",
          tag: "ERP / Inventory",
          symbol: (
            <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
              <path d="M6 15h2" />
              <path d="M10 15h4" />
            </svg>
          ),
        };
      case "sukkur-runners":
        return {
          bg: "from-amber-500/20 via-orange-600/10 to-transparent",
          badge: "Next.js • Tailwind",
          tag: "Community Portal",
          symbol: (
            <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="12" cy="12" r="10" />
              <path d="m4.93 4.93 4.24 4.24" />
              <path d="m14.83 9.17 4.24-4.24" />
              <path d="m14.83 14.83 4.24 4.24" />
              <path d="m9.17 14.83-4.24 4.24" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          ),
        };
      default:
        return {
          bg: "from-blue-500/20 via-sky-600/10 to-transparent",
          badge: "OWASP Matrix • Security",
          tag: "Threat Modeling",
          symbol: (
            <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          ),
        };
    }
  };

  const info = getGradientAndIcon();

  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] flex flex-col justify-between p-4 select-none">
      <div className={`absolute inset-0 bg-gradient-to-br ${info.bg} opacity-70 pointer-events-none`} />
      
      {/* Top Bar inside thumbnail */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--accent)] border border-[var(--border-color)]">
          {info.badge}
        </span>
        <span className="text-[10px] font-medium text-[var(--text-muted)] bg-[var(--bg-surface)] px-2 py-0.5 rounded border border-[var(--border-color)]">
          16:9 • {project.category}
        </span>
      </div>

      {/* Center illustration */}
      <div className="relative z-10 flex items-center justify-center my-auto py-2">
        <div className="p-3 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] shadow-sm">
          {info.symbol}
        </div>
      </div>

      {/* Bottom tag inside thumbnail */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-[var(--text-secondary)] font-medium">
        <span>{info.tag}</span>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">480 × 270</span>
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOtherRepo, setSelectedOtherRepo] = useState<typeof OTHER_GITHUB_REPOSITORIES[0] | null>(null);

  const categories = ["All", "Android", "Full-Stack", "Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 md:py-20 scroll-mt-20 border-b border-[var(--border-color)]">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h2>
            <p className="mt-1 text-base text-[var(--text-secondary)]">
              Production solutions with real users, live deployments, and open-source repositories.
            </p>
          </div>

          {/* Filter Tabs: Horizontally scrollable chip row on mobile (snap-x, hidden scrollbar), min 44px height */}
          <div className="w-full md:w-auto">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-none flex items-center gap-2 p-1 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] min-h-[44px]"
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`snap-start shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid: 1 col base, 2 cols md, 3 cols xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="clean-card flex flex-col justify-between p-5 sm:p-6"
            >
              <div className="space-y-4">
                {/* 16:9 Thumbnail with explicit dimensions & lazy loading */}
                <ProjectThumbnail project={project} />

                {/* Title & Outcome */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)] shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--accent)] line-clamp-1">
                    {project.outcome}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips (wrap) */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Code and Live (>=44px tall, side by side, Live hidden if no URL) */}
              <div className="pt-5 mt-5 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-btn-secondary text-xs flex-1 justify-center min-h-[44px]"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-btn-primary text-xs flex-1 justify-center min-h-[44px]"
                    aria-label={`View live deployment of ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Explore Other Repositories Dropdown */}
        <div className="clean-card p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Explore Other Repositories
                </h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Select from additional open-source repositories and learning projects on GitHub.
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="min-h-[44px] px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-subtle)] text-xs font-semibold text-[var(--text-primary)] flex items-center justify-between gap-2.5 transition-colors cursor-pointer w-full sm:w-auto"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <span>{selectedOtherRepo ? selectedOtherRepo.title : "Choose repository..."}</span>
                <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-80 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xl z-20 overflow-hidden divide-y divide-[var(--border-color)]">
                  {OTHER_GITHUB_REPOSITORIES.map((repo) => (
                    <button
                      key={repo.name}
                      type="button"
                      onClick={() => {
                        setSelectedOtherRepo(repo);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left p-3 hover:bg-[var(--bg-surface-subtle)] transition-colors cursor-pointer flex flex-col gap-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {repo.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent)] font-mono">
                          {repo.language}
                        </span>
                      </div>
                      <span className="text-[11px] text-[var(--text-secondary)] line-clamp-1">
                        {repo.description}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* If a repo is selected from dropdown, show its details card */}
          {selectedOtherRepo && (
            <div className="p-4 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {selectedOtherRepo.title}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    ({selectedOtherRepo.language})
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  {selectedOtherRepo.description}
                </p>
              </div>

              <a
                href={selectedOtherRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-btn-secondary text-xs shrink-0 self-start sm:self-center min-h-[44px]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open on GitHub</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
              </a>
            </div>
          )}
        </div>

        {/* View All on GitHub Link */}
        <div className="pt-2 text-center">
          <a
            href="https://github.com/ubaidicoding"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-btn-secondary inline-flex text-sm px-6 min-h-[44px]"
          >
            <Github className="w-4 h-4 text-[var(--accent)]" />
            <span>View all 40+ repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>

      </div>
    </section>
  );
}
