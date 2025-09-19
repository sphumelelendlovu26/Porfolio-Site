import profilePicture from "/picture-texture.jpg";
import { useTexture } from "@react-three/drei";

const ProfilePicture = ({ isAboutMeOpen, setIsAboutMeOpen }) => {
  const texture = useTexture(profilePicture);

  const handlePictureClick = () => {
    if (isAboutMeOpen !== true) {
      setIsAboutMeOpen(true);
    }
  };

  return (
    <mesh position={[-3.5, 2.5, -4]} onClick={handlePictureClick}>
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
export default ProfilePicture;
