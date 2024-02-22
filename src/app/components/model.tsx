import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials } = useGLTF(
    "/head_of_michelangelos_david_optimised.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        position={[0.5, -0.5, 3]}
        rotation={[3.129, -0.4, -0.011]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/head_of_michelangelos_david_optimised.glb");
