import { ArrowUpRight, ExternalLink, Github, Library } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function OpenSourceRecognition() {
  return (
    <section id="recognition" className="section section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Open-source recognition"
          title="Recognition for careful research work."
          description="A public attribution for an open-source contribution that strengthens the NEBULA research project."
        />
        <article className="recognition-card">
          <div className="recognition-mark" aria-hidden="true"><Library size={22} strokeWidth={1.5} /></div>
          <div className="recognition-copy">
            <div className="recognition-meta"><span>Recognized in 2026</span><span>Open-source attribution</span></div>
            <h3>XERJ Corpus Hub Contributor</h3>
            <p>
              My NEBULA research project was selected for inclusion in the public XERJ Corpus Hub, an open reference library for AI coding agents. XERJ recognized my category failure-analysis implementation and published it with attribution to me and the Bishrav/NEBULA repository.
            </p>
            <div className="recognition-badge">
              <a href="https://hub.xerj.org/contributors/Bishrav" target="_blank" rel="noreferrer" aria-label="XERJ Corpus Hub contributor badge">
                <img src="https://hub.xerj.org/contributors/Bishrav/badge.svg" alt="XERJ Corpus Hub contributor" />
              </a>
            </div>
            <div className="recognition-links">
              <a className="button button-primary" href="https://hub.xerj.org/contributors/Bishrav" target="_blank" rel="noreferrer">View XERJ Contributor Page <ArrowUpRight size={16} /></a>
              <a className="recognition-text-link" href="https://github.com/Bishrav/NEBULA" target="_blank" rel="noreferrer"><Github size={16} /> NEBULA repository <ArrowUpRight size={14} /></a>
              <a className="recognition-text-link" href="https://xerj.org/" target="_blank" rel="noreferrer"><ExternalLink size={16} /> XERJ website <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
