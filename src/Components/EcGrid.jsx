import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./EcGrid.css";
import Img1 from "../assets/gridimages/img1.webp";

import Img3 from "../assets/gridimages/img3.webp";
import Img4 from "../assets/gridimages/img4.webp";
import Img5 from "../assets/gridimages/img5.webp";
import Img6 from "../assets/gridimages/img6.webp";
import Img7 from "../assets/gridimages/img7.webp";
import Img8 from "../assets/gridimages/Img8.webp";
import Img9 from "../assets/gridimages/Img9.webp";

import Img11 from "../assets/gridimages/Img11.webp";
import Img12 from "../assets/gridimages/Img12.webp";
import Img13 from "../assets/gridimages/Img13.webp";
import Img14 from "../assets/gridimages/Img14.webp";
import Img15 from "../assets/gridimages/Img15.webp";
import Img16 from "../assets/gridimages/Img16.webp";
import Img17 from "../assets/gridimages/Img17.webp";
import Img18 from "../assets/gridimages/Img18.webp";
import Img19 from "../assets/gridimages/Img19.webp";
import Img20 from "../assets/gridimages/Img20.webp";
import Img21 from "../assets/gridimages/Img21.webp";
const dummyimages = [
Img5,Img6,Img7,Img8,Img9,Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21
];
const titles=[
"Puneet Kumar","Rohan Sharma","Poorva","Mehul Kujur","Pavni Goel","Khyati Goyal",
"Kaushik Arora","Daksh Sachdeva","Disha Verma","Anushka Pandey","Birapar Singh","Aniket Gupta","Aanya","Atishay Jain","Aastha Mahajan",
"Sanya"
]

export const EcGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Original 6 cards + 20 generated dummy cards = 26 total
  const demo = [
    {
      image: Img1,
      title: "Vrinda Chhabra",
      
 
      borderColor: "#e54646ff",
      gradient: "linear-gradient(145deg, #f15757ff, #000)",
      url: "https://github.com/",
    },
    
    // {
    //   image: screenshotImg3,
    //   title: "",
    
    //   borderColor: "#e1383eff",
    //   gradient: "linear-gradient(165deg, #e2353eff, #000)",
    //   url: "https://dribbble.com/",
    // },
    {
      image:Img3,
      title: "Surya Partap Singh",
      
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://kaggle.com/",
    },
    {
      image: Img4,
      title: "Shardool",
     
      borderColor: "#be3535ff",
      gradient: "linear-gradient(225deg, #b63e3eff, #000)",
      url: "https://github.com/",
      
    },
   
    // Generate 20 more dummy cards
    ...Array.from({ length: 16 }, (_, i) => ({
      image: dummyimages[i],
      title: titles[i],
      
      borderColor: ["#e54646ff", "#b91024ff", "#f50b3aff", "#f50b3aff", "#f50b3aff", "#f50b3aff"][
        i % 6
      ],
      gradient: `linear-gradient(${135 + (i * 10) % 360}deg, ${
        ["#f50b3aff", "#f50b3aff", "#f50b3aff", "#EF4444", "#f50b3aff", "#f50b3aff"][i % 6]
      }, #000)`,
      url: "https://example.com",
    })),
  ];
  

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          onClick={() => handleCardClick(c.url)}
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: c.url ? "pointer" : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default EcGrid;
