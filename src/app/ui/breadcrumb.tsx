"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Breadcrumbs({ current }: { current: string }) {
  const categories = [
    {
      title: "nature",
      link: "/nature",
    },
    {
      title: "sport",
      link: "/sport",
    },
    {
      title: "travel",
      link: "/travel",
    },
  ];

  return (
    <div className="text-[12px] mb-[2.5vh] text-[#403f3c] flex flex-row gap-3 font-medium">
      <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <Link href="/">home</Link>
      </motion.div>

      <div>//</div>
      <div className="flex flex-row gap-1.5">
        {categories.map((category) => (
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            key={category.title}
          >
            <Link
              href={category.link}
              prefetch
              className={
                current === category.title
                  ? "underline text-[#000]"
                  : "hover:text-[#000] duration-200 "
              }
            >
              {category.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
