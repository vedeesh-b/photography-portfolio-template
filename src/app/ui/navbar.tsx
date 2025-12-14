"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { AnimatedText } from "./animatedText";

const DesktopBanner = () => {
  return (
    <div>
      Debut feature: My first published work is now featured in the Nature
      Studies Exhibition at Carlotta Gallery. Check it out&nbsp;
      <Link
        className="underline underline-offset-3 transition-all duration-300 hover:after:scale-x-100 hover:after:opacity-100"
        href={
          "https://www.carlottagallery.co.uk/naturestudiesartists?pgid=miopt31x3-3be71d16-e5b8-4e22-bb44-f51af27cb110"
        }
        target="_blank"
      >
        here
      </Link>
      !
    </div>
  );
};

const MobileBanner = () => {
  return (
    <div>
      Check out my first published work&nbsp;
      <Link
        className="underline underline-offset-3 transition-all duration-300 hover:after:scale-x-100 hover:after:opacity-100"
        href={
          "https://www.carlottagallery.co.uk/naturestudiesartists?pgid=miopt31x3-3be71d16-e5b8-4e22-bb44-f51af27cb110"
        }
        target="_blank"
      >
        here
      </Link>
      !
    </div>
  );
};

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
    <>
      <div className="flex flex-row justify-center items-center py-3 md:py-6 px-12 border-b-[0.25px] border-b-[#ABA8A2]">
        <div className="w-1/3" />
        <div className="w-1/3 flex justify-center font-bold text-[22px] tracking-tight text-[#000000]">
          <Link href="/" className="overflow-hidden relative inline-block">
            <AnimatedText text="VB" />
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
      <div className="flex flex-row justify-center items-center bg-[#403F3C] text-white py-3 text-[13px] font-medium gap-4">
        <div
          className="h-[10px] w-[10px] bg-cyan-500 rounded-xl
          shadow-[0_0_5px_3px_rgba(0,255,255,0.4)] transition-all duration-300 
          hover:shadow-[0_0_6px_4px_rgba(0,255,255,1)]"
        />
        {isDesktop ? <DesktopBanner /> : <MobileBanner />}
      </div>
    </>
  );
}
