import React from "react";
import Image from "next/image";

export default function MainCard() {
  return (
    <div className="h-1/5 w-full flex-flex justify-center items-center text-center mt-40">
      <div className="text-black flex justify-center text-6xl font-bold py-4">
        Front-End React <br /> Developer
        <div className="mt-16">
          <Image
            src="/waving_hand.png"
            height={60}
            width={60}
            quality={100}
            alt="other"
            style={{ height: "60px", width: "60px" }}
          />
        </div>
      </div>
      <div className="text-base font-n text-black">
        Hi, I'm Nicholas Joe. A passionate Front-end React <br /> Developer
        based in Vancouver, Canada. 📍
      </div>
      <div className="flex-row"
      ></div>
    </div>
  );
}
// {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by -Artist - Flaticon</a> */}
// {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by edt.im - Flaticon</a> */}
