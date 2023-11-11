"use client";
import React from "react";
import SocialMediaButtonsFooter from "./socialmediabuttonsfooter";

const socialMediaButtonArray = [
  {
    link: "https://www.linkedin.com/in/nicholas-joe/",
    default: "/linkedin_white.png",
  },
  {
    link: "https://github.com/Njoe00",
    default: "/github_white.png",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-row items-center bg-[#2d2e32] justify-around py-12">
      <span className="text-xl text-white font-bold">
        Copyright © 2023. All rights are reserved{" "}
      </span>
      <span>
        <span className="flex-row flex space-x-4">
          {socialMediaButtonArray.map((item, index) => {
            return <SocialMediaButtonsFooter item={item} key={index} />;
          })}
        </span>
      </span>
    </div>
  );
}
