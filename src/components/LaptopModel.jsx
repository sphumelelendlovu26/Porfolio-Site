import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const LaptopModel = ({
  projectsOpen,
  setProjectsOpen,
  isOpenLaptop,
  setIsOpenLaptop,
}) => {
  const { scene, animations } = useGLTF("/laptop-model/scene.gltf");
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["Animation"];
    if (action) {
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
    }
  }, [actions]);

  const handleClick = () => {
    const action = actions["Animation"];
    if (!action) return;

    action.reset();
    action.timeScale = isOpenLaptop ? -1 : 1;
    action.play();

    setProjectsOpen(true);
    setIsOpenLaptop(true);
  };
  return (
    <group ref={group} position={[-1, 0.3, 0]} onClick={handleClick}>
      <primitive scale={0.25} castShadow object={scene}></primitive>
    </group>
  );
};

export default LaptopModel;
