import { useEffect, useState } from "react";

type MousePositionType = {
  mouseX: null | number;
  mouseY: null | number;
};

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({
    mouseX: null,
    mouseY: null,
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}
