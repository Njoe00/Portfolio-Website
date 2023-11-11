"use client";
import React from "react";
import PortfolioCardLeft from "./portfoliocardleft";

const portfolioInfo = [
  {
    title: "Bellroy",
    date: "(August 2023)",
    icon: "/wallet.png",
    image: "/bellroy_website.png",
    description:
      "A copy version of a website that I've bought wallets from for many years.Users are able to interact with all the same features of the page as if it were the actual website.",
    stack: { react: "React", tailwind: "Tailwind" },
  },
  {
    title: "Soundly",
    date: "(September 2023)",
    icon: "/album.png",
    image: "/soundly_website.png",
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
    website_link:
      "https://youtube-play-list-to-spotify-converter-657xuiovk-njoe00.vercel.app/",
  },
];

export default function PortfolioCard() {
  return (
    <div>
      {portfolioInfo.map((item, index) => {
        return (
          <div key={index}>
            <PortfolioCardLeft item={item} links={links} index={index} />;
          </div>
        );
      })}
    </div>
  );
}
