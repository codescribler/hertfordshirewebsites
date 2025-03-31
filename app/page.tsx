import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import Locations from "@/components/home/Locations";
import Cta from "@/components/home/Cta";

export const metadata: Metadata = {
  title: "Hertfordshire Websites | Professional Web Design & SEO Services",
  description: "Professional web design agency providing high-quality websites for businesses of all sizes in Hertfordshire. SEO-optimized, mobile-friendly websites that generate leads.",
  keywords: "web design, website design, Hertfordshire, SEO, business websites, professional websites, web development, lead generation",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ProcessSection />
      <ServicesSection />
      <Testimonials />
      <FaqSection />
      <Locations />
      <Cta />
    </>
  );
}
