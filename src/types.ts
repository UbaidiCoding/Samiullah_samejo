export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  verificationUrl: string;
  credentialId?: string;
  category: "Development" | "Cybersecurity" | "Design" | "Marketing";
}

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  language: string;
  topics?: string[];
  category: "Web" | "Cybersecurity" | "AI" | "SaaS";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Programming" | "Cybersecurity" | "AI Tools" | "Freelancing";
  publishDate: string;
  readTime: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}

