import Stroke from "@/components/icons/Stroke";
import ProductCard from "./ProductCard";
import CtaButton from "@/components/CtaButton";

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
  return (
    <section className="py-15 bg-[#F7F3F2] relative overflow-hidden">
      <div className="mb-14 px-5 flex flex-col items-center">
        <h3 className="text-[#604C2B]/50 font-semibold tracking-[0.96px] mb-1">
          PRODUCT
        </h3>
        <h3 className="text-[#30241E]/70 text-xl font-bold tracking-[4px]">
          產品系列
        </h3>
        <Stroke />
        <h2 className="text-[#30241E] text-4xl font-bold tracking-[2.88px] leading-[1.5] mb-3">
          匠心淬煉 <br />
          甜得安心
        </h2>
        <p className="text-[#30241E]/82 text-center tracking-[0.64px]">
          嚴選非基改原料製成，成分單純、穩定性高，適用於各式食品、飲品與甜點，是您可以安心選擇的甜味原料。
        </p>
      </div>
      <div className="flex flex-col items-center px-[37.5px] gap-4 mb-14 z-2 relative">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
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

export default Products;
