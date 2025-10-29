import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
