"use client";
import React, { useState } from "react";
import Image from "next/image";

const socialMediaButtonArray = [
  {
    link: "https://www.linkedin.com/in/nicholas-joe/",
    default: "/linkedin_white.png",
    highlighted: "/linkedin_blue.png",
  },
  {
    link: "https://github.com/Njoe00",
    default: "/github_white.png",
    highlighted: "/github_blue.png",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-row items-center  bg-[#2d2e32] -mx-40 justify-around py-12">
      <span className="text-xl text-white font-bold">
        Copyright © 2023. All rights are reserved{" "}
      </span>
      <span>
        <span className="flex-row flex space-x-2">
          {socialMediaButtonArray.map((item, index) => {
            const [toggleOnHover, setToggleOnHover] = useState(false);

            const handleMouseEnter = () => {
              setToggleOnHover(true);
            };

            const handleMouseLeave = () => {
              setToggleOnHover(false);
            };

            return (
              <a href={item.link} key={index} target="_blank">
                <Image
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src={`${toggleOnHover ? item.highlighted : item.default}`}
                  height={30}
                  width={30}
                  quality={100}
                  alt="other"
                />
              </a>
            );
          })}
        </span>
      </span>
    </div>
  );
}
