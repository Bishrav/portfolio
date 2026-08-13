import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ContactCTA from "@/components/ContactCTA";
import ExperienceItem from "@/components/ExperienceItem";
import MetricCard from "@/components/MetricCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { capabilities, experience, profile, projects, skillGroups } from "@/data/portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["projects", "experience", "skills", "about", "contact"];

  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <a className="wordmark" href="#top" aria-label="Bishrav Shiwakoti home">BS<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
            {navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item[0].toUpperCase() + item.slice(1)}</a>)}
            <a className="nav-resume" href="#resume" onClick={() => setMenuOpen(false)}>Resume <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Kathmandu, Nepal</p>
          <h1>Hi, I&apos;m Bishrav.</h1>
          <p className="hero-title">Backend &amp; AI Systems Engineer</p>
          <p className="hero-summary">I build distributed backends, AI/ML systems, real-time applications, search/retrieval infrastructure, and developer tools.</p>
          <p className="hero-open">Open to Software Engineering roles in <strong>Backend · Distributed Systems · AI/ML Infrastructure · Platform Engineering · Search/Retrieval · Developer Infrastructure</strong></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowDown size={16} /></a>
            <a className="button button-secondary" href="#resume">Resume <ArrowUpRight size={16} /></a>
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <aside className="hero-aside">
          <p className="eyebrow">Engineering focus</p>
          <ul>
            <li><span>01</span> Design clear service boundaries</li>
            <li><span>02</span> Make data and model behavior explainable</li>
            <li><span>03</span> Build for replay, failure, and operations</li>
          </ul>
          <div className="hero-rule" />
          <p className="aside-note">Architecture, reliability, and measurable evidence matter as much as the interface.</p>
        </aside>
      </header>

      <section id="projects" className="section container">
        <SectionHeading eyebrow="Featured work" title="Featured Engineering Projects" description="A focused set of systems that demonstrate backend depth, distributed processing, AI infrastructure, and production-minded delivery." />
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="How I work" title="What I work on" />
          <div className="capability-grid">{capabilities.map((item, index) => <article className="capability-card" key={item.title}><span className="capability-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionHeading eyebrow="Experience" title="Production-facing engineering" description="Experience across backend APIs, database-backed workflows, authentication, validation, delivery, and production web systems." />
        <div className="experience-list">{experience.map((item) => <ExperienceItem key={item.company} item={item} />)}</div>
      </section>

      <section className="section section-muted">
        <div className="container evidence-layout">
          <div><SectionHeading eyebrow="Evidence" title="Engineering Evidence" description="Only evidence that is documented in the project repositories is shown here. More benchmarks will be added as they are measured." /><div className="metric-grid"><MetricCard value="12" label="DevLens tests documented" /><MetricCard value="4+" label="Sentinel phases implemented" /><MetricCard value="5" label="AEGIS phases complete" /></div></div>
          <div className="evidence-note"><span className="signal-dot" /> <strong>Benchmarking in progress</strong><p>Cross-project throughput, latency, retrieval, and load-test results are intentionally omitted until they are measured and published.</p></div>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionHeading eyebrow="Technical skills" title="A focused toolkit" description="Grouped by the kinds of systems I build, rather than a percentage bar or an undifferentiated icon wall." />
        <div className="skills-grid">{skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}</div>
      </section>

      <section id="about" className="section section-muted">
        <div className="container about-grid"><SectionHeading eyebrow="About" title="Systems over surface area." /><div className="about-copy"><p>I&apos;m a software engineer focused on backend and AI systems. I enjoy solving problems involving distributed systems, machine learning infrastructure, real-time services, search, developer tooling, and production reliability.</p><p>I prefer engineering work where architecture, performance, reliability, and measurable technical decisions matter as much as the user interface.</p><div className="architecture-wrap"><p className="eyebrow">A common shape of the systems I build</p><ArchitectureDiagram /></div></div></div>
      </section>

      <section id="resume" className="section container resume-section"><div><p className="eyebrow">Resume</p><h2>Want the concise version?</h2><p>The resume PDF is the one remaining portfolio asset to connect. Until it is added, GitHub and LinkedIn provide the most current project and experience context.</p></div><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">View professional profile <ArrowUpRight size={16} /></a></section>

      <section className="section section-muted notes-section"><div className="container"><SectionHeading eyebrow="Coming later" title="Engineering Notes" description="A placeholder for technical writing once the articles are published." /><div className="notes-placeholder">Planned topics: idempotent event ingestion in AEGIS · Redis presence with WebSockets · BM25 vs vector search · graph-based incident correlation</div></div></section>

      <ContactCTA />

      <footer className="site-footer"><div className="container footer-inner"><p>© 2026 Bishrav Shiwakoti · Backend &amp; AI Systems Engineer</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div></div></footer>
    </main>
  );
}

export default App;
