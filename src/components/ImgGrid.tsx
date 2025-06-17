import "./components.css";
import { gridPlacements, imgSizes } from "./GridPlacement";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Tabs from "./Tabs";
import LandingSection, { MobileLandingSection } from "./LandingSection";

export type ImageSetType = { src: string; alt: string }[];
export type CategoryName = "nature" | "travel" | "sport";

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
