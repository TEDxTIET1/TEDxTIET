import React, { useEffect } from "react";
import "./EventDetails.css";

const EventDetails = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-circle");
    const section = document.querySelector(".event-details");

    if (!cursor || !section) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const moveCursor = (e) => {
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      // Smooth easing for natural movement
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursor.style.transform = `translate(${currentX - 110}px, ${currentY - 160}px)`; 
      requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      section.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <section className="event-details" id="event">
      <div className="cursor-circle"></div>

      <div className="event-container">
        <h2 className="event-title">TEDx Conference 2025</h2>
        <p className="event-tagline">The Unseen Dimensions</p>

        <div className="event-info">
          <p><strong>Date:</strong> 1 Nov 2025</p>
          <p><strong>Time:</strong> 2 PM</p>
          <p><strong>Venue:</strong> Main Auditorium</p>
        </div>

        <a
          href="/event"
          className="register-btn"
        >
          View Details
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
