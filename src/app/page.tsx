import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Concrete Cutting & Coring in Northern California",
  description:
    "Bisbee Concrete Coring provides expert concrete coring and saw cutting services across Northern California. As a woman-owned, family-operated business, we prioritize safety, precision, and efficiency for residential, commercial, and industrial projects. Contact us for reliable and professional concrete cutting solutions!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <hr style={{ borderColor: "#788293" }} />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <hr style={{ borderColor: "#788293" }} />

      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
    </>
  );
}
