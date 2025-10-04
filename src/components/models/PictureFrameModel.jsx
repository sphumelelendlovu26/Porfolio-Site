import { useGLTF } from "@react-three/drei";

const PictureFrameModel = () => {
  const { scene } = useGLTF("/picture-frame-model/scene.gltf");

  return (
    <group position={[-3.5, 2.5, -4]} scale={[7.4, 5, 1]}>
      <primitive object={scene}></primitive>
    </group>
  );
};

export default PictureFrameModel;
