import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
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
      <ServicesSection />
      <Testimonials />
      <Locations />
      <Cta />
    </>
  );
}
