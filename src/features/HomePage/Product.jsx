import Stroke from "@/components/icons/Stroke";
import ProductCard from "@/components/ProductCard";
import CircleButton from "@/components/CircleButton";
import CtaButton from "@/components/CtaButton";

const Product = () => {
  return (
    <section className="relative bg-[#F7F3F2] py-15 flex flex-col items-center overflow-hidden">
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
      <p className='text-xl text-[rgb(48,36,30)]/82 text-center tracking-[0.8px] mb-20'>
      嚴選非基改原料製成，成分單純、穩定性高，<br />適用於各式食品、飲品與甜點，是您可以安心選擇的甜味原料。
      </p>
      <div className="flex gap-12 justify-center items-center mb-20">
        <CircleButton direction="left" size="large" className="border-none drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12)]" />
        <div className="flex gap-10">
          <ProductCard title="果糖(高果糖糖漿)" description="Fructose (Fructose Syrup)" />
          <ProductCard title="轉化液糖" description="Sugar Syrup" />
          <ProductCard title="麥芽糖漿" description="Maltose Syrup" />
        </div>
        <CircleButton direction="right" size="large" className="border-none drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12)]" />
      </div>
      <CtaButton>探索更多產品系列</CtaButton>
      <img src="/images/sugar-bottle.png" alt="sugar-bottle" className="absolute w-[278px] top-[103px] -left-[86px]" />
      <img src="/images/sugar-spoon.png" alt="sugar-bottle" className="absolute w-[334px] top-[244px] -right-[104px]" />
    </section>
  );
};

export default Product;
