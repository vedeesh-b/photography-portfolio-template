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
    <div className="flex flex-col w-3/7 p-9 border-r-[0.25px] border-r-[#ABA8A2]">
      <Image
        src={content.src}
        alt={content.title}
        width={195}
        height={260}
        className="mb-[14px]"
      />
      <div className="text-[20px] font-medium tracking-tight text-[#000000] mb-[10px]">
        {content.title}
      </div>
      <div className="text-[14px] *:mb-[14px]">
        <p>{content.desc}</p>
        <p>{content.location}</p>
      </div>
      <div className="absolute -bottom-40 left-0 grid grid-cols-3">
        <div className="col-span-2">
          <StripedBox width={160} height={80} />
        </div>
        <div className="col-span-1 col-start-3 row-start-2">
          <StripedBox width={80} height={80} />
        </div>
        <div className="col-start-2 row-start-3">
          <StripedBox width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
