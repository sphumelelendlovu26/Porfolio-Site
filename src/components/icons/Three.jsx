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
        scale={[0.0035, 0.0035, 0.0035]}
        position={[3.5, -0.1, -2.3]}
      >
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[3.5, -0.05, -2.2]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Threejs
      </Text>
      <Text
        position={[3.49, -0.05, -2.21]}
        fontSize={0.2}
        color="red"
        anchorX="center"
        anchorY="middle"
      >
        Threejs
      </Text>
    </>
  );
};

export default Three;
