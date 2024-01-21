import React from "react";

interface aboutRefProps {
  aboutRef: React.RefObject<HTMLElement | undefined>;
}
function About({ aboutRef }: aboutRefProps) {
  return (
    <div
      ref={aboutRef as React.RefObject<HTMLDivElement>}
      className="flex flex-col bg-white justify-center text-center items-center pt-24 pb-16"
    >
      <div className="xl:w-1/2 w-4/5 ">
        <div className="text-blue-500 text-xl p-4 font-extrabold">ABOUT ME</div>
        <div className="text-black font-bold text-3xl p-4 text-center ">
          A dedicated Front-end Developer based in Vancouver, BC📍
        </div>
        <div className="text-xl text-[#767676] text-center xl:mt-0 mt-6">
          I am a Vancouverite, born and raised. My off-beat last name comes from
          my grandfather, who immigrated to New Zealand, where both of my
          parents hail from. I have a strong desire to be a team player and
          strive to leave a positive impact wherever I go. Outside of
          programming, I spend my leisure time exercising, trying new food, and
          studying investments
        </div>
      </div>
    </div>
  );
}
export default About;
