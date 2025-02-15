import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Column: Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Mission"
                paragraph={
                  <>
                    Bisbee Concrete Coring was founded to provide expert site
                    preparation services for the{" "}
                    <strong>
                      geotechnical, environmental, drilling, and civil
                      industries
                    </strong>
                    . With extensive experience in
                    <strong>
                      site investigation, civil, and residential construction
                    </strong>
                    , we have built a company designed to meet the specific
                    needs of our clients.
                    <br />
                    <br />
                    As part of our commitment to innovation and safety, we are
                    actively working on expanding our services to include:
                  </>
                }
                mb="44px"
              >
                {" "}
                <Link
                  href="/services"
                  className="mt-12 inline-block rounded-sm bg-primary px-8 py-4 font-semibold text-white hover:bg-primary/80"
                >
                  Learn More About Us
                </Link>
              </SectionTitle>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="GPR Concrete Scanning" />
                    <List text="GPR Utility Locating" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="EM Utility Locating" />
                    <List text="GPS Site Mapping" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="flex w-full justify-center px-4 lg:w-1/2">
              <img
                src="https://placehold.co/600x500"
                alt="Placeholder Image"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
