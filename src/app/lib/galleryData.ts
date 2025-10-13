const ImgWidth = {
  small: 2,
  medium: 3,
  large: 4,
};

const source = "https://kj36h7e7wv1p9gx0.public.blob.vercel-storage.com/images";

export const galleries = {
  nature: {
    pageTitle: "Nature",
    pageDescription:
      "Flora and fauna photographed in their native elements across land, water, and air.",
    imgs: [
      {
        src: `${source}/jpn_fuji.webp`,
        title: "Fuji-san",
        key: "001",
        span: ImgWidth.small,
      },
      {
        src: `${source}/brighton_seagull.webp`,
        title: "Dented beak",
        key: "002",
        span: ImgWidth.large,
      },
      {
        src: `${source}/goa_spider.webp`,
        title: "Tree Wide Web",
        key: "003",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_bamboo.webp`,
        title: "Whispering Bamboo",
        key: "004",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_bird.webp`,
        title: "Branch of Blossoms",
        key: "005",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_peacock.webp`,
        title: "Crown",
        key: "006",
        span: ImgWidth.small,
      },
      {
        src: `${source}/jpn_deer.webp`,
        title: "Deep Trance",
        key: "007",
        span: ImgWidth.small,
      },
      {
        src: `${source}/brighton_sea.webp`,
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
    imgs: [
      {
        src: `${source}/gb_klr_century.webp`,
        title: "KLR 100",
        key: "009",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_correa.webp`,
        title: "Correa's Podium",
        key: "010",
        span: ImgWidth.large,
      },
      {
        src: `${source}/bcn_cs55_flag.webp`,
        title: "Red Banc Sabadell",
        key: "011",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/gb_ms_bowling.webp`,
        title: "Starc Pace",
        key: "012",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/gb_kn_duck.webp`,
        title: "First Bouncer",
        key: "013",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_amr_rb.webp`,
        title: "Pair of Astons",
        key: "014",
        span: ImgWidth.small,
      },
      {
        src: `${source}/gb_nkr_batting.webp`,
        title: "Reddy Defends",
        key: "015",
        span: ImgWidth.small,
      },
      {
        src: `${source}/bcn_yuki.webp`,
        title: "Tsunoda on the Apex",
        key: "016",
        span: ImgWidth.large,
      },
      {
        src: `${source}/bcn_piastri.webp`,
        title: "Papaya La Caixa",
        key: "017",
        span: ImgWidth.small,
      },
      {
        src: `${source}/gb_klr_batting.webp`,
        title: "Stance",
        key: "018",
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
        key: "019",
        span: ImgWidth.small,
      },
      {
        src: `${source}/ams_zs.webp`,
        title: "Mills by the River",
        key: "020",
        span: ImgWidth.large,
      },
      {
        src: `${source}/cz_spire.webp`,
        title: "Focal Point",
        key: "021",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_tokyo_street.webp`,
        title: "Dark Mode",
        key: "022",
        span: ImgWidth.medium,
      },
      {
        src: `${source}/jpn_shibuya_street.webp`,
        title: "Shibuya Signs",
        key: "023",
        span: ImgWidth.small,
      },
      {
        src: `${source}/jpn_daruma_sakura.webp`,
        title: "Spot the Doll",
        key: "024",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_church.webp`,
        title: "Czech Cross",
        key: "025",
        span: ImgWidth.small,
      },
      {
        src: `${source}/cz_castle_view.webp`,
        title: "From Prague Castle",
        key: "026",
        span: ImgWidth.large,
      },
      {
        src: `${source}/jpn_darumas.webp`,
        title: "Darumas amongst Clouds",
        key: "027",
        span: ImgWidth.small,
      },
      {
        src: `${source}/jpn_octopus.webp`,
        title: "Takoyaki",
        key: "028",
        span: ImgWidth.medium,
      },
    ],
  },
};

export type Category = keyof typeof galleries;
