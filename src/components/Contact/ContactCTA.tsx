"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Phone } from "../Hero";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-color-dark overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Get in Touch"
          paragraph="We look forward to taking on new clientele and creating
                long-lasting professional relationships."
          center
          mb="0"
        />
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:info@bisbeecc.com"
            className="rounded-sm bg-primary px-16 py-4 text-white hover:bg-primary/80 sm:px-12"
          >
            Contact Us
          </Link>
          or
          <Phone className="dark:text-body-color-light text-body-white text-lg">
            <Link href="tel:+15306912783">Call (530) 591-2783</Link>
          </Phone>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
