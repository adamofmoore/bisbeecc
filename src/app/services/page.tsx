import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | Bisbee Concrete Coring",
  description:
    "Concrete Coring and Saw Cutting services for residential, commercial, and industrial projects across Northern California.",
};

const ServicesPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        pageName="Our Services"
        description="Concrete Coring and Saw Cutting services for residential, commercial, and industrial projects across Northern California."
      />

      {/* Services Section */}
      <section
        className="pt-10 lg:pt-16"
        // className="pb-16 pt-10 lg:pb-28 lg:pt-16"
        // style={{ backgroundColor: "#001123" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Core Drilling Section */}
          <div className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Core Drilling
              </h2>
              <p className="mb-8 text-lg">
                Core drilling is a specialized technique used to create precise,
                circular holes in hard materials like concrete, masonry, and
                asphalt. It&apos;s essential for tasks such as:
              </p>
              <h4 className="mb-4 text-lg text-white">
                Geotechnical and Environmental Investigations:
              </h4>
              <ul className="mb-8 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  Create openings for water and vaper well box installation.
                </li>
                <li>
                  Provide access for CPT, Direct Push, Auger, Rotary, and Sonic
                  applications.
                </li>
                <li>Provide access for utility clearing.</li>
              </ul>
              <h4 className="mb-4 text-lg text-white">
                Utility and HVAC Ducting Installations:
              </h4>
              <ul className="mb-8 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  Create openings in concrete walls, floors and ceilings of
                  various depths and sizes.
                </li>
                <li>
                  Create openings in precast vaults, sewer and storm drain
                  systems.
                </li>
              </ul>
              <h4 className="mb-4 text-lg text-white">
                Structural modifications and testing:
              </h4>
              <ul className="mb-8 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  Extract concrete cores for compressive strength testing.
                </li>
                <li>Extract anchor bolts for modifications and repairs.</li>
                <li>
                  Create openings for structural and cosmetic improvements.
                </li>
              </ul>
              <h3 className="mb-4 text-2xl text-white">Equipment</h3>
              <p className="mb-4 text-lg">
                We use Hilti core drilling equipment and eco- friendly slurry
                collection systems, ensuring minimal water usage and waste for a
                cleaner, more efficient jobsite.
              </p>
              <p className="mb-4 text-lg">
                We are equipped for core drilling projects of all sizes.
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="/images/services/core-drill-1.jpg"
                alt="Saw cutting operation"
                width={600}
                height={400}
                className="mb-2 rounded-lg shadow-lg"
              />
              <Image
                src="/images/services/core-drill-2.jpg"
                alt="Saw cutting operation"
                width={600}
                height={400}
                className="mb-2 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Saw Cutting Section */}
          <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="w-full">
              <Image
                src="/images/services/saw-1.jpg"
                alt="Saw cutting operation"
                width={600}
                height={400}
                className="mb-2 rounded-lg shadow-lg"
              />
              <Image
                src="/images/services/saw-2.jpg"
                alt="Saw cutting operation"
                width={600}
                height={400}
                className="mb-2 rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Saw Cutting
              </h2>
              <p className="mb-8 text-lg">
                Saw Cutting is a specialized technique used to create straight
                precise cuts for small to large rectangular openings in hard
                materials like concrete, masonry, and asphalt. It&apos;s
                essential for:
              </p>
              <h4 className="mb-4 text-lg text-white">Flat saw cutting</h4>
              <ul className="mb-8 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  Trenching for underground utility instalment and inspections.
                </li>
                <li>
                  Rectangular unpenning for drilling and underground
                  applications.
                </li>
                <li>Flat work demolition and repairs.</li>
              </ul>
              <h4 className="mb-4 text-lg text-white">Wall saw cutting</h4>
              <ul className="mb-8 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  Create rectangular openings to install doors, windows, HVAC
                  ducting and utilities.
                </li>
                <li>Structural and cosmetic modifications.</li>
              </ul>
              <h3 className="mb-4 text-2xl text-white">Equipment</h3>
              <p className="mb-4 text-lg">
                We use hand-held and walk behind concrete saws, accommodating
                depths up to 12 inches. All sawing is operated with slurry
                management systems.
              </p>
              <p className="mb-4 text-lg">
                We are equipped for small to medium size saw cutting projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      {/* <div className="bg-bg-color-dark">
        <div className="container py-32 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Advanced Equipment for Every Project
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            We are equipped for{" "}
            <strong>core drilling and saw cutting projects of all sizes</strong>
            . Our use of <strong>advanced Hilti drilling equipment</strong> and{" "}
            <strong>vacuum slurry collection systems</strong> ensures{" "}
            <strong>clean, precise, and eco-friendly&nbsp;operations</strong>.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default ServicesPage;
