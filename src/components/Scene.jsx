import { Canvas } from "@react-three/fiber";
import DeskModel from "./DeskModel";
import LaptopModel from "./LaptopModel";
import ShelfModel from "./ShelfModel";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import PhoneModel from "./PhoneModel";
import ProfilePicture from "./ProfilePicture";
import Three from "./icons/Three";
import CssModel from "./icons/Css";
import ReactModel from "./icons/React";
import CanvasLoader from "./CanvasLoader";

const Scene = ({
  projectsOpen,
  setProjectsOpen,
  isOpenLaptop,
  setIsOpenLaptop,
  setContactsOpen,
}) => {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 3.5],
      }}
      className="bg-gray-400"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          intensity={1}
          castShadow
        />

        {/* stack-icons */}
        <CssModel />
        <ReactModel />
        <Three />

        <ProfilePicture />
        <DeskModel />
        <LaptopModel
          projectsOpen={projectsOpen}
          setProjectsOpen={setProjectsOpen}
          setIsOpenLaptop={setIsOpenLaptop}
          isOpenLaptop={isOpenLaptop}
        />
        <ShelfModel />

        <PhoneModel setContactsOpen={setContactsOpen} />

        <Suspense>
          <Environment preset="city" />
        </Suspense>
        {/* floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 2]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#888888" />
        </mesh>

        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[20, 10, 0.5]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        <Text
          position={[1, 3, -4]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Hi, I'M SPHUMELELE NDLOVU{" "}
        </Text>
        <Text
          position={[1.01, 3, -4.05]}
          fontSize={0.4}
          color="red"
          anchorX="center"
          anchorY="middle"
        >
          Hi, I'M SPHUMELELE NDLOVU{" "}
        </Text>
        <Text
          position={[1, 2, -4]}
          fontSize={0.35}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          A FRONTEND DEVELOPER
        </Text>
        <Text
          position={[1.01, 2, -4.05]}
          fontSize={0.35}
          color="red"
          anchorX="center"
          anchorY="middle"
        >
          A FRONTEND DEVELOPER
        </Text>

        {/* Left wall */}
        <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[20, 10, 0.5]} />
          <meshStandardMaterial color="#888888" />
        </mesh>

        {/* Right wall */}
        <mesh position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[20, 10, 0.5]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
