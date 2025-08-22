import FlowingMenu from "./blocks/Components/FlowingMenu/FlowingMenu";
import "./App.css";

function App() {
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
      <div className="bg-black min-h-screen relative h-[1000px]">
        <div className="text-center pt-16 pb-8">
          <h2 className="text-white text-6xl font-bold tracking-wider">
            Our Sponsors
          </h2>
          <h3 className="mt-4">
            Thank you to our amazing partners who make TEDx possible!
          </h3>
        </div>
        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
}

export default App;