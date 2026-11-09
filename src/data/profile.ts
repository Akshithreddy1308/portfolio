/**
 * Single source of truth for all portfolio content.
 * Every fact here is taken from the resume, the LinkedIn profile export,
 * or the public GitHub repositories — nothing is invented.
 */

export const profile = {
  name: "Akshith Reddy",
  fullName: "Busi Reddy Akshith Reddy",
  initials: "AR",
  role: "AI Engineer · Software Engineer II",
  location: "Hyderabad, India",
  email: "b.akshithreddy130804@gmail.com",
  /** Replace with "/profile.jpg" once a real photo is added to /public */
  photo: null as string | null,
  resume: "/Akshith_Reddy_Resume.pdf",
  siteUrl: "https://akshithreddy.vercel.app",
  typingRoles: [
    "AI Engineer",
    "Multi-Agent Systems Builder",
    "Voice AI Developer",
    "FastAPI Backend Engineer",
  ],
  tagline:
    "I build production AI systems that talk, reason and act — from multilingual voice agents handling real calls to multi-agent platforms running on enterprise data.",
  currently: { title: "Software Engineer II", company: "Accellor" },
  socials: {
    github: "https://github.com/Akshithreddy1308",
    linkedin: "https://www.linkedin.com/in/akshith-reddy-296486271/",
    leetcode: "https://leetcode.com/akshith_reddy1308/",
    codechef: "https://www.codechef.com/users/cbit1_2112116",
  },
};

/** Headline metrics — all quoted directly from the resume. */
export const metrics = [
  { value: 1000, suffix: "+", label: "Daily voice-agent sessions supported" },
  { value: 80, suffix: "%", label: "Call-latency improvement" },
  { value: 20, suffix: "+", label: "Microservices deployed on AWS" },
  { value: 9.3, suffix: "", decimals: 1, label: "B.E. GPA (CSE · AI & ML)" },
];

export const about = {
  intro: [
    "I'm an AI Engineer from Hyderabad working at the intersection of real-time interaction and intelligent automation. My work spans multilingual voice AI, conversational agents and enterprise procurement platforms — systems that let people interact with software naturally, through STT/TTS pipelines, LLMs and context-aware dialogue models.",
    "Today I'm a Software Engineer II at Accellor, where I work across the backend and AI layer of an AI-assisted procurement platform: a FastAPI backend integrated with Oracle Fusion, and a multi-agent system built on Microsoft Agent Framework, Azure OpenAI, Cosmos DB and Azure AI Search — with guardrails for safety, auditability and reliability.",
  ],
  journey: [
    { year: "2021", text: "Began B.E. in Computer Science (AI & ML) at CBIT, Hyderabad. Reached the Smart India Hackathon finals during my degree." },
    { year: "2024", text: "JPMC Code for Good finalist. Joined 10xR as a founding Software Developer, building voice AI." },
    { year: "2025", text: "Graduated with a 9.3 GPA. Joined Techolution as an AI Engineer." },
    { year: "2026", text: "Software Engineer II at Accellor — enterprise AI for procurement." },
  ],
  interests: [
    "Multi-agent orchestration",
    "Real-time voice AI",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "AI safety & guardrails",
    "Observability for AI systems",
  ],
  goal:
    "I enjoy real-time interaction and intelligent automation, and I want to keep making AI feel natural and trustworthy in production — systems that are fast, observable, auditable and genuinely useful to the people who rely on them.",
  differentiators: [
    {
      title: "Full-stack AI, not just prompts",
      text: "I own the whole path — data model, APIs, agent tooling, infrastructure and observability.",
    },
    {
      title: "Production at scale",
      text: "Voice agents serving 1,000+ daily sessions across 5+ languages, on infrastructure kept at 99.99% uptime.",
    },
    {
      title: "Founding-team ownership",
      text: "As a founding developer at 10xR I shipped from zero: SIP telephony, agents, Terraform and AWS.",
    },
  ],
};

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
};

/** Verified against resume, LinkedIn and actual repository code. */
export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: "AI & Agents",
    blurb: "Agentic systems, retrieval and LLM tooling",
    skills: [
      "Multi-Agent Systems",
      "Microsoft Agent Framework",
      "LangGraph",
      "LangChain",
      "RAG",
      "MCP",
      "Azure OpenAI",
      "OpenAI",
      "Azure AI Search",
      "FAISS",
      "Hugging Face",
      "scikit-learn",
    ],
  },
  {
    id: "voice",
    title: "Voice & Real-time",
    blurb: "Speech pipelines and live communication",
    skills: ["LiveKit", "STT / TTS", "Deepgram", "Google Speech-to-Text", "Cartesia", "SIP", "WebRTC", "SSE"],
  },
  {
    id: "languages",
    title: "Languages",
    blurb: "What I write every day",
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs, async processing and data layers",
    skills: ["FastAPI", "Flask", "Django", "REST APIs", "Celery", "Alembic", "Node.js", "Express.js"],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces for the systems I build",
    skills: ["React.js", "Vite", "React Router", "HTML5", "CSS3"],
  },
  {
    id: "data",
    title: "Databases",
    blurb: "Relational, document and cache stores",
    skills: ["PostgreSQL", "MongoDB", "MongoDB Atlas", "Amazon DocumentDB", "Azure Cosmos DB", "Redis", "SQLite"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    blurb: "Infrastructure, deployment and observability",
    skills: ["AWS", "Amazon ECS", "Amazon EKS", "Terraform", "Docker", "Kubernetes", "SigNoz", "Git", "GitHub"],
  },
];

/** Marquee row in hero/skills — the core stack. */
export const coreStack = [
  "Python",
  "FastAPI",
  "LangGraph",
  "Microsoft Agent Framework",
  "LiveKit",
  "RAG",
  "MCP",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Azure OpenAI",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "React.js",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  stats?: { value: string; label: string }[];
};

export const experience: Experience[] = [
  {
    company: "Accellor",
    role: "Software Engineer II",
    period: "Apr 2026 — Present",
    location: "Hyderabad, India",
    summary:
      "Building the backend and AI layer of an enterprise procurement platform with Oracle Fusion as the system of record.",
    highlights: [
      "Architected the backend data layer and REST APIs — 70+ PostgreSQL tables and 17+ API domains on FastAPI — the backbone a multi-agent LLM system built on Microsoft Agent Framework reads and writes through.",
      "Developed the integration and tooling layer connecting the agent architecture to Oracle Fusion Procurement Cloud: SSE-streamed endpoints for real-time agent responses, an audit pipeline logging every AI interaction, and Celery-based async pipelines syncing AI-driven evaluation scoring back to the system of record.",
      "Integrated SigNoz for distributed tracing across the FastAPI backend and managed schema evolution with Alembic across 120+ migrations — safe, backward-compatible production changes without downtime.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Microsoft Agent Framework", "Azure OpenAI", "Oracle Fusion", "Celery", "SSE", "Alembic", "SigNoz"],
    stats: [
      { value: "70+", label: "PostgreSQL tables" },
      { value: "17+", label: "API domains" },
      { value: "120+", label: "Zero-downtime migrations" },
    ],
  },
  {
    company: "Techolution",
    role: "AI Engineer",
    period: "Oct 2025 — Mar 2026",
    location: "Hyderabad, India",
    summary: "Shipped prompt-engineering and voice-driven conversational features.",
    highlights: [
      "Delivered a “Prompt Mode” feature for structured prompt generation.",
      "Drove adoption of Voice Agents using Google Speech-to-Text, enabling conversational, voice-based interaction workflows.",
    ],
    stack: ["Python", "Google Speech-to-Text", "Voice Agents", "LLMs"],
  },
  {
    company: "10xR",
    role: "Founding Software Developer",
    period: "May 2024 — Sep 2025",
    location: "Hyderabad, India",
    url: "https://www.10xr.co/",
    summary:
      "Founding engineer on an enterprise-grade AI voice agent platform — healthcare appointments, incident reporting, callback scheduling and persistent conversations.",
    highlights: [
      "Engineered a multilingual AI Voice Agent on LiveKit with STT (Deepgram, Google) and TTS (Google, Cartesia), plus SIP integration for real-time inbound/outbound calls — 5+ languages, 80% lower call latency, 1,000+ daily sessions.",
      "Devised a scalable multi-agent system with task-specific roles, turn detection and noise suppression, incorporating RAG and MCP servers — +35% dialogue accuracy in noisy environments and 97% contextual response accuracy across 10,000+ interactions.",
      "Orchestrated AWS infrastructure with Terraform, deploying 20+ microservices via EKS/ECS — 60% faster deployments, Kubernetes environments at 99.99% uptime, and Amazon DocumentDB querying millions of records.",
    ],
    stack: ["Python", "LiveKit", "Deepgram", "Cartesia", "SIP", "RAG", "MCP", "AWS", "Terraform", "Kubernetes", "DocumentDB"],
    stats: [
      { value: "80%", label: "Lower call latency" },
      { value: "97%", label: "Contextual accuracy" },
      { value: "99.99%", label: "Uptime" },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  description: string;
  features: string[];
  stack: string[];
  repo?: string;
  live?: string;
  liveLabel?: string;
  badge?: string;
  featured?: boolean;
  art: "voice" | "graph" | "rag" | "clusters" | "video" | "pulse";
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "voice-ai-platform",
    name: "10xR Voice AI Agent Platform",
    kind: "Production platform",
    badge: "Production · 10xR",
    description:
      "A production-grade multi-agent AI system with real-time SIP–WebRTC communication for HIPAA-compliant healthcare workflows — agents that pick up the phone, understand callers in multiple languages and get work done.",
    features: [
      "Real-time SIP ↔ WebRTC calling with LiveKit",
      "Multi-agent workflows: appointments, incident reports, callbacks",
      "6+ microservices on Terraform / ECS",
      "99.9% uptime · sub-500 ms latency · 40% cost reduction",
    ],
    stack: ["LiveKit", "FastAPI", "Python", "SIP", "Terraform", "AWS", "MongoDB Atlas"],
    live: "https://www.10xr.co/",
    liveLabel: "10xr.co",
    featured: true,
    art: "voice",
    accent: "#22d3ee",
  },
  {
    slug: "hybrid-library",
    name: "Hybrid Library Management System",
    kind: "JPMC Code for Good 2024 · Finalist",
    badge: "Hackathon finalist",
    description:
      "Built for rural connectivity at JPMorgan Chase Code for Good — a MERN-stack library platform with a dual-database design for communities with limited connectivity, plus predictive analytics that sharply reduced loss.",
    features: [
      "Dual-database architecture designed for rural connectivity",
      "Predictive analytics on circulation data",
      "Cut loss by 80% for 1,000+ rural users",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: "https://github.com/cfghyderabad24/Team-27",
    featured: true,
    art: "graph",
    accent: "#a78bfa",
  },
  {
    slug: "knowledge-qa",
    name: "Knowledge-Enhanced QA System",
    kind: "Retrieval-Augmented Generation",
    description:
      "A document question-answering assistant that ingests PDFs, CSVs and text files, embeds them into a FAISS vector index and answers strictly from the retrieved context with GPT-4 — refusing to guess when the answer isn't in the documents.",
    features: [
      "Multi-format ingestion: PDF, CSV and TXT",
      "MiniLM sentence-transformer embeddings in FAISS (top-k = 5)",
      "Grounded prompting that declines out-of-context questions",
      "Flask API + web UI with dialogue history",
    ],
    stack: ["Python", "LangChain", "FAISS", "Hugging Face", "OpenAI GPT-4", "Flask"],
    repo: "https://github.com/Akshithreddy1308/Knowledge-Enhanced-QA-System",
    featured: true,
    art: "rag",
    accent: "#f59e0b",
  },
  {
    slug: "ecommerce-analytics",
    name: "E-commerce Customer Intelligence",
    kind: "Data Science",
    description:
      "End-to-end analysis of customer, product and transaction data: exploratory analysis, a lookalike model that finds similar customers by purchase behaviour, and customer segmentation.",
    features: [
      "Lookalike model with cosine similarity on category-level purchase vectors",
      "K-Means segmentation tuned with the Davies–Bouldin index",
      "Modular Python package + reproducible notebooks and reports",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    repo: "https://github.com/Akshithreddy1308/Zeotap",
    art: "clusters",
    accent: "#34d399",
  },
  {
    slug: "youtube-clone",
    name: "YouTube Clone with Recommendations",
    kind: "Frontend",
    description:
      "A React + Vite video platform powered by the YouTube Data API v3 — category feeds, a video player page and category-based related-video recommendations.",
    features: [
      "Live data from the YouTube Data API v3",
      "Category feeds and client-side routing",
      "Related-video recommendations by category",
    ],
    stack: ["React.js", "Vite", "React Router", "YouTube Data API"],
    repo: "https://github.com/Akshithreddy1308/Youtube-clone",
    art: "video",
    accent: "#f472b6",
  },
  {
    slug: "fitness-tracker",
    name: "Fitness Tracker",
    kind: "Full-stack",
    description:
      "A Django web app with user sign-up, authentication and login-protected pages, plus a progress view built from the user's height and weight.",
    features: ["Django authentication & sessions", "Login-protected routes", "Height/weight progress view"],
    stack: ["Python", "Django", "SQLite", "HTML5", "CSS3"],
    repo: "https://github.com/Akshithreddy1308/fitness_tracker",
    art: "pulse",
    accent: "#60a5fa",
  },
];

export const education = [
  {
    school: "Chaitanya Bharathi Institute of Technology",
    degree: "Bachelor of Engineering — Computer Science & Engineering (AI & ML)",
    period: "Dec 2021 — May 2025",
    location: "Hyderabad",
    detail: "GPA 9.3",
    primary: true,
  },
  {
    school: "Sri Chaitanya Junior Kalasala",
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    period: "2019 — 2021",
  },
  {
    school: "Sri Chaitanya School",
    degree: "Secondary School Certificate (SSC)",
    period: "2018 — 2019",
  },
];

export const achievements = [
  {
    title: "JPMorgan Chase Code for Good 2024",
    result: "Finalist · Top 5%",
    text: "Led the team to a finalist position, outperforming 90% of competing teams with a library system for rural communities.",
    link: "https://github.com/cfghyderabad24/Team-27",
    linkLabel: "View project",
  },
  {
    title: "Smart India Hackathon",
    result: "National Finalist · Top 25 of 500+",
    text: "Selected among the top 25 teams from 500+ participants for the SIH finals with a machine-learning healthcare solution.",
  },
];

export const codingProfiles = [
  { name: "LeetCode", handle: "akshith_reddy1308", url: "https://leetcode.com/akshith_reddy1308/" },
  { name: "CodeChef", handle: "cbit1_2112116", url: "https://www.codechef.com/users/cbit1_2112116" },
  { name: "GitHub", handle: "Akshithreddy1308", url: "https://github.com/Akshithreddy1308" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
