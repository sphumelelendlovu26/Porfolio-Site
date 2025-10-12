import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useHover } from "@/hooks/useHover";
import * as THREE from "three";
import "./setupKTX2Loader";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";
const LaptopModel = ({ setProjectsOpen, isOpenLaptop, setIsOpenLaptop }) => {
  const gl = useThree((state) => state.gl);
  const { scene, animations } = useGLTF(
    "/laptop-model/scene.glb",
    undefined,
    undefined,
    (loader) => {
      const ktx2loader = new KTX2Loader();
      ktx2loader.setTranscoderPath(
        "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/"
      );
      ktx2loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2loader);
    }
  );
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const { hoverProps } = useHover();

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

  useEffect;
  return (
    <group
      {...hoverProps}
      ref={group}
      position={[-1, 0.35, 0]}
      onClick={handleClick}
    >
      <primitive
        scale={[0.25, 0.3, 0.25]}
        castShadow
        object={scene}
      ></primitive>
    </group>
  );
};

export default LaptopModel;
