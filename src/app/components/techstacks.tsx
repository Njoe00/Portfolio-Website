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
    <div className="bg-[#f9f9f9] flex-col flex xl:flex-row items-center text-black xl:mt-32 mt-24">
      <div className="xl:border-r-2 xl:border-b-0 border-b-2 xl:mb-0 xl:pr-4 mb-8 font-semibold text-lg border-gray-400">
        Tech Stack
      </div>
      <div className="xl:pl-16 md:pl-0 flex xs:w-auto xs:max-md:grid xs:max-md:grid-cols-2 xs:gap-8 xs:max-md:items-center justify-center">
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
