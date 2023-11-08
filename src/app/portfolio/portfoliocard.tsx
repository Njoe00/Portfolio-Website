"use client";
import React from "react";
import Image from "next/image";
import DemoButtons from "./demobuttons";

const portfolioInfo = [
  {
    title: "Bellroy",
    date: "(August 2023)",
    icon: "/wallet.png",
    image: "/Bellory.png",
    description:
      "A copy version of a website that I've bought wallets from for many years.Users are able to interact with all the same features of the page as if it were the actual website.",
    stack: { react: "React", tailwind: "Tailwind" },
  },
  {
    title: "Soundly",
    date: "(September 2023)",
    icon: "/album.png",
    image: "/youtube_spotify.png",
    description:
      "A website that allows user to take their Youtube Music playlists and convert them to Spotify playlists.",
    stack: { react: "React", tailwind: "Tailwind" },
  },
];

const links = [
  {
    git_link: "https://github.com/Njoe00/Bellroy-Site-Copy",
    website_link: "https://bellroy-site-copy.vercel.app/",
  },
  {
    git_link: "https://github.com/Njoe00/Youtube-PlayList-To-Spotify-Converter",
    website_link: "https://Youtube-PlayList-To-Spotify-Converter.vercel.app/",
  },
];

export default function PortfolioCard() {
  return (
    <div>
      {portfolioInfo.map((item, index) => {
        return (
          <div key={index} className="my-16 bg-white rounded-lg shadow-md p-4">
            <div className="flex h-[360px] w-[950px] justify-center flex-row items-center text-center ">
              <div className="w-[530px] h-[340px] rounded-lg shadow-md">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  height="340"
                  width="530"
                  alt=""
                  style={{ height: 340 }}
                />
              </div>
              <div className="flex-col flex flex-end w-[300px] h-[360px] text-center justify-center items-center ml-20 mr-14">
                <div className="flex flex-row items-center space-x-1 text-center">
                  <div className="text-black font-bold text-lg">
                    {item.title}
                  </div>
                  <div className="text-gray-900 font-bold text-sm">
                    {item.date}
                  </div>
                  <Image src={item.icon} height="20" width="20" alt="" />
                </div>
                <p className="text-gray-400 text-base font-semibold mt-4">
                  {item.description}
                </p>
                <span className="flex flex-row mt-6 items-center text-center">
                  <div className="text-black font-semibold text-lg ring-2 ring-offset-8 mr-6 ring-white shadow-lg shadow-gray-300 ">
                    {item.stack.react}
                  </div>
                  <div className="text-black font-semibold text-lg ring-2 ring-offset-8 mr-6 ring-white shadow-lg shadow-gray-300 ">
                    {item.stack.tailwind}
                  </div>
                </span>
                <DemoButtons links={links} index={index} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
