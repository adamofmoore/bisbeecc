import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Northern California Concrete Coring and Saw Cutting Specialists | Bisbee Concrete Coring",
  description:
    "Bisbee Concrete Coring provides expert concrete coring and saw cutting services across Northern California. As a woman-owned, family-operated business, we prioritize safety, precision, and efficiency for residential, commercial, and industrial projects. Contact us for reliable and professional concrete cutting solutions!",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Separator /> */}
      <Features />
      {/* <Separator /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <Separator /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <ContactCTA /> */}
    </>
  );
}
