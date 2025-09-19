import { Canvas } from "@react-three/fiber";
import DeskModel from "./models/DeskModel";
import LaptopModel from "./models/LaptopModel";
import ShelfModel from "./ShelfModel";
import { OrbitControls, Text } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import PhoneModel from "./models/PhoneModel";
import ProfilePicture from "./models/ProfilePicture";
import Three from "./icons/Three";
import CssModel from "./icons/Css";
import ReactModel from "./icons/React";
import CanvasLoader from "./CanvasLoader";
import Floor from "./walls/Floor";
import LeftWall from "./walls/LeftWall";
import RightWall from "./walls/RightWall";
import Roof from "./walls/Roof";
import BedModel from "./models/BedModel";

const Scene = ({
  projectsOpen,
  setProjectsOpen,
  isOpenLaptop,
  setIsOpenLaptop,
  setContactsOpen,
  isAboutMeOpen,
  setIsAboutMeOpen,
}) => {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 6],
        fov: 50,
      }}
      className="bg-gray-400 "
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxDistance={8}
          minDistance={4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        <ambientLight intensity={0.6} />
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
        <Floor />
        <BedModel />{" "}
        <Suspense>
          <Environment preset="city" />
        </Suspense>{" "}
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[20, 10, 0.5]} />
          <meshStandardMaterial color="#777777" />
        </mesh>
        <group position={[2, 0, 0]}>
          {/* scene Texts */}
          <Text
            position={[1, 3.2, -4]}
            fontSize={0.35}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Hi, I'M SPHUMELELE NDLOVU{" "}
          </Text>
          <Text
            position={[1.01, 3.2, -4.05]}
            fontSize={0.35}
            color="red"
            anchorX="center"
            anchorY="middle"
          >
            Hi, I'M SPHUMELELE NDLOVU{" "}
          </Text>
          <Text
            position={[1, 2.5, -4]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            A FRONTEND DEVELOPER
          </Text>
          <Text
            position={[1.01, 2.5, -4.05]}
            fontSize={0.25}
            color="red"
            anchorX="center"
            anchorY="middle"
          >
            A FRONTEND DEVELOPER
          </Text>
          <Text
            position={[-3.5, 3.7, -4]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Click Picture To View Info About Me{" "}
          </Text>
          <Text
            position={[-3.49, 3.7, -4.01]}
            fontSize={0.15}
            color="red"
            anchorX="center"
            anchorY="middle"
          >
            Click Picture To View Info About Me{" "}
          </Text>
          <ProfilePicture
            setIsAboutMeOpen={setIsAboutMeOpen}
            isAboutMeOpen={isAboutMeOpen}
          />
        </group>
        {/* walls */}
        <LeftWall />
        <RightWall />
        {/* phone, laptop ,desk group */}
        <group position={[-5, 0, -1.8]} rotation={[0, Math.PI / 4, 0]}>
          {" "}
          <Text
            position={[-1.1, 0.5, -0.5]}
            fontSize={0.12}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Click Laptop To View Projects{" "}
          </Text>
          <Text
            position={[-1.09, 0.5, -0.51]}
            fontSize={0.12}
            color="red"
            anchorX="center"
            anchorY="middle"
          >
            Click Laptop To View Projects{" "}
          </Text>{" "}
          <LaptopModel
            setProjectsOpen={setProjectsOpen}
            setIsOpenLaptop={setIsOpenLaptop}
            isOpenLaptop={isOpenLaptop}
          />
          <DeskModel />
          <PhoneModel setContactsOpen={setContactsOpen} />{" "}
          <Text
            position={[1, 0.9, 0]}
            fontSize={0.12}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Click Phone To Contact Me{" "}
          </Text>
          <Text
            position={[1.01, 0.9, -0.01]}
            fontSize={0.12}
            color="red"
            anchorX="center"
            anchorY="middle"
          >
            Click Phone To Contact Me{" "}
          </Text>
        </group>{" "}
        <ShelfModel />
        <Roof />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
