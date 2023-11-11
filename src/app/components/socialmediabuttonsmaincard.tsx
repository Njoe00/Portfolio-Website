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
          height={30}
          width={30}
          quality={100}
          alt="other"
        />
      </a>
    </div>
  );
}
