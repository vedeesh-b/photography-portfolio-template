const ImgWidth = {
  small: 2,
  medium: 3,
  large: 4,
};

const source: string =
  "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images";

export const galleries = {
  nature: {
    pageTitle: "Nature",
    pageDescription:
      "Flora and fauna photographed in their native elements across land, water, and air.",
    imgs: [
      {
        src: `${source}/jpn_fuji.webp`,
        title: "Fuji-san",
        span: ImgWidth.small,
      },
      {
        src: `${source}/brighton_seagull.webp`,
        title: "Dented beak",
        span: ImgWidth.large,
      },
      {
        src: `${source}/goa_spider.webp`,
        title: "Tree Wide Web",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_bamboo.webp`,
        title: "Whispering Bamboo",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_bird.webp`,
        title: "Branch of Blossoms",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_peacock.webp`,
        title: "Crown",
        span: ImgWidth.small,
      },
      {
        src: `${source}/jpn_deer.webp`,
        title: "Deep Trance",
        span: ImgWidth.small,
      },
      {
        src: `${source}/brighton_sea.webp`,
        title: "Sea the Wave",
        span: ImgWidth.medium,
      },
    ],
  },
  sport: {
    pageTitle: "Sport",
    pageDescription:
      "Extracting peak performance and competitive spirit from racing circuits to grass pitches.",
    imgs: [
      {
        src: `${source}/gb_klr_century.webp`,
        title: "KLR 100",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_correa.webp`,
        title: "Correa's Podium",
        span: ImgWidth.large,
      },
      {
        src: `${source}/bcn_cs55_flag.webp`,
        title: "Red Banc Sabadell",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/gb_ms_bowling.webp`,
        title: "Starc Pace",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/gb_kn_duck.webp`,
        title: "First Bouncer",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_amr_rb.webp`,
        title: "Pair of Astons",
        span: ImgWidth.small,
      },
      {
        src: `${source}/gb_nkr_batting.webp`,
        title: "Reddy Defends",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_yuki.webp`,
        title: "Tsunoda on the Apex",
        span: ImgWidth.large,
      },
      {
        src: `${source}/bcn_piastri.webp`,
        title: "Papaya La Caixa",
        span: ImgWidth.small,
      },
      {
        src: `${source}/gb_klr_batting.webp`,
        title: "Stance",
        span: ImgWidth.medium,
      },
    ],
  },
  travel: {
    pageTitle: "Travel",
    pageDescription:
      "Select snapshots from my recent trips across Europe and Asia.",
    imgs: [
      {
        src: `${source}/jpn_osaka_castle.webp`,
        title: "Osaka Castle at Night",
        span: ImgWidth.small,
      },
      {
        src: `${source}/mlt_dingli_lighthouse.webp`,
        title: "The Lighthouse",
        span: ImgWidth.large,
      },

      {
        src: `${source}/mlt_dingli_sunset.webp`,
        title: "Through the Gate",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_tokyo_street.webp`,
        title: "Dark Mode",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_shibuya_street.webp`,
        title: "Shibuya Signs",
        span: ImgWidth.small,
      },
      {
        src: `${source}/jpn_daruma_sakura.webp`,
        title: "Spot the Doll",
        span: ImgWidth.small,
      },
      {
        src: `${source}/mlt_mdina.webp`,
        title: "Bird's Eye View Mdina",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_castle_view.webp`,
        title: "From Prague Castle",
        span: ImgWidth.large,
      },
      {
        src: `${source}/jpn_darumas.webp`,
        title: "Darumas amongst Clouds",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_spire.webp`,
        title: "Focal Point",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/mlt_birgu_port.webp`,
        title: "Birgu Port",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/cz_church.webp`,
        title: "Czech Cross",
        span: ImgWidth.small,
      },
      {
        src: `${source}/ams_zs.webp`,
        title: "Mills by the River",
        span: ImgWidth.large,
      },
    ],
  },
} as const;

export type Category = keyof typeof galleries;
