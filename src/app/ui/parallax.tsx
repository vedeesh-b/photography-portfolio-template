"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import useParallax from "../lib/useParallax";
import Link from "next/link";
import CustomCursor from "./customCursor";

type ParallaxItemType = {
  src: string;
  title: string;
  href: string;
  onHover: () => void;
  onLeave: () => void;
};

function ParallaxItem({
  src,
  title,
  href,
  onHover,
  onLeave,
}: ParallaxItemType) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const yTitle = useParallax(scrollYProgress, 300);

  return (
    <div
      ref={ref}
      className="w-full h-auto snap-center flex items-center justify-center"
    >
      <Link href={href} className="group relative block">
        <motion.div
          style={{ y }}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className="cursor-none"
        >
          <Image
            src={src}
            alt={title}
            width={700}
            height={0}
            className="transition-all group-hover:brightness-75 duration-300"
          />
          <motion.h2
            style={{ y: yTitle }}
            className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold mix-blend-difference font-serif font-medium transition-colors duration-300 
             group-hover:text-white group-hover:mix-blend-lighten"
          >
            {title}
          </motion.h2>
        </motion.div>
      </Link>
    </div>
  );
}

export default function Parallax() {
  const images = [
    {
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/goa_spice_plantation.webp",
      title: "Nature",
      href: "/nature",
    },
    {
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/cz_castle_view.webp",
      title: "Travel",
      href: "/travel",
    },
    {
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/bcn_yuki.webp",
      title: "Sport",
      href: "/sport",
    },
  ];

  const [hoverCategory, setHoverCategory] = useState("");

  return (
    <div className="w-full h-auto snap-y snap-mandatory scroll-smooth">
      <CustomCursor hoverCategory={hoverCategory} />
      {images.map((img, id) => (
        <ParallaxItem
          key={id}
          {...img}
          onHover={() => setHoverCategory(img.href)}
          onLeave={() => setHoverCategory("")}
        />
      ))}
      <div className="h-[15vh]" />
    </div>
  );
}
