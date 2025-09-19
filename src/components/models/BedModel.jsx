import { useGLTF } from "@react-three/drei";

const BedModel = () => {
  const { scene } = useGLTF("/bed-model/scene.gltf");
  return (
    <group rotation={[0, Math.PI, 0]} position={[0, -2.25, -1]}>
      <primitive scale={2.5} object={scene}></primitive>
    </group>
  );
};

export default BedModel;
