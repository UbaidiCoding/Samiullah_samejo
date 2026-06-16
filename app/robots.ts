export interface RobotsRules {
  rules: {
    userAgent?: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
  } | Array<{
    userAgent: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
  }>;
  sitemap?: string | string[];
}

export default function robots(): RobotsRules {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://devsamiubaidi.netlify.app/sitemap.xml",
  };
}
