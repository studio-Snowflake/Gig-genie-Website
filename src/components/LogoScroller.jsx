import React, { useRef, useEffect } from 'react';

const LogoScroller = ({ logos }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollLeft += 2; // Adjust scroll speed as needed
      }
    }, 50); // Adjust scroll interval as needed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex items-center space-x-4 px-4 py-2"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo"
            className="inline-block max-w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
