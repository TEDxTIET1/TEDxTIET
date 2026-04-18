import React, { useEffect, useRef } from "react";
import "./EventDetails.css";

const EventDetails = () => {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const section = sectionRef.current;

    if (!cursor || !section) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let animationFrameId;

    const moveCursor = (e) => {
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      const offsetX = cursor.offsetWidth / 2;
      const offsetY = cursor.offsetHeight / 2;

      cursor.style.transform = `translate(${currentX - offsetX}px, ${currentY - offsetY}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      section.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="event-details" id="event" ref={sectionRef}>
      <div className="cursor-circle" ref={cursorRef}></div>

      <div className="event-container">
        <h2 className="event-title">RED DAY 2026</h2>
        <p className="event-tagline">Moments that shape us</p>

        <div className="event-info">
          <p><strong>Date:</strong> 20 April 2026</p>
          <p><strong>Time:</strong> 4:30 PM</p>
          <p><strong>Venue:</strong> Main Auditorium</p>
        </div>

        <a
          href="https://unstop.com/o/J4DHu2p?utm_medium=Share&utm_source=tedxsoc5964&utm_campaign=Competitions"
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default EventDetails;