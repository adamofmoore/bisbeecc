import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
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
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
