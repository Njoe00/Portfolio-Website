import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props: any) {
  const headRef = useRef<any>();

  // useFrame((state, delta) => {
  //   if (headRef.current) {
  //     headRef.current.rotation.y += 0.01;
  //   }
  // });
  const { nodes, materials } = useGLTF(
    "/head_of_michelangelos_david_optimised.glb"
  );
  return (
    <group ref={headRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[Math.PI / -1, 4, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/head_of_michelangelos_david_optimised.glb");
