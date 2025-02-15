import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We'd love to hear from you. Fill out the form below to get in touch or give us a call today at (530) 591-2783. We're ready to start your project!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
