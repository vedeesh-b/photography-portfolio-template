"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const menuItems = [
    {
      title: "Email",
      id: "email",
      href: "mailto:vedeesh18@gmail.com",
    },
    {
      title: "LinkedIn",
      id: "linkedin",
      href: "https://www.linkedin.com/in/vedeesh-bali/",
    },
  ];

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="flex flex-row justify-center items-center py-3 md:py-6 px-12 border-b-[0.25px] border-b-[#ABA8A2]">
      <div className="w-1/3" />
      <div className="w-1/3 flex justify-center font-bold text-[22px] tracking-tight text-[#000000]">
        <Link href="/" className="overflow-hidden relative inline-block">
          <motion.div
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="block"
              variants={{
                initial: { y: 0 },
                hover: { y: "100%" },
              }}
              transition={{ duration: 0.3 }}
            >
              VB
            </motion.span>
            <motion.span
              className="block absolute left-0 top-0"
              variants={{
                initial: { y: "-100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              VB
            </motion.span>
          </motion.div>
        </Link>
      </div>
      <div className="w-1/3 flex justify-end text-[14px] gap-6 font-medium">
        {isDesktop &&
          menuItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-[15px]">
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
