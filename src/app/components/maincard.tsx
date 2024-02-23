import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AmbientLight } from "three";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";
import Lights from "./lights";
import TechStack from "./techstacks";
import SocialMediaButtonsMainCard from "./socialmediabuttonsmaincard";

export default function MainCard({ homeRef }: { homeRef: any }) {
  const mainText = "Full Stack React Developer";
  const words = mainText.split(" ");
  const lastWord = words[3];
  const cutWords = words.slice(0, -1).join(" ");
  return (
    <div ref={homeRef} className="bg-[#f9f9f9] w-full h-full flex relative">
      <div className="h-4/5 justify-center m-auto flex-col text-center xl:text-start xl:items-start flex">
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
              Hi, I&apos;m Nicholas Joe. A passionate Full Stack React <br />{" "}
              Developer based in Vancouver, Canada. 📍
            </p>{" "}
            <SocialMediaButtonsMainCard />
          </div>
          <Canvas
            camera={{ position: [10, 0, 0] }}
            className="order-1 xl:order-2  xl:max-w-[600px] xl:max-h-[650px] max-w-[400px] max-h-[400px]"
          >
            <Suspense fallback="loading...">
              <ambientLight intensity={1.5} />
              <Lights />
              <Model position={[9, -1, 0.5]} />
            </Suspense>
          </Canvas>
        </div>
        <TechStack />
      </div>
    </div>
  );
}
