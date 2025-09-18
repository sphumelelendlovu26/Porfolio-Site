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
        scale={[0.0035, 0.0035, 0.0035]}
        position={[4.75, 0.1, -2.1]}
      >
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[4.75, 1.3, -2.1]} // slightly above the icon
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -0.99, 0]}
      >
        Css3
      </Text>
    </>
  );
};

export default CssModel;
