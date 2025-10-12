import { useGLTF } from "@react-three/drei";
import "./setupKTX2Loader";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";
const PictureFrameModel = () => {
  const gl = useThree((state) => state.gl);
  const { scene } = useGLTF(
    "/picture-frame-model/scene.glb",
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
    <group position={[-3.5, 2.5, -4]} scale={[7.4, 5, 1]}>
      <primitive object={scene}></primitive>
    </group>
  );
};

export default PictureFrameModel;
