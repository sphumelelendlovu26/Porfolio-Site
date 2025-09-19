import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Floor() {
  const texture = useTexture("/floor-texture.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 2]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Floor;
