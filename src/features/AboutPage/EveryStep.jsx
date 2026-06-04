import AnimateDiv from "../shared/AnimateDiv";
import Link from "next/link";

const EveryStep = () => {
  return (
    <section className="relative overflow-hidden">
      <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0">
        <Link
          href="/"
          className="hover:underline hover:text-deep-brown/82 active:font-bold"
        >
          <span>首頁</span>
        </Link>
        <span>{">"}</span>
        <span className="font-bold">關於我們</span>
      </AnimateDiv>
      <div className="px-5 py-20 relative md:px-10 md:pt-15 md:pb-25 lg:px-15 lg:py-20 max-w-[1080px] mx-auto xl:px-0 xl:pt-25 xl:pb-30">
        <div className="flex flex-col gap-20 z-2 lg:gap-15">
          <AnimateDiv className="flex flex-col gap-10 lg:items-center lg:flex-row-reverse lg:gap-15">
            <div className="text-center lg:text-left lg:w-full">
              <h2 className="mb-4 text-deep-brown text-[28px] font-bold tracking-[2.24px]">
                從初心出發 <br className="hidden lg:block" />
                成就每一步穩健
              </h2>
              <p className="text-deep-brown/[0.82] text-base tracking-[0.64px]">
                在追求卓越與永續發展的道路上，我們始終秉持「安全衛生、誠信踏實、服務至上」的核心理念。本著專業、可靠、以客為尊的精神，結合多元創新與客製化的產品與服務，對品質的堅持與對客戶的承諾，從產能提升、流程控管，到產品研發與服務執行，我們以嚴謹態度落實每一個環節，確保高效穩定的產能，回應客戶的期待與信任。
              </p>
            </div>
            <div className="w-full max-w-[432px] md:h-[318px] md:w-[432px] mx-auto lg:h-auto lg:w-full xl:w-[500px] xl:h-[368px] xl:flex-shrink-0 xl:max-w-none relative">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="/images/about/employee.jpg"
                  alt="employee"
                  className="w-full h-full object-cover hover:scale-102 transition-all duration-300"
                />
              </div>
              <img
                src="/images/about/about_us_circle.png"
                alt="about_us_circle"
                className="absolute -bottom-[40px] right-[20px] w-[78px] -z-10  md:w-[95px] md:-bottom-[48px] md:-right-[48px] lg:w-[75px] lg:-bottom-[37px] lg:-right-[37px] xl:w-[95px] xl:-bottom-[43px] xl:-right-[47px]"
              />
              <img
                src="/images/about/graphic1.png"
                alt="graphic1"
                className="hidden lg:block absolute -top-[90px] -left-[80px] w-[180px] -z-10 xl:w-[240px] xl:-left-[120px] xl:-top-[108px] 2xl:-left-[180px] 2xl:-top-[75px]"
              />
            </div>
          </AnimateDiv>
          <AnimateDiv className="flex flex-col gap-10 lg:items-center lg:flex-row lg:gap-15">
            <div className="text-center lg:text-left lg:w-full">
              <h2 className="mb-4 text-deep-brown text-[28px] font-bold tracking-[2.24px]">
                國際驗證加持 <br className="hidden lg:block" />
                品質承諾不變
              </h2>
              <p className="text-deep-brown/[0.82] text-base tracking-[0.64px]">
                我們的產品通過 ISO 22000 食品安全管理系統驗證與 HACCP
                國際食品安全驗證，全面以高標準作為品質基礎，提供顧客最安心的選擇。
                <br />
                此外，為服務多元文化市場，我們於 2015 年取得 HALAL
                清真驗證，並於 2024 年通過 Kosher
                猶太潔食驗證。這些來自國際的肯定，不僅展現我們對品質的堅持，也象徵著我們對不同飲食文化的尊重與重視，讓每一位顧客都能感受到我們的用心與責任。
              </p>
            </div>
            <div className="h-[250px] w-full max-w-[432px] rounded-[10px] md:h-[318px] md:w-[432px] mx-auto lg:w-full  xl:w-[500px] xl:h-[368px] xl:flex-shrink-0 xl:max-w-none relative">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="/images/about/certificate.jpg"
                  alt="certificate"
                  className="w-full h-full object-cover hover:scale-102 transition-all duration-300"
                />
              </div>
              <img
                src="/images/about/graphic2.png"
                alt="graphic2"
                className="hidden lg:block absolute w-[180px] -z-10 -right-[80px] -bottom-[90px] xl:w-[240px] xl:-right-[100px] xl:-bottom-[120px] 2xl:-right-[181px] 2xl:-bottom-[150px]"
              />
            </div>
          </AnimateDiv>
        </div>
      </div>
      <img
        src="/images/about/graphic1.png"
        alt="graphic1"
        className="hidden md:block absolute top-[11px] -left-[69px] w-[180px] -z-10 lg:hidden lg:top-[0px] lg:left-[0px] xl:w-[240px] xl:top-[0px] xl:left-[0px]"
      />
      <img
        src="/images/about/graphic2.png"
        alt="graphic2"
        className="hidden md:block absolute bottom-[0px] -right-[22px] w-[180px] -z-10 lg:hidden lg:-right-[45px] lg:-bottom-[23px] xl:-bottom-[62px] xl:right-[0px] xl:w-[240px]"
      />
    </section>
  );
};

export default EveryStep;
