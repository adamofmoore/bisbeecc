import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Concrete Cutting & Coring Services | Bisbee Concrete Coring",
  description:
    "Bisbee Concrete Coring offers precision core drilling and saw cutting for residential, commercial, and industrial projects across Northern California. Using advanced equipment and eco-friendly techniques, we provide clean, accurate, and efficient results for geotechnical investigations, utility installations, and structural modifications. Contact us today!",
};

const ServicesPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        pageName="Our Services"
        description="Precision core drilling and saw cutting for residential, commercial, and industrial projects across Northern California."
      />

      {/* Services Section */}
      <section className="pb-16 pt-10 lg:pb-28 lg:pt-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Core Drilling Section */}
          <div className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Core Drilling
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Core drilling is a specialized technique used to create precise,
                circular holes in{" "}
                <strong>concrete, masonry, and asphalt</strong>. It's essential
                for tasks such as:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Geotechnical & Environmental Investigations:</strong>{" "}
                  Openings for <strong>water & vapor well boxes</strong>,{" "}
                  <strong>CPT & Auger applications</strong>, and{" "}
                  <strong>utility clearing</strong>.
                </li>
                <li>
                  <strong>Utility & HVAC Installations:</strong> Openings in{" "}
                  <strong>
                    walls, floors, ceilings, sewer & storm drain systems
                  </strong>
                  .
                </li>
                <li>
                  <strong>Structural Modifications & Testing:</strong>{" "}
                  Extracting{" "}
                  <strong>concrete cores for strength testing</strong> and{" "}
                  <strong>anchor bolt modifications</strong>.
                </li>
              </ul>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We use <strong>Hilti core drilling equipment</strong> and{" "}
                <strong>eco-friendly slurry collection systems</strong>,
                ensuring <strong>minimal water usage & waste</strong> for a{" "}
                <strong>cleaner, more efficient jobsite</strong>.
              </p>
            </div>
            <div className="relative h-72 w-full md:h-96">
              <img
                src="https://placehold.co/600x400"
                alt="Core drilling operation"
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Saw Cutting Section */}
          <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative h-72 w-full md:h-96">
              <img
                src="https://placehold.co/600x400"
                alt="Saw cutting operation"
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Saw Cutting
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Saw cutting is a technique used to create{" "}
                <strong>straight, precise cuts</strong> for{" "}
                <strong>small to large rectangular openings</strong> in{" "}
                <strong>concrete, masonry, and asphalt</strong>. It is essential
                for:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Geotechnical & Environmental Investigations:</strong>{" "}
                  Openings for <strong>water & vapor well boxes</strong> and{" "}
                  <strong>utility clearing</strong>.
                </li>
                <li>
                  <strong>Utility & HVAC Installations:</strong> Cutting
                  openings in{" "}
                  <strong>walls, floors, ceilings, and trenches</strong>.
                </li>
              </ul>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We use <strong>hand-held and walk-behind concrete saws</strong>,
                accommodating depths up to <strong>12 inches</strong>. All
                sawing is operated with <strong>water</strong>, and slurry is
                efficiently collected using a <strong>vacuum system</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <div className="bg-bg-color-dark">
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
      </div>

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default ServicesPage;
