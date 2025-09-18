import { useGLTF } from "@react-three/drei";

const PhoneModel = ({ setContactsOpen }) => {
  const { scene } = useGLTF("/phone-model/scene.gltf");

  const handlePhoneClick = () => {
    setContactsOpen(true);
  };

  return (
    <group
      scale={[0.03, 0.03, 0.03]}
      position={[1, 0.25, 0]}
      onClick={handlePhoneClick}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default PhoneModel;
