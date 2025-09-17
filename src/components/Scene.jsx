import { Canvas } from "@react-three/fiber";
import DeskModel from "./DeskModel";
import LaptopModel from "./LaptopModel";
import ShelfModel from "./ShelfModel";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

const Scene = ({
  projectsOpen,
  setProjectsOpen,
  isOpenLaptop,
  setIsOpenLaptop,
}) => {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 3.5],
      }}
      className="bg-gray-400"
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        intensity={1}
        castShadow
      />
      <DeskModel />
      <LaptopModel
        projectsOpen={projectsOpen}
        setProjectsOpen={setProjectsOpen}
        setIsOpenLaptop={setIsOpenLaptop}
        isOpenLaptop={isOpenLaptop}
      />
      <ShelfModel />

      <Suspense>
        <Environment preset="city" />
      </Suspense>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#999" />
      </mesh>
    </Canvas>
  );
};

export default Scene;
