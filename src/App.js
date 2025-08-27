import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import TestimonialSlider from "./Components/TestimonialSlider";
import CustomNavbar from "./Components/navbar";
import Cards from "./Components/Cards.jsx";

import ProfileCard from "./Components/ProfileCard.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <TestimonialSlider />
      </header>
      <Cards />

      <ProfileCard />
      <Footer />
    </div>
  );
}

export default App;
