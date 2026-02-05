import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TravelSection from "@/components/TravelSection";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <TravelSection />
      <ServicesSection />
      <Team />
      <FAQ />
      <CTA />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
