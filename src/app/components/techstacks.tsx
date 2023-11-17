"use client";
import React from "react";
import Image from "next/image";

export default function TechkStatck() {
  const techImageLinks = [
    "/Javascript.svg",
    "/typescript.svg",
    "/React.svg",
    "/Tailwind.svg",
  ];
  return (
    <div className="bg-[#f9f9f9] sm:flex-col xs:flex-col lg:flex-col flex xl:flex-row items-center text-black xl:mt-32 lg:mt-44 md:mt-44 sm:mt-44 xs:mt-44">
      <div className="xl:border-r-2 xl:border-b-0 lg:border-b-2 md:border-b-2 sm:border-b-2 xs:border-b-2 xl:mb-0 xl:pr-4 lg:mb-6 md:mb-6 sm:mb-6 xs:mb-8 font-semibold text-lg border-gray-400">
        Tech Stack
      </div>
      <div className="xl:pl-16 lg:pl-8 md:pl-0 flex xs:w-auto xs:max-md:grid xs:max-md:grid-cols-2 xs:gap-8 xs:items-center justify-center">
        {techImageLinks.map((string, index) => {
          return (
            <Image
              className="flex cursor-pointer hover:-mt-6 hover:transition-all ease-in-out duration-1000 delay-100"
              key={index}
              src={string}
              height={50}
              width={110}
              alt="alt"
            />
          );
        })}
      </div>
    </div>
  );
}
