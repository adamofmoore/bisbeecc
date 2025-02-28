import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { FeatureItems } from "./FeatureItems";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
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
                <strong>advanced equipment and eco-friendly techniques</strong>,
                we ensure{" "}
                <strong>clean, accurate, and efficient results</strong> for
                every project.
              </>
            }
            center
            width="700px"
          />
        </div>

        <FeatureItems />

        <div className="mt-16 text-center lg:mt-20">
          <Link
            href="/services"
            className="inline-block rounded-sm bg-primary px-12 py-4 font-semibold text-white hover:bg-primary/80"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
