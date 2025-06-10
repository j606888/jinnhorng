import Stroke from "@/components/icons/Stroke";
import ProductCard from "@/components/ProductCard";
import CircleButton from "@/components/CircleButton";
import CtaButton from "@/components/CtaButton";
import { motion } from "motion/react";
import { useState } from "react";

const Product = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section className="relative bg-[#F7F3F2] py-15 flex flex-col items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h3 className="text-xl font-semibold tracking-[1.2px] text-[#604C2B]/50">
          PRODUCT
        </h3>
        <p className="text-2xl font-bold tracking-[4.8px] mt-1 text-[#30241E/70]">
          產品系列
        </p>
        <Stroke />
        <h2 className="text-5xl text-[#30241E] mt-1.5 mb-5 font-bold tracking-[3.84px] leading-[normal]">
          匠心淬煉 甜得安心
        </h2>
        <p className="text-xl text-[rgb(48,36,30)]/82 text-center tracking-[0.8px] mb-20">
          嚴選非基改原料製成，成分單純、穩定性高，
          <br />
          適用於各式食品、飲品與甜點，是您可以安心選擇的甜味原料。
        </p>
        <div className="flex gap-12 justify-center items-center mb-20">
          <CircleButton
            direction="left"
            size="large"
            className="border-none drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12)]"
          />
          <div className="flex gap-10" onMouseEnter={() => setIsCardHovered(true)} onMouseLeave={() => setIsCardHovered(false)}>
            <ProductCard
              title="果糖(高果糖糖漿)"
              description="Fructose (Fructose Syrup)"
            />
            <ProductCard title="轉化液糖" description="Sugar Syrup" />
            <ProductCard title="麥芽糖漿" description="Maltose Syrup" />
          </div>
          <CircleButton
            direction="right"
            size="large"
            className="border-none drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12)]"
          />
        </div>
        <CtaButton>探索更多產品系列</CtaButton>
      </motion.div>
      <img
        src="/images/sugar-bottle.png"
        alt="sugar-bottle"
        className={`absolute w-[278px] top-[103px] -left-[86px] transition-transform duration-1000 ${isCardHovered ? '-translate-y-2' : ''}`}
      />
      <img
        src="/images/sugar-spoon.png"
        alt="sugar-bottle"
        className={`absolute w-[334px] top-[244px] -right-[104px] transition-transform duration-1000 ${isCardHovered ? '-translate-y-2' : ''}`}
      />
    </section>
  );
};

export default Product;
