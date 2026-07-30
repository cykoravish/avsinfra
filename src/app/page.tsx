import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Belief from "@/components/home/Belief";
import About from "@/components/home/About";
import Leadership from "@/components/home/Leadership";
import Values from "@/components/home/Values";
import Vision from "@/components/home/Vision";
import Projects from "@/components/home/Projects";
import Sustainability from "@/components/home/Sustainability";
import CtaFooter from "@/components/home/CtaFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Belief />
        <About />
        <Leadership />
        <Values />
        <Vision />
        <Projects />
        <Sustainability />
      </main>
      <CtaFooter />
    </>
  );
}
