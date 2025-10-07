const ImgWidth = {
  small: 2,
  medium: 3,
  large: 4,
};

export const galleries = {
  nature: {
    pageTitle: "Nature",
    pageDescription:
      "Flora and fauna photographed in their native elements across land, water, and air.",
    imgs: [
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_fuji.webp",
        title: "Fuji-san",
        key: "001",
        span: ImgWidth.small,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/brighton_seagull.webp",
        title: "Dented beak",
        key: "002",
        span: ImgWidth.large,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/goa_spider.webp",
        title: "Tree Wide Web",
        key: "003",
        span: ImgWidth.medium,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_bamboo.webp",
        title: "Whispering Bamboo",
        key: "004",
        span: ImgWidth.medium,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_bird.webp",
        title: "Branch of Blossoms",
        key: "005",
        span: ImgWidth.small,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/cz_peacock.webp",
        title: "Crown",
        key: "006",
        span: ImgWidth.small,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/jpn_deer.webp",
        title: "Deep Trance",
        key: "007",
        span: ImgWidth.small,
      },
      {
        src: "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images/brighton_sea.webp",
        title: "Sea the Wave",
        key: "008",
        span: ImgWidth.medium,
      },
    ],
  },
  sport: {
    pageTitle: "Sport",
    pageDescription:
      "Extracting peak performance and competitive spirit from racing circuits to grass pitches.",
    imgs: [],
  },
  travel: {
    pageTitle: "Travel",
    pageDescription:
      "Select snapshots from my recent trips across Europe and Asia.",
    imgs: [],
  },
};

export type Category = keyof typeof galleries;
