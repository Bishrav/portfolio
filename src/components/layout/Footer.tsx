import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() { return <footer className="site-footer"><div className="container footer-inner"><div><strong>Bishrav Shiwakoti</strong><span>Backend &amp; AI Systems Engineer</span><span>Kathmandu, Nepal</span></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a></div><small>© 2026 Bishrav Shiwakoti</small></div></footer>; }
