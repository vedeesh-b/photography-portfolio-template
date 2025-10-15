import { notFound } from "next/navigation";
import { Category, galleries } from "../lib/galleryData";
import Image from "next/image";
import Breadcrumbs from "../ui/breadcrumb";

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

  const spanClassMap: Record<number, string> = {
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
  };

  return (
    <div className="p-9 w-full">
      <Breadcrumbs current={category} />
      <p className="font-sans font-semibold leading-[70px] tracking-[-0.05em] text-[#000] text-[70px] mb-[10vh]">
        {categoryGallery.pageTitle}
      </p>
      <div className="sm:flex sm:flex-col sm:gap-12 md:grid md:grid-cols-6 md:gap-12 md:auto-rows-fr">
        {categoryGallery.imgs?.map((img) => (
          <div
            className={`w-full ${spanClassMap[img.span]} relative`}
            key={img.key}
          >
            <div className="w-full h-[440px] relative">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex justify-between text-sm mt-3">
              <span className="text-[#000000]">{img.title}</span>
              <span className="text-[#807D79]">{img.key}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
