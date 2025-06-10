import Stroke from "@/components/icons/Stroke";
import Check from "@/components/icons/Check";
import CtaButton from "@/components/CtaButton";

const Quality = () => {
  return (
    <section className='relative bg-[url("/images/quality-bg.jpg")] bg-cover bg-center min-h-[800px] py-[96px] flex flex-col items-center overflow-hidden'>
      <h3 className="text-xl font-semibold tracking-[1.2px] text-white">
        QUALITY COMMITMENT
      </h3>
      <p className="text-2xl font-bold tracking-[4.8px] mt-1 text-white">
        品質守護
      </p>
      <Stroke />
      <h2 className="text-5xl text-white mt-1.5 mb-5 font-bold tracking-[3.84px] leading-[normal]">
        專業製程，成就值得信賴的品質
      </h2>
      <p className="text-xl text-white text-center tracking-[0.8px] mb-20">
        我們層層把關每一環節，搭配專業製糖工序與實驗室級品質控管，只為
        <br />
        提供穩定、安心的甜味原料。
      </p>
      <div className="flex gap-6 items-center mb-20">
        <QualityItem img="/images/quality-img-1.jpg" title="非基改原料" />
        <QualityItem img="/images/quality-img-2.jpg" title="製程穩定控管" />
        <QualityItem img="/images/quality-img-3.jpg" title="品質認證把關" />
      </div>
      <CtaButton>了解我們的製程與認證</CtaButton>
    </section>
  );
};

const QualityItem = ({ img, title}) => {
  return (
    <div className="flex flex-col gap-8 items-center">
          <img src={img} alt="quality-1" className="w-[344px] h-[254px] rounded-[10px]" />
          <div className="flex gap-3 items-center">
            <Check />
            <span className='text-white text-2xl font-medium tracking-[0.96px]'>{ title }</span>
          </div>
        </div>
  )
}

export default Quality;
