"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialMediaBtns({ item }: { item: any }) {
  const [toggleOnHover, setToggleOnHover] = useState(false);

  const handleHover = () => {
    setToggleOnHover(!toggleOnHover);
  };

  return (
    <div>
      <a href={item.link} target="_blank">
        <Image
          className="cursor-pointer hover:scale-125 hover:-translate-y-1"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          src={item.default}
          height={30}
          width={30}
          quality={100}
          alt="other"
        />
      </a>
    </div>
  );
}
