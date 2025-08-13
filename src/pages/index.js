import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans scroll-smooth">

      <Header />
      <main className="space-y-32">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
