"use client";

import Link from "next/link";
import styled from "styled-components";

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
      className="pb-16 pt-[140px] md:pb-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <div className="container">
        <ContentContainer>
          <h1 className="mb-5 text-2xl font-bold text-white sm:text-4xl md:text-5xl">
            Northern California Concrete Coring and Saw Cutting Specialists
          </h1>
          <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
            Reliable, efficient, and expert concrete cutting services for
            residential, commercial, and industrial projects.
          </p>
          <Checks>
            <List text="Woman-Owned & Family-Operated" />
            <List text="Focus on Safety, Quality, and Precision" />
            <List text="Certified Technicians with Years of Experience" />
          </Checks>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="mailto:info@bisbeecc.com"
              className="rounded-sm bg-primary px-16 py-4 font-semibold text-white hover:bg-primary/80"
            >
              Contact Us
            </Link>
            <p className="dark:text-body-color-light text-body-white text-lg">
              or <strong>Call (530) 591-2783</strong>
            </p>
          </div>
        </ContentContainer>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  position: relative;
  background: #001123 url("/images/hero/concrete-hero-bg.jpg") center center
    no-repeat;
  /* background: #001123 url("/images/concrete-bg@2x.jpg") center center; */

  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(13, 16, 24, 0.95);
    /* background: rgba(13, 16, 24, 0.5); */
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-center: center; */
  max-width: 800px;
  margin: auto;
  /* text-align: center; */

  h1 {
    line-height: 1.2;
  }
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
