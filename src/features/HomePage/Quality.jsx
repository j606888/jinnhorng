import Stroke from "@/components/icons/Stroke";
import RoundCheck from "@/components/icons/RoundCheck";
import CtaButton from "@/components/CtaButton";

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
    <section className="px-5 py-15 bg-[#2F2B26] bg-[url('/images/homepage/spoon_bg_mobile.jpg')] bg-contain bg-no-repeat md:px-10 md:py-24 md:bg-[url('/images/homepage/spoon_bg_desktop.jpg')] md:bg-cover md:bg-center lg:px-15">
      <div className="mb-14 flex flex-col items-center text-center md:px-[34px] md:mb-20">
        <h3 className="text-white font-semibold tracking-[0.96px] mb-1 md:text-xl">
          QUALITY COMMITMENT
        </h3>
        <h3 className="text-white text-xl font-bold tracking-[4px] md:text-2xl md:tracking-[4.8px]">
          品質守護
        </h3>
        <Stroke className="md:w-[134px] md:h-[27px] lg:w-[120px] lg:h-[24px]" />
        <h2 className="text-white text-4xl font-bold tracking-[2.88px] leading-[1.5] mb-3 md:text-[40px] md:tracking-[3.2px] md:mb-5 lg:text-[48px] lg:tracking-[3.8px]">
          專業製程，成就值得信賴的品質
        </h2>
        <p className="text-white text-center tracking-[0.64px] lg:text-[20px] lg:font-medium lg:tracking-[0.8px] lg:w-[664px]">
          我們層層把關每一環節，搭配專業製糖工序與實驗室級品質控管，只為提供穩定、安心的甜味原料。
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 mb-14 md:flex-row md:gap-4 md:mb-20 lg:gap-5">
        {QUALITIES.map((quality) => (
          <div key={quality.description} className="flex flex-col items-center">
            <img
              src={quality.image}
              alt={quality.description}
              className="mb-4 rounded-[10px] max-w-[420px] md:w-full"
            />
            <div className="flex items-center gap-3 p-2">
              <RoundCheck />
              <p className="text-white text-center font-bold tracking-[0.64px]">
                {quality.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CtaButton className="m-auto">了解我們的製程與認證</CtaButton>
    </section>
  );
};

export default Quality;
