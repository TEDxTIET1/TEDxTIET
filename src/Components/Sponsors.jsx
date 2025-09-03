import FlowingMenu from "./FlowingMenu";
import "./Sponsors.css";

function Sponsors() {
  const demoItems = [
    {
      link: "#",
      text: "CET",
      image: "/Sponsors/CAN.jpg",
    },
    {
      link: "#",
      text: "NATURE",
      image: "/Sponsors/NATURE2.jpg",
    },
    {
      link: "#",
      text: "CHEERO'S",
      image: "/Sponsors/NEW.jpg",
    },
    {
      link: "#",
      text: "UNSTOP",
      image: "/Sponsors/unstop1.jpg",
    },
    {
      link: "#",
      text: "WHIZZKIN",
      image: "/Sponsors/WHIZZKIN.png",
    },
    {
      link: "#",
      text: "ÆTHOS",
      image: "/Sponsors/AE.jpg",
    },
  ];

  return (
    <>
      <div className="sponsors-page">
        <div className="sponsors-header">
          <h2>Our Sponsors</h2>
          <h3>
            Thank you to our amazing partners who make TEDx possible!
          </h3>
        </div>
        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
}

export default Sponsors;
