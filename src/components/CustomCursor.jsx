import React, { useEffect, useRef } from 'react';
// import './YourStylesheet.css'; // Make sure to import your CSS file

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      cursorDotRef.current.style.left = `${posX}px`;
      cursorDotRef.current.style.top = `${posY}px`;
      cursorOutlineRef.current.style.left = `${posX}px`;
      cursorOutlineRef.current.style.top = `${posY}px`;
      cursorOutlineRef.current.animate(
        { left: `${posX}px`, top: `${posY}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
};

export default CustomCursor;
