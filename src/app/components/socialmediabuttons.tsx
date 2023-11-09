"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialMediaBtns({ item }: { item: any }) {
  const [toggleOnHover, setToggleOnHover] = useState(false);

  const handleMouseEnter = () => {
    setToggleOnHover(true);
  };

  const handleMouseLeave = () => {
    setToggleOnHover(false);
  };
  return (
    <div>
      <a href={item.link} target="_blank">
        <Image
          className="cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={`${toggleOnHover ? item.highlighted : item.default}`}
          height={30}
          width={30}
          quality={100}
          alt="other"
        />
      </a>
    </div>
  );
}
