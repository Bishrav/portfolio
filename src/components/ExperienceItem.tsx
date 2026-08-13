type Experience = { company: string; role: string; period: string; details: string };

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="experience-item">
      <div><p className="eyebrow">{item.period}</p><h3>{item.company}</h3><p className="experience-role">{item.role}</p></div>
      <p>{item.details}</p>
    </article>
  );
}
