import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  const lightref = useRef<any>(null);
  // useHelper(lightref, DirectionalLightHelper, 0.5, "red");
  return (
    <>
      <directionalLight intensity={4} ref={lightref} position={[2, 0.5, 1]} />
    </>
  );
}
