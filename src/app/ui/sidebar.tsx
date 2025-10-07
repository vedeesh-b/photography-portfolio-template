import Image from "next/image";
import StripedBox from "./stripedPattern";

export default function Sidebar() {
  const content = {
    src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/headshot.webp",
    title: "Vedeesh Bali",
    desc: "A front-end software engineer with an interest in photography spanning nature, sport, and landscapes.",
    location: "Based in London, UK.",
  };

  return (
    <div className="flex flex-col w-80 flex-shrink-0 flex-grow-0 p-9 border-r-[0.25px] border-r-[#ABA8A2]">
      <div className="w-full h-auto aspect-3/4 relative mb-[20px]">
        <Image
          src={content.src}
          alt={content.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="text-[20px] font-medium tracking-tight text-[#000000] mb-[10px]">
        {content.title}
      </div>
      <div className="text-[14px] *:mb-[14px]">
        <p>{content.desc}</p>
        <p>{content.location}</p>
      </div>
      <div className="absolute -bottom-60 left-0 grid grid-cols-6 w-80">
        <div className="col-span-5">
          <StripedBox />
        </div>
        <div className="col-span-2 col-start-6 row-start-4">
          <StripedBox />
        </div>
        <div className="col-start-5 row-start-6">
          <StripedBox />
        </div>
      </div>
    </div>
  );
}
