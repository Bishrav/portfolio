const stages = ["Sources", "Ingestion", "Event processing", "ML / correlation", "Evidence + APIs", "Operations UI"];

export default function ArchitectureDiagram() {
  return (
    <div className="architecture-diagram" aria-label="Typical event-driven architecture flow">
      {stages.map((stage, index) => (
        <div className="architecture-stage" key={stage}>
          <span>{stage}</span>
          {index < stages.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}
