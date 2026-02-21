import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ServingSince from "@/components/ServingSince";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import BlogCarousel from "@/components/BlogCarousel";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <ServingSince />
        <Services />
        <Stats />
        <WhyChooseUs />
        <About />
        <BlogCarousel />
        <Specialties />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
