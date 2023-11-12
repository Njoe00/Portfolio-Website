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
    <div
      ref={homeRef}
      className=" bg-[#f9f9f9] w-full pb-28 pt-44 items-center flex"
    >
      <div className="h-4/5 lg:w-[850px] sm:w-3/4 sm:text-center m-auto flex-col flex justify-center items-start lg:text-start">
        <div className="h-[350px]">
          <p className="text-[#2d2e32] flex-row lg:w-[850px] flex text-start text-maincard py-4 items-center relative">
            <div className="">
              <div>{cutWords}</div>
              <div className="flex flex-row">
                {lastWord}
                <Image
                  className="ml-4"
                  src="/waving_hand.png"
                  height={60}
                  width={60}
                  quality={100}
                  alt="other"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
            </div>
            <div className=""></div>
            <Image
              className="flex rounded-full items-center ml-12"
              src="/profile.jpg"
              height="185"
              width="185"
              alt=""
              quality="85"
            />
          </p>
          <div className="text-xl text-[#555555] flex text-start items-start">
            Hi, I&apos;m Nicholas Joe. A passionate Front-end React <br />{" "}
            Developer based in Vancouver, Canada. 📍
          </div>{" "}
          <span className="flex-row flex mt-6 space-x-4 w-auto">
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
