"use client";
import React, { useState } from "react";
import Image from "next/image";

const buttonInfo = {
  code: {
    code: {
      code: "Code",
      icon: "/github.png",
      highlighted_icon: "/github_blue.png",
      height: 24,
      width: 24,
    },
    live_demo: {
      live_demo: "Live Demo",
      icon: "/external-link.png",
      highlighted_icon: "/external-link_blue.png",
      height: 18,
      width: 18,
    },
  },
  live: {
    code: {
      code: "Code",
      icon: "/github.png",
      highlighted_icon: "/github_blue.png",
      height: 24,
      width: 24,
    },
    live_demo: {
      live_demo: "Live Demo",
      icon: "/external-link.png",
      highlighted_icon: "/external-link_blue.png",
      height: 18,
      width: 18,
    },
  },
};

export default function DemoButtons({
  links,
  index,
}: {
  links: any;
  index: number;
}) {
  const [toggleOnHover, setToggleOnHover] = useState(false);
  const [toggleOnHoverDemo, setToggleOnHoverDemo] = useState(false);

  const handleMouseEnter = () => {
    setToggleOnHover(true);
  };

  const handleMouseLeave = () => {
    setToggleOnHover(false);
  };

  const handleMouseEnterDemo = () => {
    setToggleOnHoverDemo(true);
  };

  const handleMouseLeaveDemo = () => {
    setToggleOnHoverDemo(false);
  };
  return (
    <div>
      <span className="flex-row flex items-center space-x-8">
        <a
          target="_blank"
          href={links[index].git_link}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="cursor-pointer flex-row flex items-center mt-10 space-x-1 "
        >
          <button
            className={`font-semibold transition ease-in-out duration-300 delay-50 ${
              toggleOnHover ? "text-blue-500" : "text-black"
            } `}
          >
            Code
          </button>
          <Image
            src={toggleOnHover ? "/github_blue.png" : "/github.png"}
            height="24"
            width="24"
            alt=""
          />
        </a>
        <a
          target="_blank"
          href={links[index].website_link}
          onMouseLeave={handleMouseLeaveDemo}
          onMouseEnter={handleMouseEnterDemo}
          className="flex-row flex items-center mt-10 space-x-1"
        >
          <button
            className={`font-semibold ${
              toggleOnHoverDemo ? "text-blue-500" : "text-black"
            }`}
          >
            Live Demo
          </button>
          <Image
            src={
              toggleOnHoverDemo
                ? "/external-link_blue.png"
                : "/external-link.png"
            }
            height="18"
            width="18"
            alt=""
          />
        </a>
      </span>
    </div>
  );
}
