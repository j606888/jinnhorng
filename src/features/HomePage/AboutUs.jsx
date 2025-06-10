import Stroke from "@/components/icons/Stroke";
import CtaButton from "@/components/CtaButton";

const AboutUs = () => {
  return (
    <div className="py-20 flex justify-center">
      <div className="flex mx-auto">
        <div className="z-10 mt-[54px]">
          <img src="/images/syrup-dripping.png" width={488} height={680} className="rounded-xl shadow-[10px_10x_50px_0px_rgba(0,0,0,0.16)]" />
        </div>
        <div className="bg-[#F8F4EB] flex w-[672px] h-[785px] -ml-20 flex-col justify-between relative">
          <div className="mt-[104px] ml-[172px]">
            <h3 className="text-xl font-semibold tracking-[1.2px] text-[#604C2B]/50">
              ABOUT US
            </h3>
            <p className="text-2xl font-bold tracking-[4.8px] mt-1 text-[#30241E/70]">
              關於我們
            </p>
            <Stroke />
            <h2 className="text-5xl text-[#30241E] mt-1.5 font-bold tracking-[3.84px] leading-[normal]">
              從原料到製程
              <br />
              守護每一滴甜
            </h2>
            <p className="text-base text-[#30241E]/82 mt-[76px] w-[408px] font-normal tracking-[0.65px] mb-8">
              我們專注於果糖（高果糖糖漿）、麥芽糖與轉化液糖的製造，透過嚴謹的製程管理，結合品質控管與國際認證，產品穩定供應國內眾多知名飲料、果汁與冰品品牌，致力成為食品業值得信賴、安心選用的甜味原料夥伴。
            </p>
            <CtaButton>了解我們的理念與初心</CtaButton>
          </div>
          <div className="top-[370px] left-[372px] absolute w-[385px] h-[1px] bg-[#000000]" />
          <div className="absolute top-0 right-0 w-[354px] h-[354px] overflow-hidden">
            <img className="absolute -top-[38px] -right-[141px]" src="/images/spoon.png" width={340} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
