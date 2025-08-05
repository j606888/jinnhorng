import CtaButton from "@/components/CtaButton";
import AnimateDiv from "@/features/shared/AnimateDiv";
import Subtitle from "./Subtitle";

const AboutUs = () => {
  return (
    <section className="px-5 pt-10 pb-[120px] md:px-10 md:pb-[84px] lg:py-[96px] lg:flex lg:justify-center lg:items-center xl:py-20">
      <div className=" bg-[#F8F4EB] pt-[70px] text-center flex flex-col items-center relative md:pt-[60px] lg:pt-[58px] lg:pl-[91px] lg:pr-[42px] lg:w-[541px] lg:ml-[343px] lg:pb-[60px] lg:h-[633px] xl:w-[672px] xl:h-[785px] xl:pt-[104px] xl:pl-[173px] xl:pr-[91px] xl:ml-[409px]">
        <AnimateDiv
          className="flex flex-col items-center lg:items-start relative w-full"
        >
          <div className="mb-2">
            <Subtitle enTitle="ABOUT US" cnTitle="關於我們" />
          </div>
          <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-8 md:text-[36px] md:tracking-[2.88px] xl:text-[40px] xl:tracking-[3.2px]">
            從原料到製程
            <br />
            守護每一滴甜
          </h2>
          <hr className="w-[248px] h-[1px] border-[#000000] mb-8 md:w-[432px] lg:w-[365px] lg:ml-[105px] lg:mb-[44px] xl:w-[385px] xl:ml-[169px]" />
          <p className="px-5 text-deep-brown/82 mb-8 tracking-[0.64px] md:px-15 lg:px-0 lg:text-start lg:tracking-[0.8px]">
            我們專注於果糖（高果糖糖漿）、麥芽糖與轉化液糖的製造，透過嚴謹的製程管理，結合品質控管與國際認證，產品穩定供應國內眾多知名飲料、果汁與冰品品牌，致力成為食品業值得信賴、安心選用的甜味原料夥伴。
          </p>
          <CtaButton className="mb-8 lg:mb-0" url="/about">了解我們的理念與初心</CtaButton>
        </AnimateDiv>
        <div className="relative px-[14px] -mb-20 w-full max-w-100 md:px-0 md:-mb-12 lg:absolute lg:top-[44px] lg:left-[-343px] xl:top-[54px] xl:left-[-409px]">
          <div className="w-full h-[476px] overflow-hidden rounded-[12px] shadow-[7px_7px_36px_0px_rgba(0,0,0,0.16)] md:rounded-[6px] md:h-[557px] lg:w-[393px] lg:h-[548px] xl:w-[488px] xl:h-[680px]">
            <img src="/images/homepage/syrup.jpg" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-102" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[234px] h-[234px] overflow-hidden md:w-[309px] md:h-[273px] lg:w-[274px] lg:h-[242px]">
          <img
            className="absolute -top-[52px] -right-[112px] md:-top-[60px] md:-right-[98px] lg:-top-[30px] lg:-right-[113px]"
            src="/images/homepage/spoon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
