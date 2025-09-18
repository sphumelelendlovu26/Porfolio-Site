import { useGLTF } from "@react-three/drei";
import { useHover } from "../hooks/useHover";
import { useRef } from "react";

const PhoneModel = ({ setContactsOpen }) => {
  const { scene } = useGLTF("/phone-model/scene.gltf");
  const { hoverProps } = useHover();
  const group = useRef();

  const handlePhoneClick = () => {
    setContactsOpen(true);
  };

  return (
    <group
      {...hoverProps}
      ref={group}
      scale={[0.03, 0.03, 0.03]}
      position={[1, 0.25, 0]}
      onClick={handlePhoneClick}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default PhoneModel;
