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
      <group ref={iconRef} scale={[0.1, 0.1, 0.1]} position={[5.5, -0.1, -1.3]}>
        <primitive object={scene}></primitive>
      </group>
      <Text
        position={[5.3, -0.05, -1.0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 5.7, 0]}
      >
        React.js
      </Text>
      <Text
        position={[5.31, -0.05, -1.01]}
        fontSize={0.2}
        color="red"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 5.7, 0]}
      >
        React.js
      </Text>
    </>
  );
};

export default ReactModel;
