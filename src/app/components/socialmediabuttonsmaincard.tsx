import React, { useState } from "react";
import Image from "next/image";

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

export default function SocialMediaButtonsMainCard() {
  return (
    <span className="flex-row flex mt-6 space-x-4 xl:items-start xl:justify-start justify-center">
      {socialMediaButtonArray.map((item, index) => {
        const [toggleOnHover, setToggleOnHover] = useState(false);

        const handleHover = () => {
          setToggleOnHover(!toggleOnHover);
        };
        return (
          <a key={index} href={item.link} target="_blank">
            <Image
              className="cursor-pointer"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              src={toggleOnHover ? item.highlighted : item.default}
              height={33}
              width={33}
              quality={100}
              alt="other"
            />
          </a>
        );
      })}
    </span>
  );
}
