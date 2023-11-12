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
  return (
    <div
      ref={homeRef}
      className=" bg-[#f9f9f9] w-full pb-28 pt-44 items-center flex border-2"
    >
      <div className="h-4/5 w-[850px] m-auto flex-col flex justify-center items-start text-start">
        <div className="h-[350px]">
          <div className="text-[#2d2e32] flex-row flex text-start text-maincard py-4 items-center relative ">
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
            <Image
              className="flex rounded-full items-center ml-12"
              src="/profile.jpg"
              height="185"
              width="185"
              alt=""
              quality="85"
            />
          </div>
          <div className="text-xl text-[#555555] flex text-start items-start">
            Hi, I&apos;m Nicholas Joe. A passionate Front-end React <br />{" "}
            Developer based in Vancouver, Canada. 📍
          </div>{" "}
          <span className="flex-row flex mt-6 space-x-2 w-auto">
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
