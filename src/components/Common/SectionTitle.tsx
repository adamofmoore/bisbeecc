const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  children,
}: {
  title: string;
  paragraph: string | React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base text-xl !leading-relaxed text-body-color">
          {paragraph}
        </p>
        {children}
      </div>
    </>
  );
};

export default SectionTitle;
