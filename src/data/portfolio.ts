export type Project = {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  highlights: string[];
  status: string;
  github: string;
  live?: string;
  caseStudy?: string;
  featured?: boolean;
};

export const profile = {
  name: "Bishrav Shiwakoti",
  email: "bishravs@gmail.com",
  github: "https://github.com/Bishrav",
  linkedin: "https://www.linkedin.com/in/bishrav-shiwakoti-603201345/",
  resumeUrl: "",
};

export const projects: Project[] = [
  {
    name: "AEGIS",
    category: "AI Systems · Distributed Systems",
    summary:
      "Autonomous flood-risk intelligence platform for Nepal using event-driven services, evaluated ML pipelines, graph intelligence, hybrid retrieval, and evidence-grounded AI reasoning.",
    stack: ["Python / FastAPI", "Kafka / Redpanda", "PostgreSQL / PostGIS", "Neo4j", "pgvector", "Redis"],
    highlights: [
      "Idempotent ingestion with retries, deduplication, and dead-letter handling",
      "NLP, anomaly detection, forecasting, correlation, and graph-based impact analysis",
      "RBAC-protected operations dashboard with evidence retrieval and replay workflows",
      "OpenTelemetry, Prometheus, Grafana, CI gates, and deployment runbooks",
    ],
    status: "Phase 7 · Production evidence in progress",
    github: "https://github.com/Bishrav/AEGIS",
    live: "https://aegis-dashboard-beta.vercel.app",
    caseStudy: "https://github.com/Bishrav/AEGIS/blob/main/docs/architecture/overview.md",
    featured: true,
  },
  {
    name: "Sentinel",
    category: "Security Engineering · AI/ML",
    summary:
      "Security telemetry and threat-correlation platform combining event streaming, rule detection, behavioral anomaly detection, attack graphs, and investigation workflows.",
    stack: ["Python", "FastAPI", "Kafka / Redpanda", "Behavioral ML", "Neo4j", "OpenTelemetry"],
    highlights: [
      "Versioned canonical security events and replay-safe processing boundaries",
      "Rule detection, entity baselines, explainable anomaly scores, and model evaluation",
      "Threat-graph algorithms for reachability, attack paths, and permission changes",
      "Measured incrementally with tests, evidence reports, and documented failure modes",
    ],
    status: "In Development · Phases 0–4 implemented",
    github: "https://github.com/Bishrav/Sentinel",
    caseStudy: "https://github.com/Bishrav/Sentinel/blob/main/docs/operations/phase-4-validation.md",
    featured: true,
  },
  {
    name: "LiveBoard",
    category: "Real-Time Systems",
    summary:
      "Real-time collaborative platform with authenticated board rooms, Socket.io synchronization, Redis-backed presence and fanout, and PostgreSQL persistence.",
    stack: ["Next.js", "TypeScript", "Socket.io", "Redis", "PostgreSQL", "Docker"],
    highlights: [
      "REST APIs for durable auth, workspaces, boards, cards, and invites",
      "Presence snapshots and live card create, update, move, and delete events",
      "Redis pub/sub adapter for multi-instance event fanout",
      "Unit, API, socket integration tests, CI, health checks, and Railway deployment",
    ],
    status: "Phase 5 complete · Live demo",
    github: "https://github.com/Bishrav/LiveBoard",
    live: "https://liveboard-production-6a27.up.railway.app",
    caseStudy: "https://github.com/Bishrav/LiveBoard/blob/master/docs/architecture.mmd",
    featured: true,
  },
  {
    name: "DevLens",
    category: "Developer Infrastructure · AI",
    summary:
      "AI-assisted developer tooling platform for structured code analysis, GitHub PR review workflows, validated model output, fallback handling, persistent history, and analytics.",
    stack: ["Next.js", "TypeScript", "OpenAI Responses API", "Zod", "PostgreSQL", "GitHub API"],
    highlights: [
      "Strict structured review contracts validated before results reach the UI",
      "AI, AI-fallback, and deterministic mock modes for resilient demonstrations",
      "PR diff import, review persistence, filtering, restore flow, and analytics",
      "12 verified tests, lint, production build, GitHub Actions, and Railway deployment",
    ],
    status: "Phase 5 complete · Live demo",
    github: "https://github.com/Bishrav/DevLens",
    live: "https://devlens-production-5624.up.railway.app",
    caseStudy: "https://github.com/Bishrav/DevLens/blob/master/docs/architecture.mmd",
    featured: true,
  },
];

export const capabilities = [
  {
    title: "Backend Systems",
    description: "APIs, authentication, service boundaries, PostgreSQL, Redis, and asynchronous workloads.",
  },
  {
    title: "AI / ML Engineering",
    description: "Classical ML, embeddings, RAG, structured model integration, evaluation, and fallbacks.",
  },
  {
    title: "Distributed & Real-Time",
    description: "Kafka/event streams, WebSockets, queues, caching, synchronization, and resilience.",
  },
  {
    title: "Production Engineering",
    description: "Containers, CI/CD, observability, testing, failure handling, and deployment workflows.",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { title: "Backend", items: ["FastAPI", "Node.js", "Express", "REST APIs", "JWT", "WebSockets / SSE"] },
  { title: "Data Infrastructure", items: ["PostgreSQL", "PostGIS", "Redis", "Neo4j", "pgvector", "Kafka / Redpanda", "MinIO"] },
  { title: "AI / ML", items: ["scikit-learn", "PyTorch", "Transformers", "RAG", "Embeddings", "Model evaluation"] },
  { title: "Infrastructure", items: ["Docker", "GitHub Actions", "Prometheus", "Grafana", "OpenTelemetry", "Railway"] },
];

export const experience = [
  {
    company: "Skyblitz Trading LLC",
    role: "Mid-Level Software Developer",
    period: "2024 – Present",
    details: "Contributed to production-facing websites and backend systems, including API behavior, database-backed workflows, validation, structured responses, and maintainable service logic.",
  },
  {
    company: "Mobizilla Digital Agency",
    role: "Mid-Level Software Developer",
    period: "2024 – Present",
    details: "Built and maintained live platform work across UI implementation, API integration, authentication-related flows, data handling, and deployment-ready code.",
  },
  {
    company: "Aspire Group",
    role: "Part-Time Mid-Level Software Developer",
    period: "2021 – 2023",
    details: "Helped define website concepts, technology choices, early system design, and Agile delivery plans for web products.",
  },
];
