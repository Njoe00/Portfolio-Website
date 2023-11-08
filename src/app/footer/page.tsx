"use client";
import React from "react";
import SocialMediaBtns from "./socialmediabtns";

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
            return <SocialMediaBtns item={item} index={index} />;
          })}
        </span>
      </span>
    </div>
  );
}
