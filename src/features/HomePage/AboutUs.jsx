import CtaButton from "@/components/CtaButton";
import Stroke from "@/components/icons/Stroke";

const AboutUs = () => {
  return (
    <section className="px-5 pt-10 pb-[120px] md:px-10 md:pb-[84px]">
      <div className=" bg-[#F8F4EB] pt-[70px] text-center flex flex-col items-center relative md:pt-[60px]">
        <div className="mb-2">
          <h3 className="text-[#604C2B]/50 font-semibold tracking-[0.96px] mb-1 md:text-xl">
            ABOUT US
          </h3>
          <h3 className="text-[#30241E]/70 text-xl font-bold tracking-[4px] md:text-2xl md:tracking-[4.8px]">
            關於我們
          </h3>
          <Stroke className="md:w-[134px] md:h-[27px]" />
        </div>
        <h2 className="text-[#30241E] text-4xl font-bold tracking-[2.88px] leading-[1.5] mb-8 md:text-[40px] md:tracking-[3.2px]">
          從原料到製程
          <br />
          守護每一滴甜
        </h2>
        <hr className="w-[248px] h-[1px] border-[#000000] mb-8 md:w-[432px]" />
        <p className="px-5 text-[#30241E]/82 mb-8 tracking-[0.64px] md:px-15">
          我們專注於果糖（高果糖糖漿）、麥芽糖與轉化液糖的製造，透過嚴謹的製程管理，結合品質控管與國際認證，產品穩定供應國內眾多知名飲料、果汁與冰品品牌，致力成為食品業值得信賴、安心選用的甜味原料夥伴。
        </p>
        <CtaButton className="mb-8">了解我們的理念與初心</CtaButton>
        <div className="relative px-[14px] -mb-20 w-full max-w-100 md:px-0 md:-mb-12">
          <div className="bg-[url('/images/homepage/syrup.jpg')] bg-cover bg-center bg-no-repeat w-full h-[476px] rounded-[12px] shadow-[7px_7px_36px_0px_rgba(0,0,0,0.16)] md:h-[557px]"></div>
        </div>
        <div className="absolute top-0 right-0 w-[234px] h-[234px] overflow-hidden md:w-[309px] md:h-[273px]">
          <img
            className="absolute -top-[52px] -right-[112px] md:-top-[60px] md:-right-[98px]"
            src="/images/homepage/spoon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
