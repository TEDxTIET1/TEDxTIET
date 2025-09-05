import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResponsiveCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cards = [
    {
      id: 1,
      title: "Nikhil Kamath",
      text: "The days of four-year college courses are over. Lifelong learning is the new norm—for everyone.",
      // author: "Nikhil Kamath",
      handle: "@nikhilkamathco",
      image: "/spk4.png",
      // caption: "Adventure Enthusiasts",
    },
    {
      id: 2,
      title: "Keshav Sadhna",
      text: "“Dreams don’t work unless you do. Consistency is the only way to turn passion into reality.” ",
      // author: "Keshav Sadhna",
      handle: "@keshavsadhna",
      image: "/spk2.jpeg",
    },
    {
      id: 3,
      title: "Harini Sivakumar",
      text: "“Every big change starts with small steps. Believe in yourself, even when no one else does.”",
      // author: "Harini Sivakumar",
      handle: "@harini_sivakumar",
      image: "/spk3.jpeg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: isMobile ? "5px" : "24px",
    backgroundColor: "black",
    fontFamily: "Helvetica, Inter Light, Arial, sans-serif",
  };

  const carouselStyle = {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    minHeight: isMobile ? "500px" : "60vh",
  };

  const slidesContainerStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    height: "100%",
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const slideStyle = {
    width: "100%",
    flexShrink: 0,
    height: "100%",
  };

  const slideContentStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    height: "100%",
    minHeight: isMobile ? "500px" : "500px",
  };

  const textSectionStyle = {
    width: isMobile ? "100%" : "70%",
    padding: isMobile ? "20px" : "32px",
    paddingLeft: isMobile ? "20px" : "80px",
    paddingRight: isMobile ? "20px" : "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    height: "100%",
    overflow: "visible",
    order: isMobile ? 2 : 1,
  };

  const quoteBackgroundStyle = {
    position: "absolute",
    top: isMobile ? "-80px" : "-130px",
    left: "10px",
    width: isMobile ? "120px" : "200px",
    height: isMobile ? "190px" : "300px",
    zIndex: 1,
    pointerEvents: "none",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "scale(0.8) rotate(-15deg)"
      : "scale(1) rotate(0deg)",
    transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  const contentStyle = {
    marginBottom: "24px",
    position: "relative",
    zIndex: 10,
  };

  const headingStyle = {
    fontSize: isMobile ? "1.25rem" : isTablet ? "1.75rem" : "2rem",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#374151",
    lineHeight: 1.4,
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(30px) scale(0.95)"
      : "translateY(0) scale(1)",
    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "200ms",
  };

  const bodyTextStyle = {
    color: "#374151",
    fontSize: isMobile ? "1rem" : isTablet ? "1.25rem" : "1.5rem",
    lineHeight: 1.7,
    marginBottom: "28px",
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(25px) translateX(-10px)"
      : "translateY(0) translateX(0)",
    transition: "all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionDelay: isAnimating ? "0ms" : "600ms",
  };

  const authorStyle = {
    color: "#374151",
    fontSize: "1rem",
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(20px) rotate(-2deg)"
      : "translateY(0) rotate(0deg)",
    transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "1000ms",
  };

  const authorNameStyle = {
    fontWeight: "600",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    marginBottom: "6px",
    transform: isAnimating ? "scale(0.95)" : "scale(1)",
    transition: "transform 0.5s ease-out",
    transitionDelay: isAnimating ? "0ms" : "1100ms",
  };

  const authorHandleStyle = {
    color: "#6b7280",
    fontSize: isMobile ? "0.7rem" : "0.75rem",
    transform: isAnimating ? "translateX(-5px)" : "translateX(0)",
    transition: "transform 0.6s ease-out",
    transitionDelay: isAnimating ? "0ms" : "1200ms",
  };

  const imageSectionStyle = {
    width: isMobile ? "100%" : "50%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "12px" : "12px",
    flexDirection: "column",
    order: isMobile ? 1 : 2,
  };

  const squareImageStyle = {
    width: isMobile ? "280px" : isTablet ? "350px" : "460px",
    height: isMobile ? "300px" : isTablet ? "380px" : "480px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: isAnimating
      ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    border: "4px solid white",
    position: "relative",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "scale(0.85) translateX(20px)"
      : "scale(1) translateX(0)",
    transition: "all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "300ms",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const captionStyle = {
    position: "absolute",
    bottom: "0",
    left: "25%",
    right: "0",
    textAlign: "center",
    fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.45rem",
    fontWeight: "700",
    color: "rgba(55, 65, 81, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    backdropFilter: "blur(100px)",
    padding: "12px 16px",
    borderTopLeftRadius: "9px",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateX(100%)" : "translateX(0)",
    transition: "all 1s cubic-bezier(0.34, 0.56, 0.64, 0.9)",
    transitionDelay: isAnimating ? "0ms" : "400ms",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    backgroundColor: "rgba(234, 22, 22, 0.8)",
    border: "none",
    padding: "1px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 0.56, 0.64, 0.9)",
    fontSize: "1.5rem",
    color: "white",
    zIndex: 100,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    width: isMobile ? "30px" : "35px",
    height: isMobile ? "40px" : "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftNavButtonStyle = {
    ...navButtonStyle,
    left: isMobile ? "12px" : "24px",
  };

  const rightNavButtonStyle = {
    ...navButtonStyle,
    right: isMobile ? "12px" : "24px",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    gap: "8px",
  };

  const dotStyle = {
    width: isMobile ? "10px" : "12px",
    height: isMobile ? "10px" : "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: "#ef4444",
    transform: "scale(1.25)",
  };

  const inactiveDotStyle = {
    ...dotStyle,
    backgroundColor: "#d1d5db",
  };

  const counterStyle = {
    textAlign: "center",
    marginTop: "16px",
    color: "#6b7280",
    fontSize: isMobile ? "0.875rem" : "1rem",
  };

  const activeCounterStyle = {
    fontWeight: "600",
    color: "#ef4444",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        minWidth: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={containerStyle}>
        <h1
          style={{
            fontFamily: "Myfont2, sans-serif",
            color: 'red',
            fontSize: '4rem'
          }}
        >
          Past Speaker
        </h1>

        <style>
          {`
    @font-face {
      font-family: "Myfont2";
      src: url(data:font/opentype;base64,PUT-YOUR-BASE64-HERE) format("opentype");
    }
  `}
        </style>

        <div style={carouselStyle}>
          <button
            onClick={prevSlide}
            style={leftNavButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = " scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = " scale(1)";
            }}
          >
            <ChevronLeft size={isMobile ? 16 : 24} color="white" />
          </button>

          <button
            onClick={nextSlide}
            style={rightNavButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = " scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = " scale(1)";
            }}
          >
            <ChevronRight size={isMobile ? 16 : 24} color="white" />
          </button>

          <div style={slidesContainerStyle}>
            {cards.map((testimonial) => (
              <div key={testimonial.id} style={slideStyle}>
                <div style={slideContentStyle}>
                  <div style={textSectionStyle}>
                    <div style={quoteBackgroundStyle}>
                      <img
                        src="/quote.svg"
                        alt=""
                        style={{
                          width: isMobile ? "120px" : "200px",
                          height: isMobile ? "120px" : "200px",
                        }}
                      />
                    </div>
                    <div style={contentStyle}>
                      <h3 style={headingStyle}>{testimonial.title}</h3>

                      <p style={bodyTextStyle}>{testimonial.text}</p>
                      <div style={authorStyle}>
                        <p style={authorNameStyle}>{testimonial.author}</p>
                        <p style={authorHandleStyle}>{testimonial.handle}</p>
                      </div>
                    </div>
                  </div>
                  <div style={imageSectionStyle}>
                    <div style={squareImageStyle}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        style={imageStyle}
                        onError={(e) => {
                          e.target.style.background =
                            "linear-gradient(135deg, #fed7aa, #fef3c7, #bbf7d0)";
                          e.target.style.display = "flex";
                          e.target.style.alignItems = "center";
                          e.target.style.justifyContent = "center";
                          e.target.innerHTML = "👥";
                          e.target.style.fontSize = isMobile ? "3rem" : "4rem";
                        }}
                      />
                      {/* <div style={captionStyle}>{testimonial.caption}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={dotsContainerStyle}>
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={index === currentIndex ? activeDotStyle : inactiveDotStyle}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.4)")}
              onMouseLeave={(e) =>
              (e.target.style.transform =
                index === currentIndex ? "scale(1.25)" : "scale(1)")
              }
            />
          ))}
        </div>

        <div style={counterStyle}>
          <span style={activeCounterStyle}>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          {" • "}
          <span>{String(cards.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
