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
    <section className="px-5 py-15 bg-[#2F2B26] bg-[url('/images/homepage/spoon_bg_mobile.jpg')] bg-contain bg-no-repeat">
      <div className="mb-14 flex flex-col items-center text-center">
        <h3 className="text-white font-semibold tracking-[0.96px] mb-1">
          QUALITY COMMITMENT
        </h3>
        <h3 className="text-white text-xl font-bold tracking-[4px]">
          品質守護
        </h3>
        <Stroke />
        <h2 className="text-white text-4xl font-bold tracking-[2.88px] leading-[1.5] mb-3">
          專業製程，成就值得信賴的品質
        </h2>
        <p className="text-white text-center tracking-[0.64px]">
          我們層層把關每一環節，搭配專業製糖工序與實驗室級品質控管，只為提供穩定、安心的甜味原料。
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 mb-14">
        {QUALITIES.map((quality) => (
          <div key={quality.description} className="flex flex-col items-center">
            <img
              src={quality.image}
              alt={quality.description}
              className="mb-4 rounded-[10px]"
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
