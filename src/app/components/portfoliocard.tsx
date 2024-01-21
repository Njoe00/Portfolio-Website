"use client";
import React from "react";
import PortfolioCardLeft from "./portfoliocardleft";
import PortfolioCardRight from "./portfoliocardright";

const portfolioInfo = [
  {
    title: "Bellroy",
    date: "(August 2023)",
    icon: "/wallet.png",
    image: "/bellroy_website.png",
    description:
      "A copy version of a website that I've bought wallets from for many years.Users are able to interact with all the same features of the page as if it were the actual website.",
    stack: { react: "React", tailwind: "Tailwind" },
    style: true,
  },
  {
    title: "Soundly",
    date: "(September 2023)",
    icon: "/album.png",
    image: "/soundly_website.png",
    description:
      "A website that allows user to take their Youtube Music playlists and convert them to Spotify playlists.",
    stack: { react: "React", tailwind: "Tailwind" },
    style: false,
  },
  {
    title: "Scale Op",
    date: "(January 2024)",
    icon: "/scale_op_logo.png",
    image: "/scale-op.com_.png",
    description:
      "A fully-functioning website custom bulit to the clients specifications with robust 'Contact Us' form with its backend being connected to HubSpot.",
    stack: { react: "Wordpress", tailwind: "Bricks Builder" },
    style: true,
  },
];

const links = [
  {
    git_link: "https://github.com/Njoe00/Bellroy-Site-Copy",
    website_link: "https://bellroy-site-copy.vercel.app/",
    git: true,
  },
  {
    git_link: "https://github.com/Njoe00/Youtube-PlayList-To-Spotify-Converter",
    website_link:
      "https://youtube-play-list-to-spotify-converter-657xuiovk-njoe00.vercel.app/",
    git: true,
  },
  {
    git_link: "https://github.com/Njoe00/Youtube-PlayList-To-Spotify-Converter",
    website_link: "https://scale-op.com/",
    git: false,
  },
];

export default function PortfolioCard() {
  return (
    <div>
      {portfolioInfo.map((item, index) => {
        const styleCheck = () => {
          if (item.style) {
            return (
              <PortfolioCardLeft item={item} links={links} index={index} />
            );
          }
          return <PortfolioCardRight item={item} links={links} index={index} />;
        };
        return <div key={index}>{styleCheck()}</div>;
      })}
    </div>
  );
}
