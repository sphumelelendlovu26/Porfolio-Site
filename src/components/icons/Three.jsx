import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Text } from "@react-three/drei";

const Three = () => {
  const { scene } = useGLTF("/three-model/scene.gltf");
  const iconRef = useRef();

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group
        ref={iconRef}
        scale={[0.006, 0.006, 0.006]}
        position={[3.5, 0.8, -2.5]}
      >
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[3.5, 1.3, -2.5]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Threejs
      </Text>
    </>
  );
};

export default Three;
