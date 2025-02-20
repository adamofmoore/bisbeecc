"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Hero = () => {
  const List = ({ text }) => (
    <p className="flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <Wrapper
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Precision Concrete Coring & Saw Cutting in Northern California
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Reliable, efficient, and expert concrete cutting services for
              residential, commercial, and industrial projects.
            </p>
            <Checks>
              <List text="Woman-Owned & Family-Operated" />
              <List text="Serving Northern California with Safety & Precision" />
              <List text="Certified & Insured Licensed C61/D06 Contractor" />
            </Checks>
            <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-primary px-8 py-4 font-semibold text-white hover:bg-primary/80"
              >
                Contact Us
              </Link>
              <p className="dark:text-body-color-light text-body-white text-lg">
                or Call (530) 591-2783
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex w-full justify-center md:w-1/2">
            <Image
              src="/images/hero/concrete-hero-bg.jpg"
              alt="Concrete Cutting"
              className="w-full max-w-lg rounded-lg shadow-lg"
              width={512}
              height={300}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  /* background: url("/images/hero/concrete-hero-bg.jpg") center center no-repeat; */
  background: #001123 url("/images/concrete-bg@2x.jpg") center center;

  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background: rgba(13, 16, 24, 0.9); */
    background: rgba(13, 16, 24, 0.5);
  }
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
