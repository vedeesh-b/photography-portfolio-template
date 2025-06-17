import "./components.css";
import { gridPlacements, imgSizes } from "./GridPlacement";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import fuji from "../assets/jpn_fuji.webp";
import peacock from "../assets/cz_peacock.webp";
import bamboo from "../assets/jpn_bamboo.webp";
import bird from "../assets/jpn_bird.webp";
import deer from "../assets/jpn_deer.webp";
import seagull from "../assets/brighton_seagull.webp";
import goa from "../assets/goa_spice_plantation.webp";
import sea from "../assets/brighton_sea.webp";
import spider from "../assets/goa_spider.webp";

import shibuya from "../assets/jpn_shibuya_street.webp";
import osaka_castle from "../assets/jpn_osaka_castle.webp";
import spire from "../assets/cz_spire.webp";
import daruma from "../assets/jpn_daruma_sakura.webp";
import skytree from "../assets/jpn_skytree.webp";
import ams_river from "../assets/ams_river.webp";
import windmills from "../assets/ams_zs.webp";
import kyoto_street from "../assets/jpn_kyoto_street.webp";
import tokyo_street from "../assets/jpn_tokyo_street.webp";
import prague_view from "../assets/cz_castle_view.webp";
import octopus from "../assets/jpn_octopus.webp";
import church from "../assets/cz_church.webp";
import vauxhall from "../assets/gb_vauxhall.webp";

import klr_hundred from "../assets/gb_klr_century.webp";
import amr from "../assets/bcn_amr_rb.webp";
import nkr_batting from "../assets/gb_nkr_batting.webp";
import cs55_flag from "../assets/bcn_cs55_flag.webp";
import kn_duck from "../assets/gb_kn_duck.webp";
import correa from "../assets/bcn_correa.webp";
import yuki from "../assets/bcn_yuki.webp";
import klr_glance from "../assets/gb_klr_glance.webp";
import starc from "../assets/gb_ms_bowling.webp";
import gr_cl from "../assets/bcn_gr_cl.webp";
import klr_batting from "../assets/gb_klr_batting.webp";
import piastri from "../assets/bcn_piastri.webp";
import ybj from "../assets/gb_ybj_batting.webp";
import Tabs from "./Tabs";
import LandingSection, { MobileLandingSection } from "./LandingSection";

const imageSets = {
  nature: [
    {
      src: fuji,
      alt: "Mount Fuji peeking through the sunset clouds at Zushi Beach in Kanagawa, Japan.",
    },
    {
      src: peacock,
      alt: "A vibrant blue peafowl peacock strutting around.",
    },
    {
      src: bamboo,
      alt: "Sunlight filtering through a serene bamboo forest in Kyoto, Japan.",
    },
    {
      src: bird,
      alt: "Eurasian sparrow perched in a cherry blossom tree.",
    },
    {
      src: deer,
      alt: "Meditating deer in the Nara Deer Park, Japan.",
    },
    {
      src: seagull,
      alt: "Herring Gull taking in some sun at Brighton beach.",
    },
    {
      src: goa,
      alt: "Lush green tropical spice plantation in Goa, India.",
    },
    {
      src: sea,
      alt: "Gentle ocean waves splashing onto a dark, sandy shore.",
    },
    {
      src: spider,
      alt: "An orb weaver spider making itself at home in a Goan forest.",
    },
  ],
  travel: [
    {
      src: shibuya,
      alt: "Evening in the bustling Shibuya ward in Tokyo, Japan.",
    },
    {
      src: osaka_castle,
      alt: "A glimpse of Osaka Castle at night. Pleasing contrast between the castle lights and the dark sky.",
    },
    {
      src: spire,
      alt: "A spire part of the National Museum in Prague, Czech Republic.",
    },
    {
      src: daruma,
      alt: "Daruma doll placed carefully on a branch of a cherry blossom tree in Katsuoji, Japan.",
    },
    {
      src: skytree,
      alt: "Tokyo Skytree showing a bird's eye view of the city during sunset.",
    },
    {
      src: ams_river,
      alt: "Amsterdam's waterfront along the IJ, a water body connecting the city with Germany and Belgium.",
    },
    {
      src: windmills,
      alt: "A peaceful day in Zaanse Schans featuring its historic windmills.",
    },
    {
      src: kyoto_street,
      alt: "Driving through dusk past Kyoto's markets.",
    },
    {
      src: tokyo_street,
      alt: "The famous streets of Shibuya, Tokyo illuminated by its trademark neon signs.",
    },
    {
      src: prague_view,
      alt: "Bird's eye view of Prague, Czech Republic from the Prague Castle.",
    },
    {
      src: octopus,
      alt: "Takoyaki restaurant in Dotonbori, Osaka. Unique restaurant decor.",
    },
    {
      src: church,
      alt: "The Church of St Francis of Assissi peaking through leaves in Prague, Czech Republic.",
    },
    {
      src: vauxhall,
      alt: "Upward view of modern skyscrapers and infrastructure in Vauxhall, London.",
    },
  ],
  sport: [
    {
      src: klr_hundred,
      alt: "KL Rahul of India A raising his bat to celebrate his century in the Northampton warm-up test.",
    },
    {
      src: amr,
      alt: "Fernando Alonso of Aston Martin Racing, closely followed by teammate Lance Stroll and RB's Yuki Tsunoda in Barcelona.",
    },
    {
      src: cs55_flag,
      alt: "Scuderia Ferrari's Charles Leclerc and Carlos Sainz peeking through a fan raising their flag in support.",
    },
    {
      src: nkr_batting,
      alt: "Nitish Kumar Reddy of India A plods forward to defend a delivery during the Northampton warm-up test.",
    },
    {
      src: kn_duck,
      alt: "Karun Nair of India A ducking to a bouncer en route to his innings of 40 against the England Lions.",
    },
    {
      src: correa,
      alt: "Juan Manuel Correa racing in Formula 2 for DAMS Lucas Oil. He is waving to the crowd acknowledging the applause for finishing 3rd in the feature race.",
    },
    {
      src: yuki,
      alt: "RB's Yuki Tsunoda cruising around the Circuit de Barcelona-Catalunya during the 2024 Spanish Grand Prix.",
    },
    {
      src: klr_glance,
      alt: "KL Rahul glancing a delivery down to fine leg en route to his 116 in the second warm-up test against the England Lions.",
    },
    {
      src: starc,
      alt: "Australia's Mitchell Starc bowling a delivery during the World Test Championship Final in 2023. Ajinkya Rahane watches on from the non-striker's end.",
    },
    {
      src: gr_cl,
      alt: "Mercedes' George Russell being chased down by Ferrari's Charles Leclerc for fourth place during the last lap of the 2024 Spanish Grand Prix.",
    },
    {
      src: klr_batting,
      alt: "KL Rahul takes stance before facing a delivery from England Lions' Chris Woakes.",
    },
    {
      src: piastri,
      alt: "Oscar Piastri of McLaren driving around in the third Free Practice session of the 2024 Spanish Grand Prix.",
    },
    {
      src: ybj,
      alt: "Yashasvi Jaiswal of India A gets dismissed LBW off England Lions' Chris Woakes for 17.",
    },
  ],
};

export type ImageSetType = { src: string; alt: string }[];
export type CategoryName = keyof typeof imageSets;

function ImgGrid() {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryName>("nature");

  const [currentImages, setCurrentImages] = useState<ImageSetType>([]);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    async function loadImages() {
      let images: ImageSetType = [];
      switch (currentCategory) {
        case "nature":
          images = (await import("./img/NatureImages")).default;
          break;
        case "travel":
          images = (await import("./img/TravelImages")).default;
          break;
        case "sport":
          images = (await import("./img/SportImages")).default;
          break;
      }
      setCurrentImages(images);
    }

    loadImages();
  }, [currentCategory]);

  const desktopImgs = currentImages.map((img, key) => (
    <img
      src={img.src}
      alt={img.alt}
      key={key}
      width={imgSizes[key].width}
      loading={currentCategory === "nature" ? "eager" : "lazy"}
      fetchPriority={currentCategory === "nature" ? "high" : "auto"}
      style={{ gridArea: gridPlacements[key] }}
    />
  ));

  const mobileImgs = (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {currentImages.map((img, key) => (
        <img src={img.src} alt={img.alt} key={key} loading="lazy" />
      ))}
    </div>
  );

  return (
    <div id="page-layout">
      <div id={isDesktop ? "grid-container" : ""}>
        {isDesktop ? <LandingSection /> : <MobileLandingSection />}
        <div
          className="text-flex"
          style={{
            gridArea: "4 / 1 / span 1 / span 4",
            height: isDesktop ? "180px" : "100px",
            alignItems: "stretch",
            justifyContent: "space-between",
            marginBottom: isDesktop ? "0px" : "1rem",
          }}
        >
          <div className="body">Based in London, United Kingdom</div>
          <Tabs activeTab={currentCategory} setActiveTab={setCurrentCategory} />
        </div>
        {isDesktop ? desktopImgs : mobileImgs}
      </div>
    </div>
  );
}

export default ImgGrid;
