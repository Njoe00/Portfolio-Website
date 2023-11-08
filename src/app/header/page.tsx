import React from "react";

export default function Header({
  homeRef,
  scrollToHomeRef,
  scrollToAboutRef,
  scrollToProjectsRef,
  scrollToContactRef,
}: {
  homeRef: any;
  scrollToHomeRef: any;
  scrollToAboutRef: any;
  scrollToProjectsRef: any;
  scrollToContactRef: any;
}) {
  const HeaderSection = [
    { text: "Home", scroll: scrollToHomeRef },
    { text: "About", scroll: scrollToAboutRef },
    { text: "Projects", scroll: scrollToProjectsRef },
    { text: "Contact", scroll: scrollToContactRef },
  ];
  return (
    <div className="z-10 bg-white h-20 flex items-center flex-row justify-between px-10 fixed w-full shadow-md">
      <button
        onClick={scrollToHomeRef}
        className="text-xl text-black font-bold"
      >
        NickJoe.dev
      </button>
      <div className="space-x-4 font-semibold text-base">
        {HeaderSection.map((string, index) => {
          return (
            <button
              onClick={string.scroll}
              key={index}
              className="text-black hover:text-blue-500 transition ease-in-out duration-300 delay-50"
            >
              {string.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
