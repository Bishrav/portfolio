import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Next conversation</p>
        <h2>Currently open to opportunities.</h2>
        <p>I’m interested in software engineering roles focused on backend platforms, distributed systems, AI/ML infrastructure, search/retrieval, developer infrastructure, and production systems.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
        <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
        <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        <a className="button button-secondary" href="#resume">Resume <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
