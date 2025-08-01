import Stroke from "@/components/icons/Stroke";
import RoundCheck from "@/components/icons/RoundCheck";
import CtaButton from "@/components/CtaButton";
import { motion } from "motion/react";

const QUALITIES = [
  {
    description: "非基改原料",
    image: "/images/homepage/quality-img-1.jpg",
  },
  {
    description: "製程穩定控管",
    image: "/images/homepage/quality-img-2.jpg",
  },
  {
    description: "品質認證把關",
    image: "/images/homepage/quality-img-3.jpg",
  },
];
const Quality = () => {
  return (
    <section className="bg-[#2F2B26] bg-[url('/images/homepage/spoon_bg_mobile.jpg')] bg-contain bg-no-repeat md:bg-[url('/images/homepage/spoon_bg_desktop.png')] md:bg-center md:bg-cover xl:bg-contain">
      <div className="px-5 py-15 md:px-10 md:py-9 lg:px-15 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center md:px-[34px] md:mb-20"
        >
          <h3 className="text-white font-semibold tracking-[0.96px] mb-1 md:text-xl">
            QUALITY COMMITMENT
          </h3>
          <h3 className="text-white text-xl font-bold tracking-[4px] md:text-2xl md:tracking-[4.8px]">
            品質守護
          </h3>
          <Stroke className="md:w-[120px] md:h-[24px]" />
          <h2 className="text-white text-[28px] font-bold tracking-[2.24px] mb-3 md:text-[36px] md:tracking-[2.88px] xl:text-[40px] xl:tracking-[3.2px]">
            專業製程，成就值得信賴的品質
          </h2>
          <p className="text-white text-center tracking-[0.64px] lg:text-[20px] lg:font-medium lg:tracking-[0.8px] lg:w-[664px]">
            我們層層把關每一環節，搭配專業製糖工序與實驗室級品質控管，只為提供穩定、安心的甜味原料。
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-10 mb-14 md:flex-row md:gap-4 md:mb-20 lg:gap-5 xl:gap-6">
          {QUALITIES.map((quality) => (
            <div
              key={quality.description}
              className="flex flex-col items-center"
            >
              <div className="mb-4 w-full rounded-[10px] max-w-[344px] md:w-full overflow-hidden">
                <img
                  src={quality.image}
                  alt={quality.description}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-102"
                />
              </div>
              <div className="flex items-center gap-3 p-2">
                <RoundCheck />
                <p className="text-white text-center font-bold tracking-[0.64px]">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CtaButton className="m-auto" url="/quality/control">了解我們的製程與認證</CtaButton>
      </div>
    </section>
  );
};

export default Quality;
