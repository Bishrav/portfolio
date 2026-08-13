import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll, { passive: true }); onScroll(); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = ["projects", "experience", "skills", "about"];
  return <nav className={`site-nav${scrolled ? " site-nav-scrolled" : ""}`} aria-label="Primary navigation"><div className="container nav-inner"><a className="wordmark" href="#top" aria-label="Bishrav Shiwakoti home">B<span>.</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-links" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20} /> : <Menu size={20} />}</button><div id="primary-links" className={`nav-links${open ? " nav-links-open" : ""}`}>{links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link[0].toUpperCase() + link.slice(1)}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={14} /></a></div></div></nav>;
}
