export interface SitemapItem {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export default function sitemap(): SitemapItem[] {
  const baseUrl = "https://devsamiubaidi.netlify.app";
  
  // Blog slugs inside the app
  const blogSlugs = [
    "securing-modern-react-api-integrations",
    "boosting-saas-conversions-with-interactive-funnels",
    "understanding-ai-grounding-and-prompting",
    "the-story-behind-samiubaidi-personal-branding-and-ai-philosophy",
    "empowering-pakistan-next-gen-builders-ubaidi",
    "from-code-to-community-the-inspiring-journey-of-samiullah-samejo"
  ];

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date("2026-06-16"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#blog`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }
  ];

  return [...mainRoutes, ...blogUrls];
}
