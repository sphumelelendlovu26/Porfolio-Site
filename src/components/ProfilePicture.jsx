import profilePicture from "../images/profile-picture.jpg";
import { useTexture } from "@react-three/drei";

const ProfilePicture = () => {
  const texture = useTexture(profilePicture);
  return (
    <mesh position={[-4, 2, -4]}>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
export default ProfilePicture;
