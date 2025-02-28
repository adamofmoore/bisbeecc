"use client";

import Link from "next/link";
import { checkIcon } from "../Hero";
import Image from "next/image";
import styled from "styled-components";

const List = ({ text }) => (
  <p className="mt-3 flex items-center text-lg font-medium text-white">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

export const FeatureItems = () => {
  return (
    <div
      className="m-auto grid grid-cols-1 gap-12 md:grid-cols-2"
      style={{ maxWidth: 1200 }}
    >
      <div className="w-full">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          <Image
            src="/images/home-services-core-drilling.jpg"
            alt="Core Drilling"
            className="mb-8 w-full max-w-lg rounded-lg shadow-lg"
            width={700}
            height={350}
          />
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-2xl xl:text-3xl">
            Core Drilling
          </h3>
          <p className="pr-[10px] text-base text-lg font-medium leading-relaxed text-body-color">
            Applications include:
          </p>
          <div className="mt-5">
            <List text="Geotechnical and Environmental Site Investigations" />
            <List text="Utility and HVAC Ducting Installment" />
            <List text="Structural Testing and Modifications" />
          </div>
          {/* <Link
            href="/services"
            className="mt-12 inline-block rounded-sm bg-primary px-8 py-4 font-semibold text-white hover:bg-primary/80"
          >
            View Core Drilling
          </Link> */}
        </div>
      </div>

      <div className="w-full">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          <Image
            src="/images/home-services-saw-cutting.jpg"
            alt="Saw Cutting"
            className="mb-8 w-full max-w-lg rounded-lg shadow-lg"
            width={700}
            height={350}
          />
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-2xl xl:text-3xl">
            Saw Cutting
          </h3>
          <p className="pr-[10px] text-base text-lg font-medium leading-relaxed text-body-color">
            Generally used for:
          </p>
          <div className="mt-5">
            <List text="Flat Sawing for Trenches and Rectangular Openings" />
            <List text="Wall Sawing for Structural and Cosmetic Modifications" />
            <List text="Utility Installment and Repairs" />
          </div>
          {/* <Link
            href="/services"
            className="mt-12 inline-block rounded-sm bg-primary px-8 py-4 font-semibold text-white hover:bg-primary/80"
          >
            View Saw Cutting
          </Link> */}
        </div>
      </div>
    </div>
  );
};
