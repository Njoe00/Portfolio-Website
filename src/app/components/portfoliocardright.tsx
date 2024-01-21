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
    <div className="my-16 bg-white rounded-3xl shadow-full relative items-center justify-center flex p-4">
      <div className="flex xl:w-[950px] xl:h-[400px] lg:w-[450px] md:w-[570px] sm:w-auto xs:w-auto lg:h-[750px] sm:h-[750px] xs:h-[750px] justify-center xl:flex-row lg:flex-col flex-col items-center text-center relative">
        <div className="flex-col flex flex-end w-[300px] h-[360px] text-center justify-center items-center xl:mr-14 xl:ml-20 xl:order-1 lg:order-last order-last">
          <div className="flex flex-row items-center space-x-1 text-center">
            <div className="text-black font-bold text-lg">{item.title}</div>
            <div className="text-gray-900 font-bold text-sm">{item.date}</div>
            <Image src={item.icon} height="20" width="20" alt="" />
          </div>
          <p className="text-gray-400 text-base font-semibold mt-4">
            {item.description}
          </p>
          <span className="flex flex-row items-center text-center space-x-8 mt-6">
            <div className="text-black font-semibold text-lg ring-2 shadow-full_sm ring-offset-[5px] ring-white">
              {item.stack.react}
            </div>
            <div className="text-black font-semibold text-lg ring-2 ring-offset-[5px] ring-white shadow-full_sm">
              {item.stack.tailwind}
            </div>
          </span>
          <DemoButtons links={links} index={index} />
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className={`xs:w-[300px] sm:w-[300px] h-[340px] md:w-[530px] xl:w-[530px] lg:w-[530px] rounded-2xl shadow-lg flex
          overflow-hidden relative transition-all duration-1000 xl:order-last lg:order-1 lgx1:order-1 order-1 xs:flex-col sm:flex-col ${
            scrollOnHover ? "" : ""
          }`}
        >
          <Image
            className={`absolute h-[385px] transition-all duration-[4000ms] ease-in-out ${
              scrollOnHover ? "" : ""
            }`}
            src={item.image}
            height={385}
            width={530}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
