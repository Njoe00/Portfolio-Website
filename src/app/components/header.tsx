import React from "react";

export default function Header({
  scrollToHomeRef,
  scrollToAboutRef,
  scrollToProjectsRef,
  scrollToContactRef,
}: {
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
    <div className="z-10 bg-white h-[90px] flex items-center flex-row justify-between px-10 fixed w-screen shadow-md">
      <button
        onClick={scrollToHomeRef}
        className="text-2xl text-black font-extrabold"
      >
        NickJoe.dev
      </button>
      <div className="space-x-4 font-semibold text-xl">
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
