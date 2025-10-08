import { notFound } from "next/navigation";
import { Category, galleries } from "../lib/galleryData";
import Image from "next/image";

export async function generateStaticParams() {
  return Object.keys(galleries).map((category) => ({ category }));
}

type CategoryPageProps = {
  params: {
    category: Category;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  if (!(category in galleries)) {
    notFound();
  }

  const categoryGallery = galleries[category];

  return (
    <div className="p-9 w-full">
      <p className="font-serif font-medium leading-[40px] tracking-[-0.025em] text-[#403F3C] text-[30px] mb-[3vh]">
        {categoryGallery.pageTitle}
      </p>
      <p className="text-[14px] *:mb-[14px]">
        {categoryGallery.pageDescription}
      </p>
      <div className="grid grid-cols-6 gap-6 auto-rows-fr">
        {categoryGallery.imgs?.map((img) => (
          <div className={`col-span-${img.span} relative`} key={img.key}>
            <div className="w-full h-[300px] relative">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-[#000000]">{img.title}</span>
              <span className="text-[#807D79]">{img.key}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
