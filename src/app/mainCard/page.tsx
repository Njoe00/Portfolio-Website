"use client";
import React, { useState } from "react";
import Image from "next/image";
import TechStack from "./techstack";

const socialMediaButtonArray = [
  {
    link: "https://www.linkedin.com/in/nicholas-joe/",
    default: "/linkedin.png",
    highlighted: "/linkedin_blue.png",
  },
  {
    link: "https://github.com/Njoe00",
    default: "/github.png",
    highlighted: "/github_blue.png",
  },
];

export default function MainCard() {
  return (
    <div className="h-4/5 w-[700px] m-auto flex-col flex justify-center items-start text-start mt-24">
      <div className="text-black flex text-start text-6xl font-bold py-4 relative">
        Front-End React <br /> Developer
        <div className="mt-14 left-80 absolute flex ">
          <Image
            src="/waving_hand.png"
            height={60}
            width={60}
            quality={100}
            alt="other"
            style={{ height: "60px", width: "60px" }}
          />
        </div>
      </div>
      <div className="text-base text-black flex text-start items-start">
        Hi, I'm Nicholas Joe. A passionate Front-end React <br /> Developer
        based in Vancouver, Canada. 📍
      </div>
      <span className="flex-row flex mt-6 space-x-2 w-auto">
        {socialMediaButtonArray.map((item, index) => {
          const [toggleOnHover, setToggleOnHover] = useState(false);

          const handleMouseEnter = () => {
            setToggleOnHover(true);
          };

          const handleMouseLeave = () => {
            setToggleOnHover(false);
          };

          return (
            <a href={item.link} key={index}>
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
      <TechStack />
    </div>
  );
}
