/*
	Installed from https://reactbits.dev/tailwind/
*/

import React from 'react';
import { gsap } from 'gsap';

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const animationRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    // Kill any existing animation to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    // Use standard transform values that Tailwind supports
    const startY = edge === 'top' ? '-100%' : '100%';
    const endY = '0%';

    animationRef.current = gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: startY })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '100%' : '-100%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: endY });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    // Kill any existing animation to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    // Use standard transform values that Tailwind supports
    const endY = edge === 'top' ? '-100%' : '100%';

    animationRef.current = gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: endY })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '100%' : '-100%' });
  };

  // Cleanup animation on unmount
  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // Create a single content block
  const singleContent = (
    <>
      <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {text}
      </span>
      <div
        className="w-[240px] h-[15vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </>
  );

  // Duplicate content many times for seamless looping
  const repeatedMarqueeContent = Array.from({ length: 12 }).map((_, idx) => (
    <React.Fragment key={idx}>
      {singleContent}
    </React.Fragment>
  ));

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010] transition-all duration-300 ease-out"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white transform translate-y-full"
        ref={marqueeRef}
      >
        <div className="h-full w-[400%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[400%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;