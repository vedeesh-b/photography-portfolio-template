"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import useParallax from "../lib/useParallax";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

type ParallaxItemType = {
  src: string;
  title: string;
  href: string;
};

function ParallaxItem({ src, title, href }: ParallaxItemType) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const yTitle = useParallax(scrollYProgress, 300);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const containerHeight = isMobile ? "70vh" : "80vh";

  return (
    <div
      ref={ref}
      className="w-full h-auto snap-center flex items-center justify-center"
    >
      <Link href={href} className="group relative block w-full">
        <motion.div
          style={{ y }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.15, ease: "easeIn" },
          }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ height: containerHeight }}
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover transition-all group-hover:brightness-75 duration-300"
            />
          </div>
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
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/bcn_yuki.webp",
      title: "Sport",
      href: "/sport",
    },
    {
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/cz_castle_view.webp",
      title: "Travel",
      href: "/travel",
    },
  ];

  return (
    <div className="w-full h-auto snap-y snap-mandatory scroll-smooth">
      {images.map((img, id) => (
        <ParallaxItem key={id} {...img} />
      ))}
      <div className="h-[15vh]" />
    </div>
  );
}
