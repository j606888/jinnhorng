import Navbar from "@/components/Navbar";
import ContactUs from "../shared/ContactUs";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import AnimateDiv from "@/features/shared/AnimateDiv";
import Link from "next/link";

const CONTROL_DATA = [
  {
    image: "/images/quality/icon1.svg",
    title: "全流程品質監控",
    description: "從原料驗收、製程監測到成品檢驗，層層把關不鬆懈",
  },
  {
    image: "/images/quality/icon2.svg",
    title: "高風險因子全面檢測",
    description: "嚴格控管微生物與化學殘留，符合國際食品安全規範",
  },
  {
    image: "/images/quality/icon3.svg",
    title: "第三方驗證強化信賴",
    description: "與合格實驗室合作，定期檢測關鍵指標，提升品管透明度與可信度",
  },
];

const Control = () => {
  return (
    <>
      <Navbar white />
      <Hero />
      <section className="relative overflow-hidden">
        <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0">
          <Link
            href="/"
            className="hover:underline hover:text-deep-brown/82 active:font-bold"
          >
            <span>首頁</span>
          </Link>
          <span>{">"}</span>
          <span className="text-deep-brown/60">品質守護</span>
          <span>{">"}</span>
          <span className="font-bold">品質控管</span>
        </AnimateDiv>
        <AnimateDiv className="px-5 pt-15 pb-0 text-center md:px-10 lg:px-15 lg:pt-20 max-w-[1080px] mx-auto xl:px-0">
          <div className="flex flex-col mb-10 lg:flex-row lg:gap-5">
            <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4 lg:w-[calc(50%-10px)] lg:text-start">
              全面把關
              <br />
              只為每一口的安心
            </h2>
            <p className="text-deep-brown/[0.82] tracking-[0.64px] lg:w-[calc(50%-10px)] lg:text-start">
              自民國 66
              年創立以來，晉弘始終秉持「安全衛生、誠信踏實、服務至上」的核心理念，在穩健中不斷提升品質管理能力，致力於為國內外飲品品牌提供穩定、可信賴的甜味原料。
              <br />
              我們深知食品安全無法妥協，因此從原料進廠、製程管理到最終產品出貨，每一個環節都由專業團隊嚴格控管，確保產品符合最高品質與安全標準。
            </p>
          </div>
          <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center">
            <div className="w-full max-w-[500px] rounded-[6px] overflow-hidden xl:max-w-none">
              <img
                src="/images/quality/lab-1.jpg"
                alt="lab-1"
                className="w-full hover:scale-102 transition-all duration-500"
              />
            </div>
            <div className="w-full max-w-[500px] rounded-[6px] overflow-hidden xl:max-w-none">
              <img
                src="/images/quality/lab-2.jpg"
                alt="lab-2"
                className="w-full hover:scale-102 transition-all duration-500"
              />
            </div>
            <img
              src="/images/quality/micro.png"
              alt="micro"
              className="hidden md:block absolute -left-[80px] -top-[59px] w-[160px] -z-10 lg:-left-[94px] lg:-top-[85px] lg:w-[200px] xl:-left-[100px] xl:-top-[63px] 2xl:-left-[160px] 2xl:-top-[100px] 2xl:w-[280px]"
            />
            <img
              src="/images/quality/cup.png"
              alt="cup"
              className="hidden md:block absolute -right-[90px] -bottom-[80px] w-[160px] -z-10 lg:-right-[111px] lg:-bottom-[110px] lg:w-[200px] xl:-right-[100px] xl:-bottom-[96px] 2xl:w-[250px] 2xl:-right-[180px] 2xl:-bottom-[113px]"
            />
          </div>
        </AnimateDiv>
        <AnimateDiv className="px-5 py-15 text-center md:px-10 lg:px-15 lg:py-20 max-w-[1080px] mx-auto xl:px-0">
          <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4">
            品管落實到每個細節
          </h2>
          <p className="text-deep-brown/[0.82] tracking-[0.64px] mb-10">
            針對食品法規規定的微生物項目，例如沙門氏桿菌、金黃色葡萄球菌等，我們進行逐批檢測與長期監控。同時，每年也會定期由第三方實驗室進行全面性檢測，包括二氧化硫、重金屬、塑化劑等重要指標，從源頭到出廠，全方位守護食品安全。
          </p>
          <div className="flex flex-col gap-4 items-center justify-center md:items-stretch md:flex-row ">
            {CONTROL_DATA.map((item) => (
              <div
                key={item.title}
                className="flex flex-col w-full max-w-[500px] gap-3 px-7 py-10 rounded-[10px] bg-white shadow-[0_2px_18px_0_rgba(0,0,0,0.12)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] mx-auto"
                />
                <h3 className="text-deep-brown text-base font-medium tracking-[0.64px] lg:text-[18px] lg:tracking-[0.72px]">
                  {item.title}
                </h3>
                <p className="text-deep-brown/[0.82] text-sm tracking-[0.56px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateDiv>
      </section>
      <section className="px-5 py-15 bg-[#F7F3F2] text-center">
        <AnimateDiv>
          <h3 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4">
            持續優化品管系統，邁向更高標準
          </h3>
          <p className="text-deep-brown/[0.82] tracking-[0.64px]">
            未來，晉弘將持續強化實驗室能力與設備升級，深化品管專業團隊的訓練，
            <br />
            只為讓每一項產品，都是你可以放心選擇的品質保證。
          </p>
        </AnimateDiv>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Control;
