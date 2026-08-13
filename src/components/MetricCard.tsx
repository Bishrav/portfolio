export default function MetricCard({ value, label }: { value: string; label: string }) {
  return <div className="metric-card"><strong>{value}</strong><span>{label}</span></div>;
}
