import "./App.css";
import headshot from "./assets/headshot.webp";
import osaka_castle from "./assets/jpn_osaka_castle.webp";
import lawson from "./assets/jpn_lawson.webp";
import cz_peacock from "./assets/cz_peacock.webp";
import yuki from "./assets/bcn_yuki.webp";
import jpn_bird from "./assets/jpn_bird.webp";
import bamboo from "./assets/jpn_bamboo.webp";
import starc from "./assets/gb_ms_bowling.webp";
import spire from "./assets/cz_spire.webp";
import spider from "./assets/goa_spider.webp";
import amr from "./assets/bcn_amr_rb.webp";

function App() {
  return (
    <>
      <div id="page-layout">
        <div id="grid-container">
          <img id="main-picture" src={headshot} alt="Headshot" />
          <div className="grid-elem" id="intro">
            <div className="title">Vedeesh Bali</div>
            <div className="subtitle" style={{ color: "#7B86B8" }}>
              Software Engineer by day, Photographer by night, Formula 1 fan
              always.
            </div>
            <div className="subtitle" style={{ color: "#1A237E" }}>
              VCARB Creator Portfolio
            </div>
          </div>
          <img src={osaka_castle} alt="Osaka Castle" className="grid-elem" />
          <img src={lawson} alt="Liam Lawson" className="grid-elem" />
          <img
            src={cz_peacock}
            alt="Peacock"
            className="grid-elem"
            style={{ gridArea: "5 / 7 / auto / span 2" }}
          />
          <div
            className="grid-elem"
            id="intro"
            style={{ gridArea: "6 / 1 / auto / span 2" }}
          >
            <div className="subtitle">
              I enjoy nature, travel, and sports photography. Since I've started
              watching F1, I've been hugely interested in motorsport photography
              specifically.
            </div>
          </div>
          <img
            src={yuki}
            alt="Yuki"
            className="grid-elem"
            style={{ gridArea: "6 / 3 / auto / span 4" }}
          />
          <img
            src={jpn_bird}
            alt="Bird"
            className="grid-elem"
            style={{ gridArea: "7 / 1 / auto / span 3" }}
          />
          <img
            src={bamboo}
            alt="Mountains"
            className="grid-elem"
            style={{ gridArea: "7 / 6 / auto / span 3" }}
          />
          <img
            src={starc}
            alt="Starc"
            className="grid-elem"
            style={{ gridArea: "8 / 1 / auto / span 3" }}
          />
          <img
            src={spire}
            alt="Spire"
            className="grid-elem"
            style={{ gridArea: "8 / 4 / auto / span 3" }}
          />
          <img
            src={starc}
            alt="Starc"
            className="grid-elem"
            style={{ gridArea: "8 / 1 / auto / span 3" }}
          />
          <img
            src={amr}
            alt="Starc"
            className="grid-elem"
            style={{ gridArea: "9 / 1 / auto / span 2" }}
          />
          <div
            className="grid-elem"
            id="intro"
            style={{
              gridArea: "9 / 3 / auto / span 3",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              color: "#1A237E",
            }}
          >
            <div className="subtitle">Contact: vedeesh18@gmail.com</div>
          </div>
          <img
            src={spider}
            alt="Spider"
            className="grid-elem"
            style={{ gridArea: "9 / 6 / auto / span 3" }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
