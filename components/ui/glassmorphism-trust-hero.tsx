import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Star,
  TerminalSquare,
} from "lucide-react";

const CLIENTS = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: TerminalSquare },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "FastAPI", icon: BriefcaseBusiness },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-center text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 font-sans text-white">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-marquee {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <div
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-35"
        style={{
          maskImage: "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(251,191,36,0.2),transparent_32%),linear-gradient(180deg,rgba(9,9,11,0.5),#09090b_92%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 md:pb-20 md:pt-32 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 pt-8 lg:col-span-7">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 sm:text-xs">
                  Mid-Level Full-Stack Developer
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 86%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 86%, transparent 100%)",
              }}
            >
              Bishrav
              <br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                Shiwakoti
              </span>
              <br />
              Builds Web Systems
            </h1>

            <p className="animate-fade-in delay-300 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Full-stack developer in Kathmandu working across React, Next.js,
              TypeScript, Node.js, FastAPI, PostgreSQL, authentication, tests,
              dashboards, telemetry, and production-facing business websites.
            </p>

            <p className="animate-fade-in delay-300 text-sm font-semibold tracking-wide text-amber-200">
              Open to full-stack roles in Germany.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:bishravs@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Bishrav
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5 lg:mt-12">
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <BriefcaseBusiness className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">4+</div>
                    <div className="text-sm text-zinc-400">Years building web products</div>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Full-stack coverage</span>
                    <span className="font-medium text-white">UI to deployment</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-white to-amber-200" />
                  </div>
                </div>

                <div className="mb-6 h-px w-full bg-white/10" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="3" label="Live roles" />
                  <StatItem value="4+" label="Major builds" />
                  <StatItem value="UK" label="Computing degree" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    AVAILABLE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <GraduationCap className="h-3 w-3 text-yellow-500" />
                    FINAL YEAR BSC
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">
                Core stack from the CV
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-marquee flex whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={`${client.name}-${i}`}
                      className="mx-6 flex items-center gap-2 opacity-55 grayscale transition-all hover:scale-105 hover:opacity-100 hover:grayscale-0"
                    >
                      <client.icon className="h-6 w-6 text-white" />
                      <span className="text-lg font-bold tracking-tight text-white">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 px-8">
                <a
                  href="mailto:bishravs@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Email Bishrav"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://bishrav-portfolio-production.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="View portfolio"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bishrav-shiwakoti-603201345/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="View professional experience"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <a
              href="#skills"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-200/15"
            >
              Explore technical toolkit
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
