import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Capabilities from "@/components/sections/Capabilities";
import Experience from "@/components/sections/Experience";
import EngineeringEvidence from "@/components/sections/EngineeringEvidence";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function App() {
  return <main id="top"><Navbar /><Hero /><FeaturedProjects /><Capabilities /><Experience /><EngineeringEvidence /><Skills /><About /><Contact /><Footer /></main>;
}
