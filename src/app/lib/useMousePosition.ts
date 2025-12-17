import { useState } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (x: number, y: number) => {
    setMousePosition({ x: x, y: y });
  };
  return { mousePosition, updateMousePosition };
};
