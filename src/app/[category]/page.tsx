import { use } from "react";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  return (
    <div>
      <p>{category}</p>
    </div>
  );
}
