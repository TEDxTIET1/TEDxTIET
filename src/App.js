import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import HeroSection from "./Components/HeroSection";
import TestimonialSlider from "./Components/TestimonialSlider";
import CustomNavbar from "./Components/navbar";
import Cards from "./Components/Cards.jsx";
import ProfileCard from "./Components/ProfileCard.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Components/NotFound";
import Team from "./Components/Team.jsx";
import Sponsor from "./Components/Sponsor.jsx";
import Speaker from "./Components/Speaker.jsx";
import StatsOverview from "./Components/StatsOverview.jsx";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/aboutus") {
      // Redirects to home but scrolls to testimonials
      const testimonials = document.getElementById("testimonials");
      if (testimonials) {
        testimonials.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <ScrollHandler />

      <Routes>
        {/* Home page (full layout) */}
        <Route
          path="/"
          element={
            <>
              <header className="App-header">
                <HeroSection />
                <div id="testimonials"></div>
                <TestimonialSlider />
              </header>
              <StatsOverview/>
              <Cards />
              {/* <ProfileCard /> */}
              
              <Footer />
            </>
          }
        />

        {/* Redirect /aboutus → home */}
        <Route path="/aboutus" element={<Navigate to="/" />} />

        {/* Optional direct component routes */}
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/speakers" element={<Speaker />} />


        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
