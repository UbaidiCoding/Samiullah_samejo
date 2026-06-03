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
  facebook: "https://www.facebook.com/sami.samejo.75/",
  instagram: "https://www.instagram.com/sami_ubaidi/",
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
    duration: "2022 - 2024",
    location: "Sukkur, Sindh, Pakistan",
    grade: "Grade B",
  },
  {
    id: "edu-2",
    degree: "Matriculation (Science)",
    institution: "Public School / High Secondary Board, Sukkur",
    duration: "2020 - 2022",
    location: "Sukkur, Sindh, Pakistan",
    grade: "B- Grade",
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
    slug: "the-story-behind-samiubaidi-personal-branding-and-ai-philosophy",
    title: "The Story Behind 'SamiUbaidi' & My Multi-Disciplinary Services in the AI Era",
    excerpt: "Discover the deep personal meaning behind 'SamiUbaidi', how I manage various digital handles, and how we deliver website/mobile development, SEO, and social management powered by AI.",
    category: "Freelancing",
    publishDate: "February 2026",
    readTime: "6 min read",
    tags: ["Personal Brand", "AI Era", "SEO", "Development"],
    content: `## Fusing Ancestral Legacy with Tech Identity: Fictional vs. Real Names

Have you ever wondered where the brand name **SamiUbaidi** comes from? It represents a fusion of family honor and clear digital identity. 

### Why 'Ubaidi'?
My full name is **Samiullah Samejo** (often shortened to **Sami Samejo** or **Samiullah Ubaidi**), and my caste is **Samejo**. My beloved father's name is **Ubaid Ullah**. To pay homage to my father and build a highly memorable, short, and distinctive name for my freelance services and tech community, I took my name "Samiullah" and his name "Ubaid", creating the moniker **Samiubaid**. I then added one more 'i' to craft the ultimate professional identity: **SamiUbaidi**.

This name acts as a central bridge on my social media accounts and networks, allowing me to combine **Samiullah Samejo** (my main legal name) with my unique nickname/tech handle **SamiUbaidi** (devsamiubaidi).

### My Central Digital Handles
- **GitHub Handle**: [@UbaidiCoding](https://github.com/UbaidiCoding) — My absolute center-stage open-source repository where I publish full-stack packages.
- **YouTube Handle**: [@CodeWithSamiUbaidi](https://youtube.com/@CodeWithSamiUbaidi) — Displaying public title **CodeWithSami**, where I share tech guides on coding and cyber safety.

---

## My Multi-Disciplinary Services in the AI Era

I am a full-stack, multidisciplinary coder delivering end-to-end digital transformations. Operating under the brand **Ubaidi IT Solutions**, I specialize in:

1. **Full-Stack & Website Development**: High-conversion React endpoints, Node.js servers, and elegant database schemas.
2. **Mobile App Development**: Cross-platform responsive mobile applications with secure code bases.
3. **Advanced Branding & Graphic Direction**: Launch assets, logo guides, and custom corporate graphics.
4. **Social Media Management**: Strategic planning, audience conversion rate optimization, and community hub building.
5. **Technical SEO Copywriting**: Data-driven visibility optimizations, meta analytics, and search visibility.

### Fusing Power with AI Tools
We are living in the **AI Era**. Rather than resisting change, I actively deliver all these comprehensive services with the advanced assistance of state-of-the-art AI. I leverage AI to accelerate security vetting, draft pristine layouts, optimize page indexations, and generate high-engagement social material rapidly. This allows me to act as an entire agency in one developer, passing extreme speed and cost efficiency down to my clients. 

At *Ubaidi IT Solutions*, AI is not a crutch; it is our force multiplier for premium excellence.`,
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

