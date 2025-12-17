"use client";

import Image from "next/image";
import cardCategoryDesktop from "../../../public/category-card-desktop.svg";
import cardCategoryMobile from "../../../public/category-card-mobile.svg";
import Link from "next/link";
import type { JSX } from "react";
import { MapPin } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import { useMousePosition } from "../lib/useMousePosition";
import { useMotionValue, useMotionTemplate } from "framer-motion";

type Card = {
  src: string;
  index: number;
  title: string;
  description: string;
  miniDescription?: string;
  link: string;
};

const images: Omit<Card, "index">[] = [
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/goa_spice_plantation.webp",
    title: "Nature",
    link: "/nature",
    description: "Keri Spice Plantation, Goa",
    miniDescription: "Goa",
  },
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/bcn_amr_rb.webp",
    title: "Sport",
    link: "/sport",
    description: "Circuit de Barcelona-Catalunya, Spain",
    miniDescription: "Barcelona",
  },
  {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_tokyo_street.webp",
    title: "Travel",
    link: "/travel",
    description: "Shibuya Crossing, Tokyo",
    miniDescription: "Tokyo",
  },
];

function Card({
  src,
  index,
  title,
  description,
  link,
  miniDescription,
}: Card): JSX.Element {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Link
      href={link}
      className="relative w-full max-w-3xl mx-auto aspect-[4/5] md:aspect-[8/5] flex"
    >
      <div className="absolute left-2 top-3 md:left-9 text-[14px] md:text-[20px] tracking-[2.5%] text-[#403F3C]">
        {`00${index}`}
      </div>

      <Image
        src={src}
        alt={title}
        fill
        style={{
          maskImage: `url(${
            isDesktop ? cardCategoryDesktop.src : cardCategoryMobile.src
          })`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          objectFit: "cover",
          filter: "brightness(0.75)",
        }}
      />

      <div className="absolute bottom-5 left-3 flex flex-row justify-center items-center gap-1 md:gap-2 md:left-7 px-2 md:px-3 py-1 text-[12px] md:text-[16px] text-[#CDCDCD] bg-[#262626] border-1 rounded-sm md:rounded-md border-[#686868]">
        <MapPin size={isDesktop ? 14 : 10} />
        {isDesktop ? description : miniDescription}
      </div>
      <div className="absolute bottom-2 md:bottom-0 left-54 md:left-146 text-[28px] md:text-[40px] font-semibold text-[#8E897E] tracking-[2.5%] uppercase">
        {title}
      </div>
    </Link>
  );
}

export function CardGrid(): JSX.Element {
  return (
    <div className="flex flex-col w-full gap-36 pb-[20vh]">
      {images.map((img, i) => (
        <Card
          key={i}
          src={img.src}
          index={i + 1}
          title={img.title}
          description={img.description}
          miniDescription={img.miniDescription}
          link={img.link}
        />
      ))}
    </div>
  );
}
