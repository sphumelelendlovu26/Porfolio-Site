import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Text } from "@react-three/drei";
const ReactModel = () => {
  const { scene } = useGLTF("/react-model/scene.gltf");
  const iconRef = useRef();

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <group
        ref={iconRef}
        scale={[0.15, 0.15, 0.15]}
        position={[5.5, 0.75, -1.3]}
      >
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[5.5, 1.3, -1.3]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        React.js
      </Text>
    </>
  );
};

export default ReactModel;
