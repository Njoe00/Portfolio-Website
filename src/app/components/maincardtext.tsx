import { Text, Billboard, Html } from "@react-three/drei";
import SocialMediaButtonModels from "./socialmediabuttonmodels";
import TechStacks from "./techstacks";

export default function maincardtext() {
  const mainText = "Full Stack React Developer";
  const words = mainText.split(" ");
  const lastWord = words[3];
  const cutWords = words.slice(0, -1).join(" ");
  return (
    <group position={[-8, 2, -6]}>
      <Html as="div" className="flex relative w-max h-max">
        <div className="h-4/5 justify-center m-auto flex-col text-center xl:text-start xl:items-start">
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
              </p>{" "}
            </div>
          </div>
          <SocialMediaButtonModels />
          <TechStacks />
        </div>
      </Html>
    </group>
  );
}
