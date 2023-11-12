import React, { useState } from "react";
import Image from "next/image";

import DemoButtons from "./demobuttons";

export default function PortfolioCardRight({
  item,
  links,
  index,
}: {
  item: any;
  links: any;
  index: number;
}) {
  const [scrollOnHover, setScrollOnHover] = useState(false);
  const handleHover = () => {
    setScrollOnHover(!scrollOnHover);
  };
  return (
    <div className="my-16 bg-white rounded-3xl shadow-full p-4 relative">
      <div className="flex h-[360px] w-[950px] justify-center flex-row items-center text-center relative ">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className={`w-[530px] h-[340px] rounded-2xl shadow-full
          overflow-hidden relative transition-all duration-1000 ${
            scrollOnHover ? "" : ""
          }`}
        >
          <Image
            className={`absolute h-auto transition-all duration-[4000ms] ease-in-out ${
              scrollOnHover ? "-translate-y-3/4" : ""
            }`}
            src={item.image}
            height="340"
            width="530"
            alt=""
          />
        </div>
        <div className="flex-col flex flex-end w-[300px] h-[360px] text-center justify-center items-center ml-20 mr-14">
          <div className="flex flex-row items-center space-x-1 text-center">
            <div className="text-black font-bold text-lg">{item.title}</div>
            <div className="text-gray-900 font-bold text-sm">{item.date}</div>
            <Image src={item.icon} height="20" width="20" alt="" />
          </div>
          <p className="text-gray-400 text-base font-semibold mt-4">
            {item.description}
          </p>
          <span className="flex flex-row mt-6 items-center text-center">
            <div className="text-black font-semibold text-lg ring-2 shadow-full_sm ring-offset-[5px] mr-6 ring-white">
              {item.stack.react}
            </div>
            <div className="text-black font-semibold text-lg ring-2 ring-offset-[5px] mr-6 ring-white shadow-full_sm">
              {item.stack.tailwind}
            </div>
          </span>
          <DemoButtons links={links} index={index} />
        </div>
      </div>
    </div>
  );
}
