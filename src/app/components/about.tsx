import React from "react";

interface aboutRefProps {
  aboutRef: React.RefObject<HTMLElement | undefined>;
}
function About({ aboutRef }: aboutRefProps) {
  return (
    <div
      ref={aboutRef as React.RefObject<HTMLDivElement>}
      className="flex flex-col bg-white justify-center text-center items-center pb-16"
    >
      <div className="w-1/3">
        <div className="text-blue-500 text-base p-4 font-extrabold">
          ABOUT ME
        </div>
        <div className="text-black font-bold text-2xl p-4 text-center ">
          A dedicated Front-end Developer based in Vancouver, BC📍
        </div>
        <div className="text-base text-[#767676] text-center">
          I am Vancouverite born and raised. My off-beat last name comes from my
          grandfather immgranting to Newzealnd where my parents both come from.
          I have strong desire to be a team player and strive leave positive
          impact where ever I go. Outside of programming I spend my leisure time
          exercising, trying new food and studying invesments.
        </div>
      </div>
    </div>
  );
}
export default About;
