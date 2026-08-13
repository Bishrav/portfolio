import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? " project-card-featured" : ""}`}>
      <div className="project-card-topline">
        <span className="project-category">{project.category}</span>
        <span className="status-pill">{project.status}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="tag-list" aria-label={`${project.name} technologies`}>
        {project.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
      </div>
      <ul className="highlight-list">
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
        {project.live && <a className="action-secondary" href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
        {project.caseStudy && <a className="action-secondary" href={project.caseStudy} target="_blank" rel="noreferrer">Architecture <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}
