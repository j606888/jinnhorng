import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import ArrowLarge from "@/components/icons/ArrowLarge";
import { clsx } from "clsx";

const CARD_WIDTH_MAP = {
  md: 244,
  lg: 337,
  xl: 273,
};
const RIGHT_DISABLED_INDEX = {
  md: 2,
  lg: 2,
  xl: 1,
}
const ProductCarousel = ({ products }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  const [screenSize, setScreenSize] = useState("md");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setScreenSize("xl");
      } else if (width >= 1024) {
        setScreenSize("lg");
      } else {
        setScreenSize("md");
      }
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = CARD_WIDTH_MAP[screenSize];
  const gap = 36;
  const translateX = index * (cardWidth + gap);

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col items-center px-[37.5px] gap-4  z-2 relative md:flex-row lg:justify-center lg:gap-[18px] xl:gap-14">
        <CircleButton direction="left" onClick={prev} disabled={index === 0} />
        <div className="md:overflow-hidden w-[524px] mx-auto lg:w-[710px] lg:mx-0 xl:w-[891px]">
          <div
            className='md:flex gap-9 transition-all duration-300'
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
        <CircleButton direction="right" onClick={next} disabled={index === RIGHT_DISABLED_INDEX[screenSize]} />
      </div>
    </section>
  );
};

const CircleButton = ({ direction = "right", onClick = () => {}, disabled = false }) => {
  return (
    <div
      onClick={disabled ? null : onClick}
      className={clsx(
        "hidden bg-white transition-all duration-300  md:flex items-center justify-center rounded-[100px] w-[60px] h-[60px] drop-shadow-[0px_8px_15.9px_rgba(0,0,0,0.12)]",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#DA3947] hover:text-white active:bg-[#C43340]",
      )}
    >
      <ArrowLarge className={clsx(direction === "left" && "scale-x-[-1]")} />
    </div>
  );
};

export default ProductCarousel;
