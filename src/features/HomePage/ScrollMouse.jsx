import React, { useState } from "react";
import Mouse from "@/components/icons/Mouse";

const ScrollMouse = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 812,
      behavior: "smooth",
    });
  };

  return (
    <div
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className="cursor-pointer absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        onClick={handleScroll}
      >
        <Mouse isHovered={isHovered}/>
        <span className="text-white text-base font-bold [text-shadow:0px_0px_4px_rgba(0,0,0,0.50)]">
          Scroll
        </span>
      </div>
  )
};

export default ScrollMouse;