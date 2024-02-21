import React, { Suspense, useRef } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";
import TechStack from "./techstacks";
import Lights from "./lights";
import SocialMediaButtonsMainCard from "./socialmediabuttonsmaincard";
import { AmbientLight } from "three";

export default function MainCard({ homeRef }: { homeRef: any }) {
  const mainText = "Front-End React Developer";
  const words = mainText.split(" ");
  const lastWord = words[2];
  const cutWords = words.slice(0, -1).join(" ");
  const ref = useRef();
  return (
    <div ref={homeRef} className="bg-[#f9f9f9] w-full h-full flex relative z-0">
      {/* <div className="h-4/5 justify-center m-auto flex-col text-center xl:text-start xl:items-start">
        <div className="xl:flex-row flex-col flex items-center">
          <div className="h-auto flex-col xl:order-1 order-2">
            <div className="text-[#2d2e32] xs:max-lg:items-center xs:max-lg:text-center xs:max-lg:justify-items-center flex text-maincard py-4">
              <div className="xl:justify-start xl:order-1 order-3 text-center items-center">
                {cutWords}
                <div className="flex flex-row xl:justify-start text-center justify-center">
                  {lastWord}
                </div>
              </div>
            </div>
            <p className="text-xl text-[#555555] flex xl:justify-start xl:text-start text-center justify-center h-auto">
              Hi, I&apos;m Nicholas Joe. A passionate Front-end React <br />{" "}
              Developer based in Vancouver, Canada. 📍
            </p>{" "} */}
      <SocialMediaButtonsMainCard />
      {/* </div> */}
      <Canvas
        className="h-full"
        shadows
        camera={{ position: [-0.9, -1, 2], fov: 100 }}
      >
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Lights />
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
      {/* <Image
            className="rounded-full xl:ml-12 order-1 xl:order-2"
            src="/profile.jpg"
            height="300"
            width="300"
            alt=""
            quality="85"
          /> */}
      {/* </div>
         <TechStack />
       </div> */}
    </div>
  );
}
