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
    <div className="flex flex-row xs:flex-col sm:flex-col xs:justify-center sm:justify-center items-center space-y-10 bg-[#2d2e32] justify-around xs:py-14 sm:py-10">
      <h1 className="text-xl text-white font-bold xs:text-center sm:text-center flex">
        Copyright © 2023. All rights are reserved{" "}
      </h1>
      <div>
        <div className="flex-row flex gap-4">
          {socialMediaButtonArray.map((item, index) => {
            return <SocialMediaButtonsFooter item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
