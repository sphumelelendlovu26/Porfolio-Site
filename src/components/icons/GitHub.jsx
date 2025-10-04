import { useGLTF } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const GitHub = () => {
  const { scene } = useGLTF("/github-model/scene.gltf");
  const groupRef = useRef();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group ref={groupRef} scale={0.005} position={[5.5, -0.85, -1.3]}>
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[5.5, -0.85, -1.3]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 5.55, 0]}
      >
        GitHub
      </Text>
      <Text
        rotation={[0, 5.55, 0]}
        position={[5.51, -0.85, -1.31]}
        fontSize={0.2}
        color="red"
        anchorX="center"
        anchorY="middle"
      >
        GitHub
      </Text>
    </>
  );
};

export default GitHub;
