import {
  ProjectItem,
  SkillGroup,
  CertificateItem,
  ExperienceItem,
  EducationItem,
  ArticleItem,
  MediaFeatureItem,
} from "../types";

export const PERSONAL_INFO = {
  name: "Samiullah Samejo",
  brand: "SamiUbaidi",
  title: "Samiullah Samejo - Full-Stack & Android Developer",
  valueStatement:
    "Building responsive full-stack web platforms, native Android applications in Kotlin, and AI-assisted workflows with clean architecture and verified reliability.",
  location: "Sukkur, Sindh, Pakistan",
  email: "devsamiubaidi@gmail.com",
  phone: "+92 342 0372799",
  whatsappUrl: "https://wa.me/923420372799",
  github: "https://github.com/ubaidicoding",
  linkedin: "https://linkedin.com/in/devsamiubaidi",
  avatarUrl: "/profile.jpg",
  // True proof stats only:
  proofStats: [
    { label: "Projects & Repositories", value: "40+" },
    { label: "App Downloads (StepFit Pro)", value: "1,000+" },
    { label: "Verified Certifications", value: "6" },
  ],
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "stepfit-pro",
    name: "StepFit Pro",
    outcome: "1,000+ Google Play downloads with native step detection and cloud sync",
    description:
      "Native Android health and fitness application featuring hardware step counting, workout tracking, offline caching, and real-time synchronization.",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Android SDK"],
    html_url: "https://github.com/ubaidicoding/stepfit-pro-android",
    homepage: "https://play.google.com/store/apps/details?id=com.samiubaidi.stepfitpro",
    category: "Android",
  },
  {
    id: "mb2kb",
    name: "MB2KB Web Utility",
    outcome: "Client-side image compression, image-to-PDF conversion, and background removal",
    description:
      "Fast in-browser file compression and document transformation tool running client-side with Web Workers for instantaneous processing with zero server load.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    html_url: "https://github.com/ubaidicoding/mb2kb-file-converter",
    homepage: "https://mb2kb.netlify.app/",
    category: "Full-Stack",
  },
  {
    id: "ai-data-dashboard",
    name: "AI Data Dashboard",
    outcome: "Interactive exploratory data analysis and ML insights with zero backend overhead",
    description:
      "Automated analytics dashboard for dataset uploading, summary metrics, dynamic charts, and regression modeling built with Streamlit and Pandas.",
    techStack: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    html_url: "https://github.com/ubaidicoding/ai-data-dashboard-streamlit",
    homepage: "https://share.streamlit.io/ubaidicoding/ai-data-dashboard",
    category: "Tools",
  },
  {
    id: "business-suite-erp",
    name: "Business Suite Offline ERP-Lite",
    outcome: "Standalone inventory, ledger, and sales point system for retail stores",
    description:
      "Lightweight desktop-ready enterprise point-of-sale utility built for local businesses with offline SQLite database support and automated PDF receipt printing.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "SQLite"],
    html_url: "https://github.com/ubaidicoding/offline-erp-lite",
    category: "Full-Stack",
  },
  {
    id: "sukkur-runners",
    name: "Sukkur Runners Community Platform",
    outcome: "Community landing platform and event registration for regional athletic wellness",
    description:
      "Official responsive web platform for Sukkur Runners community organizing group training sessions, running routes, and health awareness events.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    html_url: "https://github.com/ubaidicoding/sukkur-runners-web",
    homepage: "https://sukkurrunners.netlify.app",
    category: "Full-Stack",
  },
  {
    id: "cyber-risk-analyzer",
    name: "Ubaidi Cyber Risk Analyzer",
    outcome: "Security vulnerability calculator and threat modeling auditor based on OWASP standards",
    description:
      "Risk assessment dashboard evaluating application vectors, calculating exploitability metrics, and generating remediation roadmaps.",
    techStack: ["TypeScript", "React", "OWASP Matrix", "Tailwind CSS"],
    html_url: "https://github.com/ubaidicoding/cyber-risk-analyzer",
    category: "Tools",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    level: "Strong",
    description: "Daily production stacks with verified end-to-end deliverables",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
    ],
  },
  {
    level: "Working",
    description: "Solid working proficiency across backend services and database systems",
    skills: [
      "Python",
      "Node.js/Express",
      "Supabase",
      "PostgreSQL",
      "Java",
      "Spring Boot",
      "Git/GitHub",
    ],
  },
  {
    level: "Learning",
    description: "Actively expanding into cross-platform and security validation tools",
    skills: ["Flutter", "Gradio", "Security Auditing"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "IT Assistant (Temporary)",
    organization: "Government Polytechnic Institute (Boys)",
    location: "Sukkur, Sindh, Pakistan",
    duration: "Aug 2026 – Present",
    bullets: [
      "Assisting institute IT faculty and students with computer lab operations and software setup.",
      "Maintaining network connectivity, hardware diagnostics, and student workstation configurations.",
      "Supporting digital record keeping and technical operations across departmental systems.",
    ],
  },
  {
    id: "exp-2",
    role: "Freelance Full-Stack Developer",
    organization: "Self-Employed / Remote",
    location: "Sukkur, Sindh, Pakistan",
    duration: "2024 – Present",
    bullets: [
      "Engineered and deployed responsive web apps using React, Next.js, Firebase, and Supabase.",
      "Built native Android utilities with Kotlin and Jetpack Compose, publishing StepFit Pro to Google Play.",
      "Developed Python automation scripts and Streamlit analytics dashboards for local clients.",
    ],
  },
  {
    id: "exp-3",
    role: "Founder",
    organization: "Ubaidi IT Community",
    location: "Sukkur, Sindh, Pakistan",
    duration: "2022 – Present",
    bullets: [
      "Organizing free community bootcamps, code reviews, and programming roadmaps for local students in Sukkur.",
      "Mentoring beginners in foundational web development, version control (Git/GitHub), and problem-solving.",
      "Coordinating open-source project sprints and collaborative learning sessions across Sindh.",
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Intermediate (Pre-Engineering)",
  institution: "Government Comprehensive Higher Secondary School",
  duration: "2022 – 2024",
  location: "Sukkur, Sindh, Pakistan",
};

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: "cert-google-foundations",
    title: "Google Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    verificationUrl: "https://coursera.org/verify/RS0ETHEK6650",
    isSimulation: false,
  },
  {
    id: "cert-google-risk",
    title: "Google Security Risk Management",
    issuer: "Google / Coursera",
    verificationUrl: "https://coursera.org/verify/DL196U3N7TED",
    isSimulation: false,
  },
  {
    id: "cert-iba-python",
    title: "Sukkur IBA PITP Python Developer",
    issuer: "Sukkur IBA University (PITP)",
    verificationUrl: "https://verifypitp.netlify.app/certificate/110434",
    isSimulation: false,
  },
  {
    id: "cert-iba-java",
    title: "Sukkur IBA PITP Java Developer",
    issuer: "Sukkur IBA University (PITP)",
    verificationUrl: "https://verifypitp.netlify.app/certificate/311043",
    isSimulation: false,
  },
  {
    id: "cert-iba-mobile",
    title: "Sukkur IBA PITP Mobile App Developer",
    issuer: "Sukkur IBA University (PITP)",
    verificationUrl: "https://verifypitp.netlify.app/certificate/210838",
    isSimulation: false,
  },
  {
    id: "cert-digiskills-wp",
    title: "DigiSkills WordPress",
    issuer: "DigiSkills Pakistan",
    verificationUrl: "https://digiskills.pk/verify",
    isSimulation: false,
  },
];

export const JOB_SIMULATIONS: CertificateItem[] = [
  {
    id: "sim-skyscanner",
    title: "Skyscanner Front-End Software Engineering Job Simulation",
    issuer: "Forage",
    verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/KM4Ez7qz3rvMmT8qJ_Skyscanner_RS0ETHEK6650_completion_certificate.pdf",
    isSimulation: true,
  },
  {
    id: "sim-hpe",
    title: "HPE Software Engineering Simulation",
    issuer: "Forage",
    verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Hewlett%20Packard%20Enterprise/DA4T8aBfTr8L6x23M_HPE_RS0ETHEK6650_completion_certificate.pdf",
    isSimulation: true,
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "article-1",
    title: "Structuring Offline-First Android Apps with Kotlin & Jetpack Compose",
    date: "2024",
    summary:
      "A technical walkthrough of Room database caching, coroutines, and Firebase Firestore synchronization patterns used in StepFit Pro.",
    url: "https://github.com/ubaidicoding/stepfit-pro-android",
  },
  {
    id: "article-2",
    title: "Client-Side File Processing in the Browser with Web Workers",
    date: "2024",
    summary:
      "How MB2KB accomplishes high-throughput image compression and PDF rendering in client memory without consuming server resources.",
    url: "https://mb2kb.netlify.app/",
  },
  {
    id: "article-3",
    title: "Foundations of Web Application Security for Junior Engineers",
    date: "2024",
    summary:
      "Key takeaways from Google Cybersecurity training: defending against injection, securing API tokens, and implementing role-based authentication.",
    url: "https://github.com/ubaidicoding/cyber-risk-analyzer",
  },
];

export const MEDIA_FEATURES: MediaFeatureItem[] = [
  {
    id: "media-1",
    title: "Clap Pakistan Feature Story on Regional Tech Talent",
    outlet: "Clap Pakistan",
    date: "2024",
    description:
      "Editorial coverage highlighting Samiullah Samejo's journey building community software solutions and open-source bootcamps in Sukkur, Sindh.",
    url: "https://www.facebook.com/clappk/posts/pfbid0WkkZj5Xki6bQWMfxAEa5iWiVoE2KaLaSZ4A7VYLHnLAtcSSrUwGQpQ9KovqsUYfTl",
  },
];
