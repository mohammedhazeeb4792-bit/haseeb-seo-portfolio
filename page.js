import Header from "../components/Header";
import Hero from "../components/Hero";
import { Section } from "../components/Section";
import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About"><About /></Section>
        <Section id="work" title="Case study: TheController.ai"><CaseStudies /></Section>
        <Section id="experience" title="Experience"><Experience /></Section>
        <Section id="skills" title="Skills"><Skills /></Section>
        <Section id="education" title="Education"><Education /></Section>
        <Section id="contact" title="Contact"><Contact /></Section>
      </main>
      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Mohammed Hazeeb
      </footer>
    </>
  );
}
