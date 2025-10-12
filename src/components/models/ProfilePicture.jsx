import profilePicture from "/picture-texture.jpg";
import { useTexture } from "@react-three/drei";
import { useHover } from "@/hooks/useHover";

const ProfilePicture = ({ isAboutMeOpen, setIsAboutMeOpen }) => {
  const texture = useTexture(profilePicture);
  const handlePictureClick = () => {
    setIsAboutMeOpen(true);
  };
  const { hoverProps } = useHover();

  return (
    <mesh
      {...hoverProps}
      position={[-3.35, 2.445, -3.9]}
      onClick={handlePictureClick}
    >
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
export default ProfilePicture;
