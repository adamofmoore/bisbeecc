import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Bisbee Concrete Coring",
  description:
    "Bisbee Concrete Coring was founded to provide expert site preparation services to the geotechnical, environmental, drilling, and civil industries. With years of experience in site investigation, civil, and residential construction, we built a company that prioritizes the needs of our clients.",
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
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Looking to the Future
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We are working to expand our services to include:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>GPR Concrete Scanning</li>
                <li>GPR Utility Locating</li>
                <li>EM Utility Locating</li>
                <li>GPS Site Mapping</li>
              </ul>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                With this expansion we are in alliance with the National Utility
                Locating Contractors Association (NULCA) for the pursuit of
                standardizing safe practices in utility locating. Our
                technicians are currently NULCA certified. NULCA&apos;s Locator
                Training Standards and Practices are recognized by the Common
                Ground Alliance (CGA). In addition, we are working closely with
                the Small Business Administration (SBA) to become a certified
                Women-Owned Small Business (WOSB).
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our top priority is to continue growing our involvement with
                safe practices and providing quality work within California
                industries.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We look forward to taking on new clientele and creating
                long-lasting professional relationships.
              </p>
            </div>
            <Image
              src="/images/about/tower-bridge.jpg"
              alt="Tower Bridge in Sacramento, CA"
              className="w-full max-w-lg rounded-lg shadow-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-900 py-16">
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
                  <Link href="mailto:jbisbee@bisbeecc.com" className="text-lg">
                    jbisbee@bisbeecc.com
                  </Link>
                </div>
              </div>
              <p className="mb-4 mt-4">
                Mr. Bisbee is the founder of Bisbee Concrete Coring. He is the
                project manager handling the completion of core drilling and saw
                cutting operations. He has dedicated 18 years to this industry.
                Mr. Bisbee has worked and managed civil projects within the Bay
                Area petrochemical industry, he has assisted in the rebuilding
                of residential homes after the 2015 Napa County fires and
                established a professional career in the drilling industry on
                geotechnical and environmental site investigations. Among other
                things, Mr. Bisbee is certified by the National Utility Locating
                Contractors Association (NULCA) for the pursuit of standardizing
                safe practices in utility locating.
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
                  <Link href="mailto:lburke@bisbeecc.com" className="text-lg">
                    lburke@bisbeecc.com
                  </Link>
                </div>
              </div>
              <p className="mb-4 mt-4">
                Ms. Burke is president and owner of Bisbee Concrete Coring. She
                founded this corporation in collaboration with John Bisbee. Her
                duties are to oversee daily operations and assist in the
                structure and growth of the company. She graduated with honors
                from California State University, Chico with a Batchelor&apos;s
                in science. As an entrepreneur and first-time business owner she
                is working closely with the Small Business Administration (SBA)
                to become a certified Women-Owned Small Business (WOSB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-dark px-12 py-16">
        <div
          className="container mx-auto text-center"
          style={{ maxWidth: 800 }}
        >
          <h2 className="text-2xl lg:text-4xl">License and Insurance</h2>
          <p className="mb-4 mt-8 text-lg">
            Bisbee Concrete Coring maintains a valid C61/D06 Contractors license
            in the state of California.
          </p>
          <p className="text-lg">
            J.B. Concrete Coring dba Bisbee Concrete Coring C61/D06 license
            number <u>1129308</u>. Our insurance policies come with general
            liability and commercial auto liability.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
