export interface ProjectItem {
  id: string;
  name: string;
  outcome: string;
  description: string;
  techStack: string[];
  html_url: string;
  homepage?: string;
  category: "Android" | "Full-Stack" | "Tools";
}

export interface SkillGroup {
  level: "Strong" | "Working" | "Learning";
  description: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  verificationUrl: string;
  isSimulation?: boolean;
}

export interface MicrosoftLearnBadgeGroup {
  id: string;
  title: string;
  date: string;
  badges: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
}

export interface MediaFeatureItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  description: string;
  url: string;
}
