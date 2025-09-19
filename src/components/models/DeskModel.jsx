import { useGLTF } from "@react-three/drei";

const DeskModel = () => {
  const { scene } = useGLTF("/desk-model/scene.gltf");

  return (
    <group scale={3} position={[0, -2, 0]}>
      <primitive castShadow object={scene}></primitive>
    </group>
  );
};

export default DeskModel;
