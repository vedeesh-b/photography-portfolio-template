"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { MotionValue } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import categoryCardDesktop from "../../../public/category-card-desktop.svg";

const images = [
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/goa_spice_plantation.webp",
    title: "Nature",
    href: "/nature",
  },
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/bcn_amr_rb.webp",
    title: "Sport",
    href: "/sport",
  },
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_tokyo_street.webp",
    title: "Travel",
    href: "/travel",
  },
];

export default function ScrollRevealCategories() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full flex flex-col">
      {images.map((img, i) => (
        <CategoryCard
          key={img.title}
          src={img.src}
          // img={img}
          // index={i}
          // total={images.length}
          // scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

// function CategoryCard({
//   img,
//   index,
//   total,
//   scrollYProgress,
// }: {
//   img: { src: string; title: string; href: string };
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// }) {
//   // ✅ Hooks are now called directly inside a React component
//   const start = index * (1 / total);
//   const end = start + 1 / total;

//   const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
//   const labelY = useTransform(
//     scrollYProgress,
//     [start + 0.05, start + 0.25],
//     ["60%", "0%"]
//   );

//   return (
//     <motion.div
//       style={{ y }}
//       className="sticky top-0 h-screen w-full flex items-center justify-center"
//       whileHover={{
//         scale: 1.02,
//         transition: { duration: 0.15, ease: "easeIn" },
//       }}
//     >
//       <Link
//         href={img.href}
//         className="group relative block w-full md:w-[60vw] h-[60vh] overflow-hidden shadow-xl"
//       >
//         <Image
//           src={img.src}
//           alt={img.title}
//           fill
//           className="object-cover brightness-75"
//           priority={index === 0}
//         />

//         {/* Label animation */}
//         <motion.div
//           style={{ y: labelY }}
//           transition={{
//             type: "spring",
//             stiffness: 150,
//             damping: 20,
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <span
//             className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold mix-blend-difference font-serif font-medium transition-colors duration-300
//              group-hover:text-white group-hover:mix-blend-lighten"
//           >
//             {img.title}
//           </span>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// }

function CategoryCard({ src }: { src: string }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div>
      <div
        className={`category-card-${
          isDesktop ? "desktop" : "mobile"
        } w-full p-6`}
      >
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={src}
            alt="Category Card"
            fill
            style={{
              maskImage: `url(${isDesktop ? categoryCardDesktop.src : ""})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              maskRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
}
