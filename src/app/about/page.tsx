import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Our goal is to continue building professional relationships and expanding our services to better support your projects within the industry. "
      />
      <div className="container">
        <p className="mb-8 text-3xl text-white" style={{ height: 600 }}>
          TODO: Add about us info, Our team, and licensing
        </p>
      </div>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Contact />
    </>
  );
};

export default AboutPage;
