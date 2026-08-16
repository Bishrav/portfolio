import type { Project } from "@/data/portfolio";

type Node = { id: string; label: string; x: number; y: number; width?: number; accent?: boolean };
type Edge = { from: string; to: string; bend?: number };
type Graph = { eyebrow: string; nodes: Node[]; edges: Edge[]; caption: string[] };

const graphs: Record<Project["visual"], Graph> = {
  aegis: {
    eyebrow: "Event-driven intelligence",
    nodes: [
      { id: "sources", label: "Sources", x: 12, y: 96, width: 68, accent: true },
      { id: "stream", label: "Kafka", x: 105, y: 96, width: 68, accent: true },
      { id: "nlp", label: "NLP", x: 205, y: 30, width: 72 },
      { id: "forecast", label: "Forecast", x: 205, y: 92, width: 72 },
      { id: "anomaly", label: "Anomaly", x: 205, y: 154, width: 72 },
      { id: "correlation", label: "Correlation", x: 303, y: 92, width: 82, accent: true },
      { id: "stores", label: "Neo4j / PG", x: 397, y: 42, width: 74 },
      { id: "reasoning", label: "RAG / AI", x: 397, y: 143, width: 74, accent: true },
    ],
    edges: [
      { from: "sources", to: "stream" }, { from: "stream", to: "nlp" }, { from: "stream", to: "forecast" },
      { from: "stream", to: "anomaly" }, { from: "nlp", to: "correlation" }, { from: "forecast", to: "correlation" },
      { from: "anomaly", to: "correlation" }, { from: "correlation", to: "stores" }, { from: "correlation", to: "reasoning" },
    ],
    caption: ["branching models", "graph state", "grounded output"],
  },
  sentinel: {
    eyebrow: "Security correlation",
    nodes: [
      { id: "collectors", label: "Collectors", x: 12, y: 96, width: 76, accent: true },
      { id: "kafka", label: "Kafka", x: 112, y: 96, width: 68, accent: true },
      { id: "normalize", label: "Normalize", x: 205, y: 96, width: 78 },
      { id: "rules", label: "Rules", x: 305, y: 30, width: 65 },
      { id: "ml", label: "Behavioral ML", x: 305, y: 92, width: 82 },
      { id: "sequence", label: "Sequences", x: 305, y: 154, width: 82 },
      { id: "incident", label: "Incident", x: 397, y: 92, width: 73, accent: true },
    ],
    edges: [
      { from: "collectors", to: "kafka" }, { from: "kafka", to: "normalize" }, { from: "normalize", to: "rules" },
      { from: "normalize", to: "ml" }, { from: "normalize", to: "sequence" }, { from: "rules", to: "incident" },
      { from: "ml", to: "incident" }, { from: "sequence", to: "incident" },
    ],
    caption: ["typed events", "parallel detection", "incident context"],
  },
  liveboard: {
    eyebrow: "Collaborative state",
    nodes: [
      { id: "clients", label: "Clients", x: 12, y: 96, width: 68, accent: true },
      { id: "socket", label: "Socket.io", x: 105, y: 96, width: 75, accent: true },
      { id: "rest", label: "REST API", x: 205, y: 34, width: 75 },
      { id: "presence", label: "Presence", x: 205, y: 154, width: 75 },
      { id: "redis", label: "Redis pub/sub", x: 303, y: 34, width: 88 },
      { id: "postgres", label: "PostgreSQL", x: 303, y: 154, width: 88 },
      { id: "state", label: "Board state", x: 397, y: 96, width: 73, accent: true },
    ],
    edges: [
      { from: "clients", to: "socket" }, { from: "socket", to: "rest" }, { from: "socket", to: "presence" },
      { from: "rest", to: "redis" }, { from: "presence", to: "postgres" }, { from: "redis", to: "state" },
      { from: "postgres", to: "state" },
    ],
    caption: ["room events", "presence fanout", "durable state"],
  },
  devlens: {
    eyebrow: "Structured review",
    nodes: [
      { id: "input", label: "Code / PR", x: 12, y: 96, width: 78, accent: true },
      { id: "validate", label: "Validate", x: 112, y: 96, width: 73, accent: true },
      { id: "model", label: "AI review", x: 208, y: 34, width: 73 },
      { id: "fallback", label: "Fallback", x: 208, y: 154, width: 73 },
      { id: "schema", label: "Zod schema", x: 305, y: 96, width: 82, accent: true },
      { id: "history", label: "History", x: 397, y: 34, width: 73 },
      { id: "analytics", label: "Analytics", x: 397, y: 154, width: 73 },
    ],
    edges: [
      { from: "input", to: "validate" }, { from: "validate", to: "model" }, { from: "validate", to: "fallback" },
      { from: "model", to: "schema" }, { from: "fallback", to: "schema" }, { from: "schema", to: "history" },
      { from: "schema", to: "analytics" },
    ],
    caption: ["validated input", "provider boundary", "persistent review"],
  },
  atlas: {
    eyebrow: "Measured route search",
    nodes: [
      { id: "graph", label: "Graph", x: 12, y: 96, width: 68, accent: true },
      { id: "engine", label: "Route engine", x: 105, y: 96, width: 82, accent: true },
      { id: "dijkstra", label: "Dijkstra", x: 212, y: 34, width: 72 },
      { id: "astar", label: "A*", x: 212, y: 96, width: 72 },
      { id: "bidir", label: "Bidirectional", x: 212, y: 158, width: 82 },
      { id: "metrics", label: "Metrics", x: 318, y: 96, width: 72, accent: true },
      { id: "cache", label: "Route cache", x: 407, y: 96, width: 70 },
    ],
    edges: [
      { from: "graph", to: "engine" }, { from: "engine", to: "dijkstra" }, { from: "engine", to: "astar" },
      { from: "engine", to: "bidir" }, { from: "dijkstra", to: "metrics" }, { from: "astar", to: "metrics" },
      { from: "bidir", to: "metrics" }, { from: "metrics", to: "cache" },
    ],
    caption: ["validated graph", "multiple engines", "reproducible evidence"],
  },
  nexus: {
    eyebrow: "Repository facts",
    nodes: [
      { id: "git", label: "Git revisions", x: 12, y: 96, width: 82, accent: true },
      { id: "plan", label: "Change plan", x: 115, y: 96, width: 78, accent: true },
      { id: "parser", label: "AST parser", x: 216, y: 34, width: 78 },
      { id: "contracts", label: "Contracts", x: 216, y: 158, width: 78 },
      { id: "index", label: "Repository index", x: 320, y: 96, width: 88, accent: true },
      { id: "evidence", label: "Evidence", x: 425, y: 96, width: 62 },
    ],
    edges: [
      { from: "git", to: "plan" }, { from: "plan", to: "parser" }, { from: "plan", to: "contracts" },
      { from: "parser", to: "index" }, { from: "contracts", to: "index" }, { from: "index", to: "evidence" },
    ],
    caption: ["incremental changes", "typed facts", "source evidence"],
  },
};

function edgePath(edge: Edge, nodes: Map<string, Node>) {
  const from = nodes.get(edge.from)!;
  const to = nodes.get(edge.to)!;
  const startX = from.x + (from.width ?? 76);
  const startY = from.y + 22;
  const endX = to.x;
  const endY = to.y + 22;
  const middleX = startX + Math.max(14, (endX - startX) / 2);
  return `M ${startX} ${startY} C ${middleX} ${startY}, ${middleX} ${endY}, ${endX} ${endY}`;
}

export default function ArchitecturePreview({ type, large = false }: { type: Project["visual"]; large?: boolean }) {
  const graph = graphs[type];
  const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
  return <div className={`architecture-preview architecture-preview-${type}${large ? " architecture-preview-large" : ""}`}>
    <p>{graph.eyebrow}</p>
    <div className="architecture-canvas">
      <svg viewBox="0 0 484 206" role="img" aria-label={`${graph.eyebrow} architecture diagram`}>
        <defs><marker id={`arrow-${type}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7" fill="none" stroke="currentColor" strokeWidth="1.2" /></marker></defs>
        <g className="architecture-edges" markerEnd={`url(#arrow-${type})`}>{graph.edges.map((edge) => <path key={`${edge.from}-${edge.to}`} d={edgePath(edge, nodes)} />)}</g>
        <g className="architecture-nodes">{graph.nodes.map((node) => <g key={node.id} className={node.accent ? "architecture-svg-node architecture-svg-node-accent" : "architecture-svg-node"}><rect x={node.x} y={node.y} width={node.width ?? 76} height="44" rx="7" /><text x={node.x + (node.width ?? 76) / 2} y={node.y + 26} textAnchor="middle">{node.label}</text></g>)}</g>
      </svg>
    </div>
    <div className="architecture-caption">{graph.caption.map((item) => <span key={item}>{item}</span>)}</div>
  </div>;
}
