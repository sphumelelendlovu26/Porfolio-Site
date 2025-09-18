import { useEffect, useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  return {
    hovered,
    hoverProps: {
      onPointerOver: () => setHovered(true),
      onPointerOut: () => setHovered(false),
    },
  };
};
