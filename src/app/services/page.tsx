import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Expert Concrete Cutting & Coring Services | Bisbee Concrete Coring",
  description:
    "Bisbee Concrete Coring offers precision core drilling and saw cutting for residential, commercial, and industrial projects across Northern California. Using advanced equipment and eco-friendly techniques, we provide clean, accurate, and efficient results for geotechnical investigations, utility installations, and structural modifications. Contact us today!",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Precision core drilling and saw cutting for residential, commercial, and industrial projects across Northern California."
      />
      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src="/images/blog/blog-details-02.jpg"
                      alt="image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper
                  <strong className="text-primary dark:text-white">
                    malesuada
                  </strong>
                  proin libero nunc consequat interdum varius. Quam pellentesque
                  nec nam aliquam sem et tortor consequat. Pellentesque
                  adipiscing commodo elit at imperdiet.
                </p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Semper auctor neque vitae tempus quam pellentesque nec.
                  <span className="text-primary underline dark:text-white">
                    Amet dictum sit amet justo
                  </span>
                  donec enim diam. Varius sit amet mattis vulputate enim nulla
                  aliquet porttitor. Odio pellentesque diam volutpat commodo
                  sed.
                </p>
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Stuff here{" "}
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Consectetur adipiscing elit in voluptate velit.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Mattis vulputate cupidatat.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Vulputate enim nulla aliquet porttitor odio pellentesque
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ligula ullamcorper malesuada proin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary">
        <Contact />
      </div>
    </>
  );
};

export default ServicesPage;
