import React, { useState } from "react";
import Image from "next/image";

import DemoButtons from "./demobuttons";

export default function PortfolioCardLeft({
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
    <div className="my-16 bg-white rounded-3xl shadow-full relative items-center justify-center flex">
      <div className="flex xl:w-[950px] lg:h-[400px] lg:w-[950px] lg:gap-20 md:w-[570px] sm:w-auto xs:w-auto xs:h-[750px] justify-center xl:flex-row lg:flex-row flex-col items-center text-center relative">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className={`xs:w-[301px] h-[340px] lg:w-[530px] rounded-2xl shadow- flex
          overflow-hidden relative transition-all duration-1000 lg:order-3 md:order-1 sm:order-1 ${
            scrollOnHover ? "" : ""
          }`}
        >
          <Image
            className={`absolute lg:w-[530px] h-auto transition-all flex duration-[4000ms] ease-in-out ${
              scrollOnHover ? "-translate-y-3/4" : ""
            }`}
            src={item.image}
            height="340"
            width="530"
            alt=""
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex-col flex flex-end w-[301px] h-[329px] text-center justify-center items-center xl:mr-20 xl:ml-14 xl:order-1 order-last">
          <div className="flex flex-row items-center space-x-1 text-center">
            <div className="text-black font-bold text-lg">{item.title}</div>
            <div className="text-gray-900 font-bold text-sm">{item.date}</div>
            <Image src={item.icon} height="20" width="20" alt="" />
          </div>
          <p className="text-gray-400 text-base font-semibold mt-4">
            {item.description}
          </p>
          <span className="flex flex-row mt-6 items-center text-center space-x-8">
            <div className="text-black font-semibold text-lg ring-2 shadow-full_sm ring-offset-[5px] ring-white">
              {item.stack.react}
            </div>
            <div className="text-black font-semibold text-lg ring-2 ring-offset-[5px] ring-white shadow-full_sm">
              {item.stack.tailwind}
            </div>
          </span>
          <DemoButtons links={links} index={index} />
        </div>
      </div>
    </div>
  );
}
