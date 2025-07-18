import Stroke from "@/components/icons/Stroke";
import ProductCard from "./ProductCard";
import CtaButton from "@/components/CtaButton";
import { useState, useEffect } from "react";
import ArrowLarge from "@/components/icons/ArrowLarge";
import { clsx } from "clsx";

const PRODUCTS = [
  {
    name: "果糖(高果糖糖漿)",
    enName: "Fructose (Fructose Syrup)",
    image: "/images/products/fructose.jpg",
  },
  {
    name: "轉化液糖",
    enName: "Sugar Syrup",
    image: "/images/products/sugar_syrup.jpg",
  },
  {
    name: "麥芽糖漿",
    enName: "Maltose Syrup",
    image: "/images/products/maltose_syrup.jpg",
  },
  {
    name: "龍眼風味糖漿",
    enName: "Flavored Syrup",
    image: "/images/products/flavored_syrup.jpg",
  },
  {
    name: "特級結晶葡萄糖",
    enName: "Dextrose monohydrate",
    image: "/images/products/dextrose_monohydrate.jpg",
  },
];

const Products = () => {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedProducts = [
    PRODUCTS[PRODUCTS.length - 2],
    PRODUCTS[PRODUCTS.length - 1],
    ...PRODUCTS,
    PRODUCTS[0],
    PRODUCTS[1],
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
    }
    else if (index === 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(PRODUCTS.length - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 300);
    }
  }, [index, extendedProducts.length]);

  const cardWidth = 252;
  const gap = 16;
  const translateX = index * (cardWidth + gap);

  return (
    <section className="py-15 bg-[#F7F3F2] relative overflow-hidden md:py-24 ">
      <div className="mb-14 px-5 flex flex-col items-center">
        <h3 className="text-[#604C2B]/50 font-semibold tracking-[0.96px] mb-1 md:text-xl">
          PRODUCT
        </h3>
        <h3 className="text-[#30241E]/70 text-xl font-bold tracking-[4px] md:text-2xl md:tracking-[4.8px]">
          產品系列
        </h3>
        <Stroke className="md:w-[134px] md:h-[27px] lg:w-[120px] lg:h-[24px]" />
        <h2 className="text-[#30241E] text-4xl font-bold tracking-[2.88px] leading-[1.5] mb-3 md:text-[40px] md:tracking-[3.2px] lg:text-[48px] lg:tracking-[3.8px]">
          匠心淬煉 <br className="block md:hidden" />
          甜得安心
        </h2>
        <p className="text-[#30241E]/82 text-center tracking-[0.64px] lg:text-[20px] lg:font-medium lg:tracking-[0.8px]">
          嚴選非基改原料製成，成分單純、穩定性高，
          <br className="hidden md:block" />
          適用於各式食品、飲品與甜點，是您可以安心選擇的甜味原料。
        </p>
      </div>
      <div className="flex flex-col items-center px-[37.5px] gap-4 mb-14 z-2 relative md:flex-row lg:justify-center lg:gap-[18px]">
        <div className="flex flex-col md:hidden gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <CircleButton
          direction="left"
          onClick={prev}
        />
        <div className="hidden md:block md:overflow-hidden w-[520px] mx-auto md:rounded-[10px] lg:w-[788px] lg:mx-0">
          <div
            className={`md:flex gap-4 ${
              isTransitioning ? "transition-all duration-300" : ""
            }`}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {extendedProducts.map((product, idx) => (
              <ProductCard key={`${product.name}-${idx}`} {...product} />
            ))}
          </div>
        </div>
        <CircleButton
          direction="right"
          onClick={next}
        />
      </div>
      <CtaButton className="m-auto">探索更多產品系列</CtaButton>
      <img
        src="/images/homepage/sugar_bottle.png"
        alt="sugar-bottle"
        className={`absolute w-[146px] top-[34px] -left-[39px]`}
      />
      <img
        src="/images/homepage/sugar_bowl.png"
        alt="sugar-bottle"
        className={`absolute w-[146px] top-[319px] -right-[53px]`}
      />
    </section>
  );
};

const CircleButton = ({
  direction = "right",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "hidden bg-white transition-all duration-300 cursor-pointer md:flex items-center justify-center rounded-[100px] w-[60px] h-[60px] drop-shadow-[0px_8px_15.9px_rgba(0,0,0,0.12)]",
        "hover:bg-[#DA3947] hover:text-white",
        "active:bg-[#C43340]",
      )}
    >
      <ArrowLarge className={clsx(
        direction === "left" && "scale-x-[-1]"
      )} />
    </div>
  );
};




export default Products;
