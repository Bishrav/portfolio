import { Activity, BrainCircuit, Server, ShieldCheck } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const icons = [Server, BrainCircuit, Activity, ShieldCheck];
export default function Capabilities() { return <section className="section section-soft"><div className="container"><SectionHeading eyebrow="Working areas" title="I like the hard middle layer." description="The part between a product idea and a dependable system: boundaries, data, failure modes, and the operating model." /><div className="capability-grid">{capabilities.map((item, index) => { const Icon = icons[index]; return <article className="capability-item" key={item.title}><Icon size={21} strokeWidth={1.5} /><span className="capability-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div></div></section>; }
