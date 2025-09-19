import { useGLTF } from "@react-three/drei";
import { useHover } from "../../hooks/useHover";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const PhoneModel = ({ setContactsOpen }) => {
  const { scene } = useGLTF("/phone-model/scene.gltf");
  const { hoverProps } = useHover();
  const group = useRef();
  const [isRinging, setIsRinging] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    const interval = 3;
    const duration = 1;
    const cycle = t % interval;

    if (cycle < duration) {
      setIsRinging(true);
    } else {
      setIsRinging(false);
    }

    if (isRinging && group.current) {
      const intensity = 0.009;
      group.current.position.x = 1 + Math.sin(t * 50) * intensity;
      group.current.position.z = Math.cos(t * 50) * intensity;
    }
  });

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
      <primitive object={scene} />
    </group>
  );
};

export default PhoneModel;
