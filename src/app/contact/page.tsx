import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us | Precision Concrete Coring & Saw Cutting in Northern California",
  description:
    "Get in touch with Precision Concrete Coring & Saw Cutting, a licensed, insured, woman-owned, and family-operated contractor serving Northern California. We provide reliable and expert concrete cutting services for residential, commercial, and industrial projects with a focus on safety and precision. Contact us today!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We'd love to hear from you. Fill out the form below to get in touch or give us a call today at (530) 591-2783."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
