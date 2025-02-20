import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Bisbee Concrete Coring – Precision Site Preparation & Utility Locating",
  description:
    "Bisbee Concrete Coring provides expert site preparation services for the geotechnical, environmental, drilling, and civil industries. We are expanding to include GPR concrete scanning, utility locating, and GPS site mapping, with NULCA-certified technicians ensuring safety and precision. A future certified Women-Owned Small Business (WOSB), we prioritize quality, safety, and professional relationships across California.",
};

const AboutPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        pageName="About Us"
        description="Bisbee Concrete Coring was founded to provide expert site preparation services to the geotechnical, environmental, drilling, and civil industries. With years of experience in site investigation, civil, and residential construction, we built a company that prioritizes the needs of our clients."
      />

      {/* About Us Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With years of experience in{" "}
                <strong>
                  site investigation, civil, and residential construction
                </strong>
                , our goal is to{" "}
                <strong>build strong professional relationships</strong> while
                expanding services to better suit industry needs.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We are working to expand our offerings, including:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>GPR Concrete Scanning</li>
                <li>GPR Utility Locating</li>
                <li>EM Utility Locating</li>
                <li>GPS Site Mapping</li>
              </ul>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our team is <strong>NULCA-certified</strong>, aligning with
                industry standards to ensure the highest level of safety and
                precision in utility locating.
              </p>
            </div>
            <div className="relative h-72 w-full md:h-96">
              <img
                src="https://placehold.co/600x400"
                alt="Concrete cutting project"
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* John Bisbee */}
            <div className="rounded-lg bg-gray-100 p-6 text-left shadow-lg  dark:bg-gray-700">
              <div className="flex items-center space-x-6">
                <img
                  src="https://placehold.co/150x150"
                  alt="John Bisbee"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    John Bisbee
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Founder & Project Manager
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                With <strong>18 years of industry experience</strong>, John has
                worked on major civil projects, post-disaster residential
                rebuilding, and geotechnical site investigations. He is{" "}
                <strong>NULCA-certified</strong>, ensuring safe and precise
                utility locating.
              </p>
            </div>

            {/* Leta Burke */}
            <div className="rounded-lg bg-gray-100 p-6 text-left shadow-lg dark:bg-gray-700">
              <div className="flex items-center space-x-6 ">
                <img
                  src="https://placehold.co/150x150"
                  alt="Leta Burke"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Leta Burke
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    President & Owner
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Leta oversees <strong>daily operations</strong> and strategic
                company growth. A graduate of{" "}
                <strong>California State University, Chico</strong>, she is
                working with the <strong>SBA</strong> to achieve{" "}
                <strong>WOSB certification</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default AboutPage;
