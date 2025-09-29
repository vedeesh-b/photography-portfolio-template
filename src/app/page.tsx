import Image from "next/image";
import Parallax from "./ui/parallax";
import StripedBox from "./ui/stripedPattern";

export default function Home() {
  const quote =
    "I’m drawn to subjects characterised by energy and unpredictability. Recently, this has expanded to include the unique composition and perspective offered by cityscapes and architecture.";

  const images = [
    {
      title: "Nature",
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/cz_peacock.webp",
      id: "002",
      width: 230,
      height: 300,
    },
    {
      title: "Sport",
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/gb_kn_duck.webp",
      id: "016",
      width: 230,
      height: 300,
    },
    {
      title: "Travel",
      src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_bamboo.webp",
      id: "029",
      width: 600,
      height: 450,
    },
  ];

  return (
    <div className="p-9">
      <div className="grid grid-cols-8 gap-8 items-stretch mb-[15vh]">
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`flex flex-col ${
              i === 2 ? "col-span-4" : "col-span-2"
            } justify-end`}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={img.width}
              height={img.height}
              className="w-full object-contain"
            />
            <div className="flex justify-between w-full text-sm mt-2">
              <span className="text-[#000000]">{img.title}</span>
              <span className="text-[#807D79]">{img.id}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="font-serif font-medium leading-[40px] tracking-[-0.025em] text-[#403F3C] text-[30px] mb-[5vh] z-100">
        {quote}
        <div className="grid grid-cols-2">
          <div>
            <StripedBox height={60} width={80} />
          </div>
          <div className="row-start-2">
            <StripedBox height={40} width={80} />
          </div>
        </div>
      </div>
      <Parallax />
    </div>
  );
}
