"use client";
import React from "react";
import Image from "next/image";
import TechStack from "./techstacks";
import SocialMediaButtonsMainCard from "./socialmediabuttonsmaincard";

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

export default function MainCard({ homeRef }: { homeRef: any }) {
  const mainText = "Front-End React Developer";
  const words = mainText.split(" ");
  const lastWord = words[2];
  const cutWords = words.slice(0, -1).join(" ");
  return (
    <div ref={homeRef} className="bg-[#f9f9f9] w-full h-auto pb-28 pt-44 flex">
      <div className="h-4/5 lg:w-[850px] sm:items-center m-auto flex-col flex lg:text-center xl:text-start xl:items-start">
        <div className="h-[350px] flex-col">
          <div className="text-[#2d2e32] xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid  md:grid-cols-1 lg:grid-cols-1 lg:grid  xs:text-center lg:justify-items-center  md:justify-items-center  sm:justify-items-center xs:justify-items-center sm:w-[300px] lg:w-[850px] flex text-maincard py-4 items-center relative">
            <Image
              className="flex rounded-full xl:ml-12 sm:order-1 lg:order-1"
              src="/profile.jpg"
              height="185"
              width="185"
              alt=""
              quality="85"
            />
            <div className="lg:order-3 sm:order-3 md:order-3 lg:text-center lg:items-center md:text-center md:items-center sm:text-center sm:items-center">
              {cutWords}
              <div className="flex flex-row xl:justify-start lg:text-center lg:justify-center md:justify-center  md:items-center sm:justify-center sm:items-center xs:justify-center">
                {lastWord}
                {/* <Image
                  className="ml-4"
                  src="/waving_hand.png"
                  height={70}
                  width={70}
                  quality={100}
                  alt="other"
                  style={{ height: "60px", width: "60px" }}
                /> */}
              </div>
            </div>
          </div>
          <p className="text-xl text-[#555555] flex xl:text-start xl:items-start lg:text-center lg:justify-center md:text-center md:justify-center sm:text-center sm:justify-center xs:text-center xs:justify-center h-auto">
            Hi, I&apos;m Nicholas Joe. A passionate Front-end React <br />{" "}
            Developer based in Vancouver, Canada. 📍
          </p>{" "}
          <span className="flex-row flex mt-6 space-x-4 w-auto items-start xl:justify-start lg:justify-center md:justify-center sm:justify-center">
            {socialMediaButtonArray.map((item, index) => {
              return <SocialMediaButtonsMainCard item={item} key={index} />;
            })}
          </span>
        </div>
        <TechStack />
      </div>
    </div>
  );
}
