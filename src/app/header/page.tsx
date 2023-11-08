import React from "react";

export default function Header() {
  const HeaderSection = ["Home", "About", "Projects", "Contact"];
  return (
    <div className="border-2 h-20 flex items-center flex-row justify-between px-10">
      <button className="text-xl text-black font-bold">NickJoe.dev</button>
      <div className="space-x-4 font-semibold text-base">
        {HeaderSection.map((string, index) => {
          return (
            <button
              key={index}
              className="text-black hover:text-blue-500 transition ease-in-out duration-300 delay-50"
            >
              {string}
            </button>
          );
        })}
      </div>
    </div>
  );
}
