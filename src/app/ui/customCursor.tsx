"use client";

import { motion } from "motion/react";
import useMousePosition from "../lib/useMousePosition";
import Image from "next/image";

export default function CustomCursor() {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <>
      {mouseX !== null && mouseY !== null && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 -translate-[25%]"
          animate={{
            x: mouseX,
            y: mouseY,
          }}
          transition={{ type: "spring", ease: "backOut", duration: 0.5 }}
        >
          <Image src={"/cursor (2).svg"} alt="Cursor" width={40} height={40} />
        </motion.div>
      )}
    </>
  );
}
