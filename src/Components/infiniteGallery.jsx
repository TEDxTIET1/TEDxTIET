import React, { useEffect, useRef, useState } from "react";
import "./infiniteGallery.css";

// Each column has its own set of images
const columnImageSets = [
  ["/Sponsors2/16.png.jpeg", "/Sponsors2/13.jpg", "/Sponsors2/14.png.jpeg"],
  ["/Sponsors2/15.png.jpeg", "/Sponsors2/17.jpeg", "/Sponsors2/18.png.jpeg"],
  ["/Sponsors2/20.png.jpeg", "/Sponsors2/13.jpg", "/Sponsors2/18.png.jpeg"],
];

export default function InfiniteGallery() {
  const containerRef = useRef(null);
  const touchStartRef = useRef({ x: null, y: null });
  const activeColRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [offsets, setOffsets] = useState([0]); // at least one column

  // Detect screen size
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind "md" breakpoint
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Prevent page scroll while gallery is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Layout constants
  const imageHeight = 288; // 18rem equivalent
  const gap = 32; // 2rem equivalent
  const totalItemHeight = imageHeight + gap;
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  // Build column arrays
  const basePerColumnCount = Math.max(
    4,
    Math.ceil(viewportHeight / totalItemHeight) + 2
  );

  const baseColumns = (() => {
    if (isMobile) {
      // Merge all into one big column
      const allImgs = columnImageSets.flat();
      const repeated = [];
      for (let i = 0; i < basePerColumnCount; i++) {
        repeated.push(allImgs[i % allImgs.length]);
      }
      return [repeated];
    } else {
      // Normal multi-column
      return columnImageSets.map((columnImages) => {
        const repeated = [];
        for (let i = 0; i < basePerColumnCount; i++) {
          repeated.push(columnImages[i % columnImages.length]);
        }
        return repeated;
      });
    }
  })();

  // Sync offsets when switching mobile/desktop
  useEffect(() => {
    setOffsets(Array.from({ length: baseColumns.length }, () => 0));
  }, [isMobile, baseColumns.length]);

  // --- Active column helpers ---
  const getActiveColumnFromX = (x) => {
    const el = containerRef.current;
    if (!el) return activeColRef.current;
    const rect = el.getBoundingClientRect();
    const relX = Math.min(Math.max(x - rect.left, 0), rect.width - 1);
    const widthPerCol = rect.width / baseColumns.length;
    return Math.min(
      baseColumns.length - 1,
      Math.max(0, Math.floor(relX / widthPerCol))
    );
  };

  const applyDelta = (deltaY) => {
    setOffsets((prev) =>
      prev.map((off, i) => {
        const dist = Math.abs(i - activeColRef.current);
        const factor = isMobile ? 1 : Math.max(0.3, 1 - 0.4 * dist); // full scroll on mobile
        return off + deltaY * factor;
      })
    );
  };

  // --- Event handlers ---
  const onWheel = (event) => {
    event.preventDefault();
    activeColRef.current = getActiveColumnFromX(event.clientX);
    applyDelta(event.deltaY);
  };

  const onMouseMove = (event) => {
    if (!isMobile) {
      activeColRef.current = getActiveColumnFromX(event.clientX);
    }
  };

  const onTouchStart = (event) => {
    const t = event.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    activeColRef.current = getActiveColumnFromX(t.clientX);
  };

  const onTouchMove = (event) => {
    const t = event.touches[0];
    const start = touchStartRef.current;
    if (!start || start.y == null) return;
    const deltaY = start.y - t.clientY;
    activeColRef.current = getActiveColumnFromX(t.clientX);
    applyDelta(deltaY);
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = () => {
    touchStartRef.current = { x: null, y: null };
  };

  // --- Tilt + gap correction ---
  const tiltDeg = isMobile ? 0 : -2.5;
  const tiltRad = (Math.PI / 180) * Math.abs(tiltDeg);
  const desiredGap = 24; // px (1.5rem equivalent)
  const adjustedGap = desiredGap / Math.cos(tiltRad);

  return (
    <div
      ref={containerRef}
      className="gallery-container"
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: "none" }}
    >
      <div
        className="gallery-content"
        style={{
          gap: `${adjustedGap}px`,
          transform: `rotate(${tiltDeg}deg)`,
          transformOrigin: "center center",
        }}
      >
        {baseColumns.map((colImgs, colIdx) => {
          const columnHeight = colImgs.length * totalItemHeight;
          const raw = offsets[colIdx];
          const offset = ((raw % columnHeight) + columnHeight) % columnHeight;

          return (
            <div key={colIdx} className="gallery-column">
              <div
                className="gallery-column-content"
                style={{ transform: `translateY(${-offset}px)` }}
              >
                {[...colImgs, ...colImgs].map((src, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                  >
                    <img
                      src={src}
                      alt=""
                      className="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
