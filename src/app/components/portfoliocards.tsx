import React from "react";
import PortfolioCard from "./portfoliocard";

export default function Portfolio({ projectsRef }: { projectsRef: any }) {
  return (
    <div
      ref={projectsRef}
      className="bg-[#f9f9f9] flex flex-col items-center text-center justify-center px-10 pt-16"
    >
      <div className="text-start">
        <div className="text-[#147efb] font-black text-base mb-2">
          PORTFOLIO
        </div>
        <div className="font-black text-black text-2xl">
          Each project is a unique piece of development 🧩
        </div>
      </div>
      <PortfolioCard />
    </div>
  );
}
