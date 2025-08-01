import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import ArrowLarge from "@/components/icons/ArrowLarge";
import { clsx } from "clsx";

const CARD_WIDTH_MAP = {
  md: 244,
  lg: 337,
  xl: 273,
};
const ProductCarousel = ({ products }) => {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedProducts = [
    products[products.length - 2],
    products[products.length - 1],
    ...products,
    products[0],
    products[1],
  ];

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === extendedProducts.length - 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 300);
    } else if (index === 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(products.length - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 300);
    }
  }, [index, extendedProducts.length]);

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
        <CircleButton direction="left" onClick={prev} />
        <div className="md:overflow-hidden w-[524px] mx-auto lg:w-[710px] lg:mx-0 xl:w-[891px]">
          <div
            className={`md:flex gap-9 ${
              isTransitioning ? "transition-all duration-300" : ""
            }`}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {extendedProducts.map((product, idx) => (
              <ProductCard key={`${product.slug}-${idx}`} product={product} />
            ))}
          </div>
        </div>
        <CircleButton direction="right" onClick={next} />
      </div>
    </section>
  );
};

const CircleButton = ({ direction = "right", onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "hidden bg-white transition-all duration-300 cursor-pointer md:flex items-center justify-center rounded-[100px] w-[60px] h-[60px] drop-shadow-[0px_8px_15.9px_rgba(0,0,0,0.12)]",
        "hover:bg-[#DA3947] hover:text-white",
        "active:bg-[#C43340]"
      )}
    >
      <ArrowLarge className={clsx(direction === "left" && "scale-x-[-1]")} />
    </div>
  );
};

export default ProductCarousel;
