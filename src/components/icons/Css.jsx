import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Text } from "@react-three/drei";

const CssModel = () => {
  const { scene } = useGLTF("/css-model/scene.gltf");
  const iconRef = useRef();

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.0075;
    }
  });

  return (
    <>
      <group
        ref={iconRef}
        scale={[0.002, 0.002, 0.002]}
        position={[4.5, -0.5, -1.65]}
      >
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[4.44, -0.05, -1.49]} // slightly above the icon
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -0.8, 0]}
      >
        Css3
      </Text>{" "}
      <Text
        position={[4.45, -0.05, -1.5]} // slightly above the icon
        fontSize={0.2}
        color="red"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -0.8, 0]}
      >
        Css3
      </Text>
    </>
  );
};

export default CssModel;
