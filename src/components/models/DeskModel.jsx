import { useGLTF } from "@react-three/drei";
import "./setupKTX2Loader";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";
const DeskModel = () => {
  const gl = useThree((state) => state.gl);
  const { scene } = useGLTF(
    "/desk-model/scene.glb",
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

  return (
    <group scale={3} position={[0, -2, 0]}>
      <primitive castShadow object={scene}></primitive>
    </group>
  );
};

export default DeskModel;
