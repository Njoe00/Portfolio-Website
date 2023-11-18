import React from "react";
import PortfolioCard from "./portfoliocard";

interface aboutRefProps {
  projectsRef: React.RefObject<HTMLElement | undefined>;
}

export default function Portfolio({ projectsRef }: aboutRefProps) {
  return (
    <div
      ref={projectsRef as React.RefObject<HTMLDivElement>}
      className="bg-[#f9f9f9] flex flex-col xl:items-center items-center xl:text-start text-center xl:px-10 px-6 pt-32 pb-12"
    >
      <div>
        <div className="xl:text-start text-center flex-row">
          <div className="text-[#147efb] font-black text-base mb-2">
            PORTFOLIO
          </div>
          <div className="font-black text-black text-2xl">
            Each project is a unique piece of development 🧩
          </div>
        </div>
        <PortfolioCard />
      </div>
    </div>
  );
}
