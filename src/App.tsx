import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";

const skills = [
  "React",
  "Next.js App Router",
  "TypeScript",
  "Node.js",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "SQLite",
  "Prisma",
  "Sequelize",
  "JWT",
  "Docker Compose",
  "Jest",
  "Vitest",
  "Prometheus",
  "Grafana",
  "Socket.io",
  "Redis",
  "WebSockets",
  "OpenAI API",
  "SSE",
  "Drizzle ORM",
  "Python",
  "Machine Learning",
  "Threat Modeling",
  "Security Observability",
  "Kafka",
  "Neo4j",
  "PostGIS",
  "pgvector",
  "OpenTelemetry",
  "MinIO",
];

const experience = [
  {
    company: "Skyblitz Trading LLC",
    role: "Mid-Level Software Developer",
    period: "2024 - Present",
    details:
      "Contributed to production-facing website and backend systems, including API behavior, database-backed workflows, validation, structured responses, and maintainable service logic.",
  },
  {
    company: "Mobizilla Digital Agency",
    role: "Mid-Level Software Developer",
    period: "2024 - Present",
    details:
      "Built and maintained live web platform work for mymobizilla.com across UI implementation, API integration, authentication-related flows, data handling, and deployment-ready code.",
  },
  {
    company: "Aspire Group",
    role: "Part-Time Mid-Level Software Developer",
    period: "2021 - 2023",
    details:
      "Helped define website concepts, technology choices, early system design, and Agile delivery plans for web products.",
  },
];

const projects = [
  {
    name: "ATLAS",
    category: "C++ routing and graph optimization engine",
    summary:
      "An algorithm-first C++20 routing engine with validated weighted graphs, Dijkstra, A*, bidirectional search, deterministic snapshots, correctness oracles, controlled benchmarks, dynamic edge updates, and revision-aware route caching.",
    stack: ["C++20", "CMake", "Dijkstra", "A*", "Graph Algorithms", "Benchmarking"],
    github: "https://github.com/Bishrav/ATLAS",
    featured: true,
  },
  {
    name: "NEXUS",
    category: "Repository intelligence for AI-assisted engineering",
    summary:
      "A deterministic repository-facts engine that extracts Python symbols, imports, calls, diagnostics, and Git changes, then builds queryable indexes, incremental change plans, versioned snapshots, and benchmark evidence for future coding tools.",
    stack: ["Python", "AST Parsing", "Git", "Static Analysis", "Indexing", "Benchmarks"],
    github: "https://github.com/Bishrav/Nexus",
    featured: true,
  },
  {
    name: "Sentinel",
    category: "Security intelligence and incident correlation",
    summary:
      "Autonomous cybersecurity intelligence engine that normalizes authentication, API, database, container, and infrastructure telemetry, then combines deterministic detection, behavioral ML, sequence analysis, threat graphs, and evidence-grounded investigation.",
    stack: ["FastAPI", "Kafka", "Neo4j", "Behavioral ML", "OpenTelemetry"],
    github: "https://github.com/Bishrav/Sentinel",
    featured: true,
  },
  {
    name: "AEGIS",
    category: "Nepal flood-risk intelligence platform",
    summary:
      "Event-driven intelligence system that ingests weather, hydrology, roads, and public reports; detects anomalies, forecasts conditions, correlates incidents across time and geography, maps infrastructure dependencies, and produces transparent risk scores with evidence-grounded explanations.",
    stack: ["FastAPI", "Next.js", "Kafka", "Neo4j", "PostGIS", "RBAC"],
    github: "https://github.com/Bishrav/AEGIS",
    live: "https://aegis-dashboard-beta.vercel.app",
    featured: true,
  },
  {
    name: "LiveBoard",
    category: "Real-time collaboration platform",
    summary:
      "A polished live workspace for sharing updates, coordinating work, and keeping teams aligned in one focused interface.",
    stack: ["Next.js", "Socket.io", "Redis", "PostgreSQL"],
    github: "https://github.com/Bishrav/LiveBoard",
    live: "https://liveboard-production-6a27.up.railway.app",
    featured: true,
  },
  {
    name: "DevLens",
    category: "AI-powered code review tool",
    summary:
      "An AI-powered code review workspace that turns source snippets into structured findings with severity, line references, and actionable fix guidance.",
    stack: ["Next.js", "OpenAI API", "SSE Streaming"],
    github: "https://github.com/Bishrav/DevLens",
    live: "https://devlens-production-5624.up.railway.app",
    featured: true,
  },
  {
    name: "SkillSwapWeb",
    category: "Full-stack skill-sharing platform",
    summary:
      "React/Vite frontend with route guards, profiles, saved posts, cart/order flows, and component tests, backed by Express and PostgreSQL APIs.",
    stack: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/Bishrav/SkillSwapWeb",
  },
  {
    name: "Mobizlla",
    category: "Next.js e-commerce/admin system",
    summary:
      "Storefront, product details, cart, buyback, repair, blog, admin login, dashboard sections, PostgreSQL schemas, and JWT-backed API routes.",
    stack: ["Next.js", "PostgreSQL", "JWT"],
    github: "https://github.com/Bishrav/mobizlla",
  },
  {
    name: "Autonomous Mining Platform",
    category: "FastAPI backend and worker agent",
    summary:
      "Rig registration, heartbeats, telemetry ingestion, commands, health checks, Prometheus metrics, Docker Compose, Grafana, Redis, and PostgreSQL.",
    stack: ["FastAPI", "Redis", "Grafana"],
    github: "https://github.com/Bishrav/Mining",
  },
  {
    name: "PixelPunch",
    category: "Automotive e-commerce platform",
    summary:
      "React/Vite client with protected auth routes, dashboards, checkout modal, Axios, responsive CSS, and Express/Sequelize REST services.",
    stack: ["React", "Express", "Sequelize"],
    github: "https://github.com/Bishrav/PixelPunch",
  },
];

function App() {
  return (
    <main id="top" className="min-h-screen bg-zinc-950 text-white">
      <HeroSection />

      <nav className="sticky top-0 z-30 border-y border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-wide text-white">BS<span className="text-amber-300">.</span></a>
          <div className="flex items-center gap-5 text-xs font-medium text-zinc-400 sm:gap-8 sm:text-sm">
            <a className="transition hover:text-white" href="#experience">Experience</a>
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="inline-flex items-center gap-1 rounded-full bg-amber-200 px-3 py-1.5 font-semibold text-zinc-950 transition hover:bg-amber-100" href="mailto:bishravs@gmail.com">
              Contact <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </nav>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Production-facing full-stack delivery
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            Focused on reliable web systems across UI, API, database schema,
            authentication, validation, testing, and operational tooling.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {experience.map((item) => (
            <article
              key={item.company}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <p className="text-sm text-amber-200">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.company}</h3>
              <p className="mt-1 text-sm font-medium text-zinc-300">{item.role}</p>
              <p className="mt-5 text-sm leading-6 text-zinc-400">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
            Project Evidence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Systems that show the range
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/40 ${
                project.featured
                  ? "border-amber-200/20 bg-gradient-to-br from-amber-200/[0.12] via-zinc-900/80 to-zinc-900/70"
                  : "border-white/10 bg-zinc-900/70"
              }`}
            >
              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-amber-200/20 bg-amber-200/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                  Recent build
                </span>
              )}
              <p className="text-sm font-medium text-amber-200">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">{item}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-amber-200"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                Toolkit
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Core technical skills</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Backend, frontend, database, authentication, test, delivery, and
              observability tools used across professional and project work.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-zinc-500">
        <div className="flex flex-col items-center gap-4">
          <p>Bishrav Shiwakoti · Kathmandu, Nepal · bishravs@gmail.com</p>
          <div className="flex items-center gap-4">
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/Bishrav" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="mailto:bishravs@gmail.com"><Mail className="h-4 w-4" /> Email</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://www.linkedin.com/in/bishrav-shiwakoti-603201345/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://bishrav-portfolio-production.up.railway.app" target="_blank" rel="noreferrer"><ArrowUpRight className="h-4 w-4" /> Portfolio</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
