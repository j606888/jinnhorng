import ProductCard from "./ProductCard";
import CtaButton from "@/components/CtaButton";
import { useState, useEffect } from "react";
import ArrowLarge from "@/components/icons/ArrowLarge";
import { clsx } from "clsx";
import AnimateDiv from "@/features/shared/AnimateDiv";
import { PRODUCTS } from "@/lib/products";
import Subtitle from "./Subtitle";

const RIGHT_DISABLED_INDEX = {
  md: PRODUCTS.length - 2,
  lg: PRODUCTS.length - 3,
  xl: PRODUCTS.length - 3,
};
const Products = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState("md");

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

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

  const cardWidth = screenSize === "xl" ? 300 : 252;
  const gap = screenSize === "xl" ? 30 : 16;
  const translateX = index * (cardWidth + gap);

  return (
    <section className="py-15 bg-[#F7F3F2] relative overflow-hidden md:py-24 ">
      <AnimateDiv className="mb-14 px-5 flex flex-col items-center xl:mb-20">
        <Subtitle enTitle="PRODUCT" cnTitle="產品系列" />
        <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-3 md:text-[36px] md:tracking-[2.88px] xl:text-[40px] xl:tracking-[3.2px]">
          匠心淬煉 甜得安心
        </h2>
        <p className="text-[#30241E]/82 text-center tracking-[0.64px] lg:text-[20px] lg:tracking-[0.8px]">
          嚴選非基改原料製成，成分單純、穩定性高，
          <br className="hidden md:block" />
          適用於各式食品、飲品與甜點，是您可以安心選擇的甜味原料。
        </p>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col items-center px-[37.5px] gap-4 mb-14 z-2 relative md:flex-row lg:justify-center lg:gap-[18px] xl:gap-14 xl:mb-20">
        <div className="flex flex-col md:hidden gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <CircleButton direction="left" onClick={prev} disabled={index === 0} />
        <div className="hidden md:block md:overflow-hidden w-[520px] mx-auto md:rounded-[10px] lg:w-[788px] lg:mx-0 xl:w-[960px]">
          <div
            className="md:flex gap-4 xl:gap-[30px] transition-all duration-300"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {PRODUCTS.map((product, idx) => (
              <ProductCard
                key={product.slug}
                product={product}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            ))}
          </div>
        </div>
        <CircleButton
          direction="right"
          onClick={next}
          disabled={index === RIGHT_DISABLED_INDEX[screenSize]}
        />
      </AnimateDiv>
      <CtaButton className="m-auto" url="/products">
        探索更多產品系列
      </CtaButton>
      <img
        src="/images/homepage/sugar_bottle.png"
        alt="sugar-bottle"
        className={`absolute w-[146px] top-[34px] -left-[39px] md:w-[237px] md:-left-[68px] md:top-[94px] lg:w-[237px] lg:-left-[68px] lg:top-[94px] xl:w-[315px] xl:left-[0px] xl:top-[60px] transition-transform duration-1000 ${
          isHovered ? "-translate-y-2" : ""
        }`}
      />
      <img
        src="/images/homepage/sugar_bowl.png"
        alt="sugar-bottle"
        className={`absolute w-[146px] top-[319px] -right-[53px] md:w-[250px] md:top-[378px] md:-right-[79px] lg:w-[315px] lg:-right-[100px] lg:top-[152px] xl:w-[315px] xl:right-[0px] xl:top-[152px] transition-transform duration-1000 ${
          isHovered ? "-translate-y-2" : ""
        }`}
      />
    </section>
  );
};

const CircleButton = ({
  direction = "right",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <div
      onClick={disabled ? null : onClick}
      className={clsx(
        "hidden bg-white transition-all duration-300  md:flex items-center justify-center rounded-[100px] w-[60px] h-[60px] drop-shadow-[0px_8px_15.9px_rgba(0,0,0,0.12)]",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:bg-[#DA3947] hover:text-white active:bg-[#C43340]"
      )}
    >
      <ArrowLarge className={clsx(direction === "left" && "scale-x-[-1]")} />
    </div>
  );
};

export default Products;
