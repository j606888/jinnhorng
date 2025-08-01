import CtaButton from "@/components/CtaButton";
import ScrollMouse from "./ScrollMouse";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative w-full bg-cover bg-center bg-[url('/images/homepage/hero_mobile.jpg')] h-[667px] md:bg-[url('/images/homepage/hero_tablet.jpg')] md:h-[1024px] lg:bg-[url('/images/homepage/hero_desktop.jpg')] lg:h-[600px] xl:aspect-[2/1] xl:h-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-5 items-center justify-center pt-[96px] text-[#30241E] z-10 md:gap-[28px] md:pt-[304px] lg:pt-[176px]"
      >
        <h1 className="text-5xl font-medium tracking-[3.84px] leading-[1.5]">
          專業製糖
          <br className="block md:hidden" />
          <span className="hidden md:inline"> </span>
          用心為您
        </h1>
        <p className="text-xl font-medium tracking-[0.8px]">
          不只是供應商，更是品質守門人
        </p>
        <CtaButton url="/products">探索糖漿系列</CtaButton>
      </motion.div>
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-[410px] h-[316px] rounded-[410px] blur-[126px] bg-white z-1 md:top-[250px] md:w-[650px] md:h-[236px] md:rounded-[650px] lg:w-[670px] lg:blur-[96px] lg:top-[106px] lg:bg-[#ffffff]/[0.6]" />
      <ScrollMouse />
    </section>
  );
};

export default Hero;
