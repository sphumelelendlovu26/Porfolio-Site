import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Roof() {
  const texture = useTexture("/roof-texture.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  return (
    <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <boxGeometry args={[20, 15, 0.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Roof;
