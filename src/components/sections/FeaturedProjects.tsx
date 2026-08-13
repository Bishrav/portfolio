import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import FlagshipProject from "@/components/project/FlagshipProject";
import ProjectCard from "@/components/project/ProjectCard";

export default function FeaturedProjects() { const [aegis, ...rest] = projects; return <section id="projects" className="section container"><SectionHeading eyebrow="Selected work" title="Systems built to be understood." description="A focused set of engineering projects spanning event-driven systems, AI infrastructure, real-time collaboration, and developer tooling." /><FlagshipProject project={aegis} /><div className="project-grid">{rest.map((project) => <ProjectCard project={project} key={project.name} />)}</div></section>; }
