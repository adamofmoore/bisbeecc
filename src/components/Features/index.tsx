import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column - Section Title */}
          <div className="w-full">
            <SectionTitle
              title="Expert Concrete Cutting & Coring Services"
              paragraph={
                <>
                  Bisbee Concrete Coring provides{" "}
                  <strong>precision coring and saw cutting</strong> for{" "}
                  <strong>
                    residential, commercial, and industrial projects
                  </strong>{" "}
                  across Northern California. Using{" "}
                  <strong>
                    advanced equipment and eco-friendly techniques
                  </strong>
                  , we ensure{" "}
                  <strong>clean, accurate, and efficient results</strong> for
                  every project.
                </>
              }
            >
              <Link
                href="/services"
                className="mt-12 inline-block rounded-sm bg-primary px-8 py-4 font-semibold text-white hover:bg-primary/80"
              >
                Learn More About Services
              </Link>
            </SectionTitle>
          </div>

          {/* Right Column - Features List */}
          <div className="w-full space-y-12">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
