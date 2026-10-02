import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Wrench,
  ChevronDown,
  Layers,
  Code2,
  FolderGit2,
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

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOtherRepo, setSelectedOtherRepo] = useState<typeof OTHER_GITHUB_REPOSITORIES[0] | null>(null);

  const categories = ["All", "Android", "Full-Stack", "Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: ProjectItem["category"]) => {
    switch (cat) {
      case "Android":
        return <Smartphone className="w-5 h-5 text-[var(--accent)]" />;
      case "Full-Stack":
        return <Globe className="w-5 h-5 text-[var(--accent)]" />;
      case "Tools":
        return <Wrench className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Layers className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 scroll-mt-20">
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

          {/* Filter Dropdown / Tabs */}
          <div className="flex items-center gap-2">
            {/* Desktop / Tablet Horizontal Chips */}
            <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors min-h-[36px] cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Horizontal Scrollable with scroll-snap */}
            <div className="sm:hidden w-full overflow-x-auto flex gap-2 pb-1 scroll-smooth snap-x snap-mandatory">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`snap-start shrink-0 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors min-h-[44px] ${
                    selectedCategory === cat
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-color)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4-6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="clean-card flex flex-col justify-between p-5 sm:p-6"
            >
              <div className="space-y-4">
                {/* Styled Header Tile without placeholder image */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-light)] border border-[var(--border-color)]">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface-subtle)] px-2.5 py-1 rounded border border-[var(--border-color)]">
                    {project.category}
                  </span>
                </div>

                {/* Title & Outcome */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[var(--accent)]">
                    {project.outcome}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Stack Chips */}
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

              {/* Action Buttons: Live and Code */}
              <div className="pt-5 mt-5 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-btn-secondary text-xs flex-1 justify-center"
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
                    className="accent-btn-primary text-xs flex-1 justify-center"
                    aria-label={`View live demo of ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Dropdown Menu for Other GitHub Repositories */}
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
                <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
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
            <div className="p-4 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
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
                className="accent-btn-secondary text-xs shrink-0 self-start sm:self-center"
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
            className="accent-btn-secondary inline-flex text-sm px-6"
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
