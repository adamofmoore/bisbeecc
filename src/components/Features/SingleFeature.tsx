import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, children } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {icon && (
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
        )}
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base text-lg font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        {children}
      </div>
    </div>
  );
};

export default SingleFeature;
