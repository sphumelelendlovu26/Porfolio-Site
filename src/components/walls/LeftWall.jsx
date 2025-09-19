import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function LeftWall() {
  const texture = useTexture("/wall-texture.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);

  return (
    <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <boxGeometry args={[20, 10, 0.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default LeftWall;
