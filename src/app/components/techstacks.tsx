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
    <div className="bg-[#f9f9f9] flex flex-row justify-center items-center text-black pt-36 pb-24 space-x-6">
      <div className="border-r-2 pr-4 font-semibold border-gray-400">
        Tech Stack
      </div>
      <div className="pl-8 space-x-8 flex flex-row">
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
