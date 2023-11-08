"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialMediaBtns({
  item,
  key,
}: {
  item: any;
  key: number;
}) {
  const [toggleOnHover, setToggleOnHover] = useState(false);

  const handleMouseEnter = () => {
    setToggleOnHover(true);
  };

  const handleMouseLeave = () => {
    setToggleOnHover(false);
  };
  return (
    <div key={key}>
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
