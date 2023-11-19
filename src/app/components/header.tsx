import React, { useEffect, useState } from "react";
import Image from "next/image";

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
  const [toggleHeader, setToggleHeader] = useState(false);
  const [isXLlargeScreen, setisXLlargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth > 900 : false
  );

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggleHeader = () => {
    setToggleHeader(!toggleHeader);
  };

  useEffect(() => {
    const handleResize = () => {
      setisXLlargeScreen(
        typeof window !== "undefined" ? window.innerWidth > 900 : false
      );
      if (!isXLlargeScreen) {
        setToggleHeader(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isXLlargeScreen]);

  const HeaderSection = [
    { text: "Home", scroll: scrollToHomeRef },
    { text: "About", scroll: scrollToAboutRef },
    { text: "Projects", scroll: scrollToProjectsRef },
    { text: "Contact", scroll: scrollToContactRef },
  ];

  return (
    <div className="absolute">
      <div className="z-10 bg-white h-[90px] flex items-center flex-row xl:px-10 lg:px-10 justify-between fixed w-screen shadow-md">
        <button
          onClick={scrollToHomeRef}
          className="text-2xl text-black font-extrabold xs:ml-4 sm:ml-4 md:ml-4"
        >
          NickJoe.dev
        </button>
        {isXLlargeScreen ? (
          <div className="space-x-4 font-semibold text-base xs:text-small sm:text-small">
            {HeaderSection.map((string, index) => {
              return (
                <button
                  onClick={() => scrollToSection(string.scroll)}
                  key={index}
                  className="text-black hover:text-blue-500 transition ease-in-out duration-300 delay-50"
                >
                  {string.text}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <div className="mr-4">
              <button onClick={handleToggleHeader} className="">
                <Image src="/menu.png" width="30" height="30" alt="" />
              </button>
            </div>
            {toggleHeader && (
              <div className="bg-white text-black h-[800px] justify-center justify-items-center flex w-full flex-col absolute z-20 mt-56 shadow-md">
                <div className="flex-row justify-end flex mr-6">
                  <button onClick={handleToggleHeader}>
                    <Image
                      className="flex"
                      src="/close.png"
                      width="15"
                      height="15"
                      alt=""
                    />
                  </button>
                </div>
                <div className="justify-center items-center text-center flex flex-col space-y-6 mt-12">
                  {HeaderSection.map((string, index) => {
                    return (
                      <button
                        onClick={() => {
                          scrollToSection(string.scroll);
                          handleToggleHeader();
                        }}
                        key={index}
                        className="text-black text-xl hover:text-blue-500 transition ease-in-out duration-300 delay-50"
                      >
                        {string.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
