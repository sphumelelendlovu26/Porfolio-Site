import { useGLTF } from "@react-three/drei";

const ShelfModel = () => {
  const { scene } = useGLTF("/shelf-model/scene.gltf");
  return (
    <group position={[4.5, -0.5, -2]} scale={3} rotation={[0, -Math.PI / 5, 0]}>
      <primitive object={scene}></primitive>
    </group>
  );
};

export default ShelfModel;
