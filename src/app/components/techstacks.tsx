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
    <div className="bg-[#f9f9f9] sm:flex-col lg:flex-col flex xl:flex-row justify-center items-center text-black pt-24">
      <div className="xl:border-r-2 xl:border-b-0 lg:border-b-2 md:border-b-2 sm:border-b-2 xl:mb-0 xl:pr-4 lg:mb-6 md:mb-6 sm:mb-6 font-semibold text-lg border-gray-400">
        Tech Stack
      </div>
      <div className="lg:pl-8 md:pl-0 flex flex-row space-x-6">
        {techImageLinks.map((string, index) => {
          return (
            <Image
              className="cursor-pointer hover:-mt-6 hover:transition-all ease-in-out duration-1000 delay-100"
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
