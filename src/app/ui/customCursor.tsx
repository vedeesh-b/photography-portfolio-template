"use client";

import { motion } from "motion/react";
import useMousePosition from "../lib/useMousePosition";
import Image from "next/image";

export default function CustomCursor({
  hoverCategory,
}: {
  hoverCategory: string;
}) {
  const { mouseX, mouseY } = useMousePosition();

  if (mouseX === null || mouseY === null) return null;

  return (
    <>
      {hoverCategory !== "" && mouseX !== null && mouseY !== null && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50"
          initial={false}
          animate={{
            x: mouseX,
            y: mouseY,
          }}
          transition={{ type: "spring", ease: "backOut", duration: 0.5 }}
        >
          <Image src={"/cursor (2).svg"} alt="Cursor" width={32} height={32} />
          <div className="fixed left-9 bottom-1 bg-green-800 px-2 py-0.5 text-white font-light tracking-tight rounded-[4px] border-[0.33px] border-white">
            photos.vedeeshbali.com{hoverCategory}
          </div>
        </motion.div>
      )}
    </>
  );
}
