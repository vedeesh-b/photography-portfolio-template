import "./components.css";
import headshot from "../assets/headshot.webp";

export const MobileLandingSection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <img src={headshot} alt="Headshot" />
        <div>
          <div className="heading" style={{ marginBottom: "24px" }}>
            Vedeesh Bali
          </div>
          <div className="body" style={{ maxWidth: "25ch" }}>
            front-end engineer <i className="lab la-react" /> who enjoys
            photography <i className="las la-camera" /> on the side.
          </div>
        </div>
        <div className="icon-flex" style={{ marginBottom: "2rem" }}>
          <div className="link">
            <div
              className="text"
              style={{ fontSize: "14px", lineHeight: "22px" }}
            >
              email
            </div>
          </div>
          <div className="link">
            <div
              className="text"
              style={{ fontSize: "14px", lineHeight: "22px" }}
            >
              website
            </div>
          </div>
          <div className="link">
            <div
              className="text"
              style={{ fontSize: "14px", lineHeight: "22px" }}
            >
              linkedin
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LandingSection = () => {
  return (
    <>
      <div className="grid-elem headshot">
        <img src={headshot} alt="Headshot" />
      </div>
      <div className="grid-elem sm">
        <div className="text-flex">
          <div>
            <div className="heading">Vedeesh Bali</div>
            <div className="body">
              front-end engineer <i className="lab la-react" /> who enjoys
              photography <i className="las la-camera" /> on the side.
            </div>
          </div>
          <div className="icon-flex">
            <div className="link">
              <div className="text">email</div>
            </div>
            <div className="link">
              <div className="text">website</div>
            </div>
            <div className="link">
              <div className="text">linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
