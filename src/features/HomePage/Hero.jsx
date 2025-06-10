import WaterDrop from "@/components/icons/WaterDrop";
import ScrollMouse from "./ScrollMouse";
import ArrowLarge from "@/components/icons/ArrowLarge";

const Hero = () => {
  return (
    <section className='bg-[url("/images/hero.png")] bg-cover bg-center min-h-[800px] w-full relative flex '>
      <div className="mx-auto mt-45 flex flex-col gap-6 items-center z-2">
        <h1 className="text-[56px] font-medium tracking-[4.48px] leading-[56px] text-[#30241E]">
          專業製糖 用心為您
        </h1>
        <p className="text-2xl font-medium text-[#30241E]">
          不只是供應商，更是品質守門人
        </p>
        <button className="flex items-center justify-center gap-2 bg-[#DA3947] text-white px-6 py-4 rounded-lg">
          <WaterDrop size={20} />
          <span className="text-base font-medium leading-[normal] tracking-[0.64px]">
            探索產品系列
          </span>
          <ArrowLarge />
        </button>
      </div>
      <ScrollMouse />
      <div className="absolute top-[111px] left-1/2 -translate-x-1/2 w-[720px] h-[250px] rounded-[727px] bg-white/60 blur-[100px] z-1" />
      <div className="absolute bottom-0 w-full h-[98px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.30)_100%)]" />
    </section>
  );
};

export default Hero;
