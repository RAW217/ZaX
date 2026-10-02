import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import NewsSection from "@/components/NewsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <NewsSection />
      <Contact />
    </main>
  );
}

