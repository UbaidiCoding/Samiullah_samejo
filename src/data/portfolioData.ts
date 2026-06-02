import { Certificate, BlogPost, ExperienceItem, EducationItem, Testimonial } from "../types";

export const PERSONAL_INFO = {
  name: "Samiullah Samejo",
  nickName: "SamiUbaidi",
  githubUsername: "UbaidiCoding",
  location: "Sukkur, Sindh, Pakistan 🇵🇰",
  email: "devsamiubaidi@gmail.com",
  github: "https://github.com/UbaidiCoding",
  linkedin: "https://linkedin.com/in/devsamiubaidi",
  youtube: "https://youtube.com/@CodeWithSamiUbaidi", // YouTube handle
  bio: "Highly accomplished Full-Stack Developer, Cybersecurity Analyst, and Digital Marketer. Founder of Ubaidi IT Community, Ubaidi IT Solutions, and CodeWithSamiUbaidi. Dedicated to building secure, scalable, and conversion-optimized digital products for global businesses.",
  summary: "A versatile computer systems practitioner and security analyst with deep experience in designing performant full-stack systems, deploying secure network architectures, and implementing technical SEO structures. Passionate about empowering the next generation of Pakistan's tech talent through active mentorship and accessible community learning.",
};

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "cert-1",
    title: "Canva Social Media Design",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/70SGFEAM1XT7",
    credentialId: "70SGFEAM1XT7",
    category: "Design",
  },
  {
    id: "cert-2",
    title: "Jira Automation",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/889PB9HXWPSW",
    credentialId: "889PB9HXWPSW",
    category: "Development",
  },
  {
    id: "cert-3",
    title: "Security Risks Management",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/DL196U3N7TED",
    credentialId: "DL196U3N7TED",
    category: "Cybersecurity",
  },
  {
    id: "cert-4",
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/RS0ETHEK6650",
    credentialId: "RS0ETHEK6650",
    category: "Cybersecurity",
  },
  {
    id: "cert-5",
    title: "WordPress Website Building",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/ASUFO7BGIJA5",
    credentialId: "ASUFO7BGIJA5",
    category: "Development",
  },
  {
    id: "cert-6",
    title: "Canva Design Advanced",
    issuer: "Coursera",
    issueDate: "2024",
    verificationUrl: "https://coursera.org/verify/70SGFEAM1XTZ",
    credentialId: "70SGFEAM1XTZ",
    category: "Design",
  },
  {
    id: "cert-7",
    title: "Java Developer Training",
    issuer: "PITP (Sukkur IBA University)",
    issueDate: "2023",
    verificationUrl: "https://verifypitp.netlify.app/certificate/311043",
    credentialId: "311043",
    category: "Development",
  },
  {
    id: "cert-8",
    title: "Python Developer Training",
    issuer: "PITP (Sukkur IBA University)",
    issueDate: "2023",
    verificationUrl: "https://verifypitp.netlify.app/certificate/110434",
    credentialId: "110434",
    category: "Development",
  },
  {
    id: "cert-9",
    title: "Mobile App Developer Training",
    issuer: "PITP (Sukkur IBA University)",
    issueDate: "2023",
    verificationUrl: "https://verifypitp.netlify.app/certificate/210838",
    credentialId: "210838",
    category: "Development",
  },
  {
    id: "cert-10",
    title: "Freelancing Professional",
    issuer: "DigiSkills Pakistan",
    issueDate: "2023",
    verificationUrl: "https://digiskills.pk/verify/",
    credentialId: "GKWHAPZMK",
    category: "Marketing",
  },
  {
    id: "cert-11",
    title: "WordPress Professional",
    issuer: "DigiSkills Pakistan",
    issueDate: "2023",
    verificationUrl: "https://digiskills.pk/verify/",
    credentialId: "M6JSM6FMK",
    category: "Development",
  },
  {
    id: "cert-12",
    title: "CSS Basics Certified",
    issuer: "HackerRank",
    issueDate: "2023",
    verificationUrl: "https://www.hackerrank.com/certificates/acd477eoee34",
    credentialId: "ACD477EOEE34",
    category: "Development",
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Intermediate in Pre-Engineering",
    institution: "Government Degree College, Sukkur",
    duration: "2020 - 2022",
    location: "Sukkur, Sindh, Pakistan",
    grade: "Grade A",
  },
  {
    id: "edu-2",
    degree: "Matriculation (Computer Science)",
    institution: "Public School / High Secondary Board, Sukkur",
    duration: "2018 - 2020",
    location: "Sukkur, Sindh, Pakistan",
    grade: "A-One Grade",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Founder & Lead Architect",
    company: "Ubaidi IT Solutions",
    duration: "2023 - Present",
    description: [
      "Architected and deployed dozens of secure glassmorphic corporate web properties and web applications using React, Next.js, and Node.js.",
      "Conducted technical SEO audits, improving baseline traffic by 180% and implementing security systems to mitigate digital vulnerabilities.",
      "Delivered reliable full-stack and API solutions while maintaining elegant user experiences and lightning-fast metrics."
    ],
    skills: ["React", "Express", "Node.js", "MongoDB", "Technical SEO", "Cloud VPS"],
  },
  {
    id: "exp-2",
    role: "Founder & Community Director",
    company: "Ubaidi IT Community",
    duration: "2022 - Present",
    description: [
      "Established Pakistan's rapidly rising regional developers and tech hub, gathering hundreds of enthusiastic tech learners.",
      "Organized free bootcamps, security guidelines, design workshops, and coding challenges for local students.",
      "Collaborated with developers to distribute free open-source templates, web components, and portfolio audits."
    ],
    skills: ["Mentorship", "Public Speaking", "Community Organizing", "Open-Source Support"],
  },
  {
    id: "exp-3",
    role: "Technical Content Creator & Educator",
    company: "CodeWithSamiUbaidi (YouTube & Socials)",
    duration: "2021 - Present",
    description: [
      "Crafted full-length educational coursewares modeling Java OOP, Python, Canva workflows, WordPress optimization, and OWASP Top 10 Security Basics.",
      "Interacted directly with digital audiences to debug web projects and mentor freelance career pathing.",
      "Published over 100 tutorials promoting high-quality coding practices and digital branding."
    ],
    skills: ["Video Production", "Technical Explanations", "Syllabus Design", "Audience Growth"],
  },
  {
    id: "exp-4",
    role: "Freelance Full-Stack Dev & Mentor",
    company: "Upwork & Direct Collaborations",
    duration: "2021 - Present",
    description: [
      "Helped startups establish online marketing funnels, interactive booking layouts, and customizable WordPress/React components.",
      "Mentored up-and-coming remote learners on getting certified with modern technologies like Coursera, Sukkur IBA PITP, and DigiSkills."
    ],
    skills: ["Freelancing", "Lead Funnels", "React Widgets", "Cybersecurity Baseline Checks"],
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "b-1",
    slug: "securing-modern-react-api-integrations",
    title: "Securing Modern React & Node API Integrations: Practical Security Handbook",
    excerpt: "Learn how to safeguard your client-side variables, defend against Cross-Site Scripting (XSS), implement JWT security properly, and execute safe API proxies.",
    category: "Cybersecurity",
    publishDate: "June 2026",
    readTime: "7 min read",
    tags: ["Security", "React", "Node.js", "OWASP"],
    content: `## Securing React Frontends & Node.js Backends

Modern software development often relies heavily on Client-Side Single Page Applications (SPAs) talking directly to API gateways. While fast, this structure introduces immediate risks like credential leaking, Cross-Site Scripting (XSS), and Cross-Origin Resource Sharing (CORS) misconfigurations. Here is a definitive handbook on securing your web products.

### 1. The Danger of VITE_ prefixed API Keys
When building with Vite, any environment variable prefixed with \`VITE_\` is hardcoded into the javascript bundle served to the user's browser.

If you make requests directly to third-party services like OpenAI or Stripe using these public client-side keys, malicious users can easily read them in their browser's Network tab!

**Solution**: Always route sensitive requests through an API Proxy.
Create a lightweight server route and make requests server-side inside \`server.ts\` where client-side users cannot read your \`process.env\` variables:

\`\`\`typescript
// server.ts - Secure backend proxy
app.post("/api/translate", async (req, res) => {
  const secretKey = process.env.DEEPL_SECRET_KEY; // Kept secure on server
  const response = await fetch("https://api.deepl.com/v2/translate", {
    headers: { "Authorization": \`DeepL-Auth-Key \${secretKey}\` },
    body: JSON.stringify(req.body)
  });
  res.json(await response.json());
});
\`\`\`

### 2. Defending Against Cross-Site Scripting (XSS)
Cross-Site Scripting occurs when an application includes untrusted user inputs inside the browser window without proper sanitization. 
- **Danger**: \`dangerouslySetInnerHTML\` must be scrutinized obsessively.
- **Tip**: Always sanitize with libraries like \`DOMPurify\` before rendering rich text, or let frameworks like \`react-markdown\` and standard React escape dynamic data.

Stay tuned to *Ubaidi IT Community* for our continuous web vulnerability series!`,
  },
  {
    id: "b-2",
    slug: "boosting-saas-conversions-with-interactive-funnels",
    title: "Boosting SaaS and Portfolio Conversions with Highly Interactive Funnels",
    excerpt: "Why standard contact forms fail to convert recruiters and clients, and how customized WhatsApp redirection/mailto automation yields 240% higher action responses.",
    category: "Freelancing",
    publishDate: "May 2026",
    readTime: "5 min read",
    tags: ["Marketing", "Conversion", "SaaS", "Lead Generation"],
    content: `## Reimagining User Inquiries: The Power of Interactive Funnels

Most developers place a standard "Subject, Message, Name" input block in the page footer, which redirects to an outdated dashboard or gets buried in spam filters. A premium SaaS approach acts as an active **personal brand funnel**.

### Why Static Contact Forms Fail
1. **Friction**: Filling out several blank input fields takes too long.
2. **Disconnection**: A generic "Sent Successfully!" message feels cold. Visitors don't feel sure if their inquiry will be read.
3. **High Bounce Rates**: Recruites want immediate replies on channels they use every day, like WhatsApp.

### The Conversion-First Strategy
To optimize conversion, build an inquiry form with **Service Selection** and dynamic link creation:
- Ask visitors about their budget or specific goals early (e.g., *Full-Stack Development, Cybersecurity Consultation, Digital Marketing*).
- Auto-generate direct high-urgency CTAs like **"Instantly ping via WhatsApp"** or **"Draft Structured Email"**.
- This handles user authentication natively through their own apps, ensuring real user identities and direct, friction-free engagement!

Utilizing this dynamic redirection directly on top-tier portfolio projects converts visitors into actual clients instantly.`,
  },
  {
    id: "b-3",
    slug: "understanding-ai-grounding-and-prompting",
    title: "Understanding AI Grounding, Tool Calling, and the Google GenAI SDK",
    excerpt: "An architectural deep-dive into the @google/genai module, implementing search grounding and reliable server-sided functions.",
    category: "AI Tools",
    publishDate: "April 2026",
    readTime: "6 min read",
    tags: ["AI", "Gemini", "Node.js", "TypeScript"],
    content: `## Harnessing @google/genai for Modern Applications

Developers are pivoting from simple chatbot exchanges to robust **agentic pipelines** where AI is equipped with tools, internet search capabilities, and precise formatting boundaries. Let's look at the correct patterns for modern AI applications.

### 1. Correct Model Selection
With the unified Google GenAI SDK, selection should be deliberate and budget-optimized:
- **gemini-2.5-flash**: Great for real-time text generation, fast response, multi-modal processing.
- **gemini-2.5-pro**: Excellent for heavy reasoning, coding operations, and extensive instruction compliance.

### 2. Utilizing Search Grounding (Live Information Retrieval)
The Google SDK lets model answers ground themselves directly on live Google Search results:

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(); // Implicitly loads GEMINI_API_KEY from env
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'What are the current top trends in cybersecurity in 2026?',
  config: {
    // Enable Google Search grounding to retrieve current, non-hallucinated events
    tools: [{ googleSearch: {} }] 
  }
});
\`\`\`

Using this configuration, Gemini acts as a high-fidelity intelligence layer with verified, grounded insights.`,
  },
  {
    id: "b-4",
    slug: "empowering-pakistan-next-gen-builders-ubaidi",
    title: "Empowering Pakistan's Next-Gen Builders: The Ubaidi IT Community Mission",
    excerpt: "How a grassroots developer network in Sukkur, Sindh, is bridging the digital literacy gap, offering premium mentoring, and building open-source templates.",
    category: "Programming",
    publishDate: "March 2026",
    readTime: "5 min read",
    tags: ["Mentorship", "Community", "Pakistan", "Open Source"],
    content: `## Bridging Tech Opportunities Outside Major Hubs

Typically, major development hubs inside Pakistan are concentrated in Lahore, Karachi, or Islamabad, leaving talented students in cities like Sukkur, Khairpur, or Larkana with less access to direct mentorship. 

### Why Regional Tech Networks Matter
- **Contextual Knowledge Sharing**: Explaining complex API concepts or cloud architectures in regional tongues (Sindhi / Urdu) accelerates grasping times.
- **Collaborative Project Cycles**: Creating mock-team environments for students to construct real portfolios.
- **Supportive Freelance Advice**: Demystifying remote consulting models, Upwork contracts, and digital invoice configurations.

Our long-term commitment at the **Ubaidi IT Community** is to cultivate a highly technical community right here in upper Sindh, demonstrating that top-tier modern software can be shipped from any corner of the country.`,
  },
  {
    id: "b-5",
    slug: "practical-security-auditing-checklist-developers",
    title: "The Practical Security Auditing Checklist for Junior Web Developers",
    excerpt: "Ensure your apps are protected before they go live with this straightforward, high-impact checklist including CORS, rate limiting, and HTTP headers.",
    category: "Cybersecurity",
    publishDate: "February 2026",
    readTime: "7 min read",
    tags: ["Security", "OWASP", "Checklist", "Webdev"],
    content: `## Before You Run "npm run build": The Security Gatekeeper

A major misbelief is that cyber defense is exclusively for systems administrators or infrastructure teams. Secure coding starts in the developer IDE. Here are four baseline metrics to review prior to every release:

### 1. Robust CORS Definition
Never use wildcards (\`Access-Control-Allow-Origin: *\`) inside APIs handling session credentials or private databases. Always set strict whitelist arrays.

### 2. Implement Rate-Limiting
Defend public endpoints from DDoS attempts or script scraping. Node.js applications should deploy \`express-rate-limit\` on login and mail funnels:
\`\`\`typescript
import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests from this IP"
});
\`\`\`

### 3. Helmet Security Headers
Inject standard armor headers like Content-Security-Policy (CSP), Strict-Transport-Security, and X-Frame-Options effortlessly using Helmet.`,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Alex Sterling",
    role: "CEO & Co-Founder",
    company: "Apex Ledger Analytics",
    content: "Sami designed a state-of-the-art secure platform that totally exceeded our security standards. His combination of clean React development with advanced threat modeling is truly rare in the industry.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Faraz Ahmed",
    role: "Open-Source Trainee",
    company: "Ubaidi IT Community",
    content: "Under Sami's exceptional guidance at Ubaidi IT Community, I transitioned from simple HTML to building full-stack secure SaaS applications. His mentorship is completely free, generous, and highly practical.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Clara von de Berg",
    role: "Director of Digital Strategy",
    company: "Novis Web Group",
    content: "Our conversion rates skyrocketed by 240% after implementing Sami's interactive funnels and SEO recommendations. His technical precision and proactive mindset made him a delight to collaborate with.",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Mustafa Shah",
    role: "DevOps Engineer",
    company: "Global Tech Venture",
    content: "Sami's deep grasp of security risks management and secure React state architectures helped clean up our legacy enterprise configurations. Highly recommended for penetration audits.",
    rating: 5,
  }
];

