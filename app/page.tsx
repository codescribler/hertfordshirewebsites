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
  title: "Web Design Hertfordshire | Professional Websites That Grow Your Business",
  description: "Professional web design in Hertfordshire. We build stunning, high-performance websites for local businesses that attract customers and drive growth. From Watford to St Albans, we help Hertfordshire businesses succeed online. Free consultation!",
  keywords: "web design hertfordshire, hertfordshire web design, web design agency hertfordshire, website design hertfordshire, professional web design, web developer hertfordshire, website builder hertfordshire, business website hertfordshire, affordable web design hertfordshire",
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
