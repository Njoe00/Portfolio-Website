import React, { useState } from "react";
import Image from "next/image";

export default function SocialMediaButtonsMainCard({
  item,
  key,
}: {
  item: any;
  key: number;
}) {
  const [toggleOnHover, setToggleOnHover] = useState(false);

  const handleHover = () => {
    setToggleOnHover(!toggleOnHover);
  };
  return (
    <div key={key}>
      <a href={item.link} target="_blank">
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
    </div>
  );
}
