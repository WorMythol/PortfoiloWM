import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
