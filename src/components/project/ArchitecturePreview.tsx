import type { Project } from "@/data/portfolio";

const previewCopy: Record<Project["visual"], { eyebrow: string; nodes: string[] }> = {
  aegis: { eyebrow: "Event-driven intelligence", nodes: ["Signals", "Stream", "Models", "Graph", "Explain"] },
  sentinel: { eyebrow: "Security correlation", nodes: ["Events", "Detect", "Baseline", "Graph", "Incident"] },
  liveboard: { eyebrow: "Collaborative state", nodes: ["Clients", "Socket", "Redis", "Postgres", "Boards"] },
  devlens: { eyebrow: "Structured review", nodes: ["Code", "Validate", "Model", "Fallback", "History"] },
};

export default function ArchitecturePreview({ type, large = false }: { type: Project["visual"]; large?: boolean }) { const preview = previewCopy[type]; return <div className={`architecture-preview architecture-preview-${type}${large ? " architecture-preview-large" : ""}`} aria-label={`${preview.eyebrow} architecture preview`}><p>{preview.eyebrow}</p><div className="architecture-track">{preview.nodes.map((node, index) => <div className="architecture-node" key={node}><span>{node}</span>{index < preview.nodes.length - 1 && <i aria-hidden="true" />}</div>)}</div><div className="architecture-caption"><span>typed boundary</span><span>observable path</span><span>replayable state</span></div></div>; }
