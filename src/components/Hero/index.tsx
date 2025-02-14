"use client";

import { media } from "@/mixins/media";
import styled from "styled-components";
import { Background } from "./background";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Hero = () => {
  const List = ({ text }) => (
    <p className="flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-50">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <Wrapper
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundColor: "pink" }}
      >
        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Precision Concrete Coring & Saw Cutting in Northern California
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Reliable, efficient, and expert concrete cutting services for
                  residential, commercial, and industrial projects.
                </p>
                <Checks>
                  <List text="Woman-Owned & Family-Operated" />
                  <List text="Serving Northern California with Safety & Precision" />
                  <List text="Certified & Insured Licensed C61/D06 Contractor" />
                </Checks>
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>

                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Background /> */}
      </Wrapper>
    </>
  );
};

export default Hero;

const Wrapper = styled.section`
  background: url("images/hero/concrete-hero-bg.jpg") center center no-repeat;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background: rgba(0, 0, 0, 0.8); */
    background: rgba(13, 16, 24, 0.9);
  }
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet`
    /* flex-direction: row; */
  `}
`;

const CheckItem = styled.div.attrs({
  className: "text-lg",
})`
  flex: 1;
`;
