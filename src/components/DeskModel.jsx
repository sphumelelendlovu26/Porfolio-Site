import { useGLTF } from "@react-three/drei";

const DeskModel = () => {
  const { scene } = useGLTF("/desk-model/scene.gltf");

  return (
    <group>
      <primitive castShadow object={scene}></primitive>
    </group>
  );
};

export default DeskModel;
