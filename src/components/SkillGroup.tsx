export default function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="tag-list">
        {items.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
    </div>
  );
}
