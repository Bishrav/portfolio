import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ResearchProject() {
  return (
    <section id="research" className="section section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Research project"
          title="A research question, implemented as a system."
          description="NEBULA is the central research project behind my current work in information retrieval, trustworthy AI, and dependable software systems."
        />
        <article className="research-panel">
          <div className="research-panel-heading">
            <div>
              <p className="research-kicker">Active research prototype</p>
              <h3>NEBULA — Trust-oriented hybrid retrieval</h3>
            </div>
            <a className="research-repo-link" href="https://github.com/Bishrav/NEBULA" target="_blank" rel="noreferrer"><Github size={17} /> Repository <ArrowUpRight size={14} /></a>
          </div>
          <p className="research-lead">NEBULA studies how freshness, source authority, graph context, and evidence-related signals can make engineering knowledge retrieval more inspectable than an unexplained relevance score.</p>
          <div className="research-grid">
            <div>
              <h4>What I am investigating</h4>
              <ul>
                <li>How lexical, semantic, hybrid, and trust-oriented ranking compare.</li>
                <li>How retrieval behaves under shard, replica, and network failures.</li>
                <li>How reproducible evaluation can separate evidence from hypotheses.</li>
              </ul>
            </div>
            <div>
              <h4>Research safeguards</h4>
              <ul>
                <li>Versioned inputs, checksums, fixed timestamps, and CI validation.</li>
                <li>Protected labels and explicit development/held-out boundaries.</li>
                <li>Conservative claims: prototype evidence is not production or generalisation proof.</li>
              </ul>
            </div>
          </div>
          <div className="research-tags"><span>Information retrieval</span><span>Trustworthy AI</span><span>Distributed systems</span><span>Empirical evaluation</span></div>
          <div className="research-actions">
            <a className="button button-primary" href="https://github.com/Bishrav/NEBULA/blob/main/docs/research/academic-research-brief.md" target="_blank" rel="noreferrer"><BookOpen size={16} /> Read research brief <ArrowUpRight size={14} /></a>
            <a className="research-text-link" href="https://github.com/Bishrav/NEBULA/blob/main/docs/research/research-readiness.md" target="_blank" rel="noreferrer">Research-readiness dashboard <ArrowUpRight size={14} /></a>
            <a className="research-text-link" href="https://github.com/Bishrav/NEBULA/blob/main/docs/research/claim-ledger.md" target="_blank" rel="noreferrer">Claim ledger <ArrowUpRight size={14} /></a>
          </div>
        </article>
      </div>
    </section>
  );
}
