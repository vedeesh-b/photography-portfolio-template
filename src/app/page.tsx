"use client";

import Image from "next/image";
import Parallax from "./ui/parallax";
import StripedBox from "./ui/stripedPattern";
import Link from "next/link";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./ui/sidebar";

export default function Home() {
  const quote =
    "I’m drawn to subjects characterised by energy and unpredictability. Recently, this has expanded to include the unique composition and perspective offered by cityscapes and architecture.";

  const source =
    "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images";

  const images = [
    {
      category: "Nature",
      src: `${source}/cz_peacock.webp`,
      width: 230,
      height: 300,
      href: "/nature",
    },
    {
      category: "Sport",
      src: `${source}/gb_kn_duck.webp`,
      width: 230,
      height: 300,
      href: "/sport",
    },
    {
      category: "Travel",
      src: `${source}/jpn_bamboo.webp`,
      width: 600,
      height: 450,
      href: "/travel",
    },
  ];

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="p-4 md:p-9">
      {isMobile && <Sidebar />}
      {isDesktop && (
        <div>
          <div className="grid grid-cols-8 gap-8 items-stretch mb-[15vh]">
            {images.map((img, i) => (
              <Link
                href={img.href}
                key={i}
                prefetch
                className={`flex flex-col ${
                  i === 2 ? "col-span-4" : "col-span-2"
                } justify-end`}
              >
                <motion.div
                  whileHover={{
                    scale: 0.99,
                    transition: {
                      duration: 0.6,
                      type: "spring",
                    },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { type: "tween", stiffness: 500, damping: 20 },
                  }}
                >
                  <Image
                    {...img}
                    alt={img.category}
                    className="w-full object-contain"
                  />
                </motion.div>
                <div className="flex justify-between w-full text-sm mt-2">
                  <span className="text-[#000000]">{img.category}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="font-serif font-medium leading-[40px] tracking-[-0.025em] text-[#403F3C] text-[30px] mb-[5vh] z-100">
            {quote}
            <div className="absolute grid grid-cols-2 right-15 -bottom-36 -z-1 w-60">
              <div className="col-start-2">
                <StripedBox />
              </div>
              <div className="col-start-1">
                <StripedBox />
              </div>
            </div>
          </div>
        </div>
      )}
      <Parallax />
    </div>
  );
}
