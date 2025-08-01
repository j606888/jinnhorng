import Navbar from "@/components/Navbar";
import ContactUs from "../shared/ContactUs";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import AnimateDiv from "@/features/shared/AnimateDiv";

const CONTROL_DATA = [
  {
    image: "/images/quality/cert1.jpg",
    title: "ISO 22000:2018食品安全管理系統",
  },
  {
    image: "/images/quality/cert2.jpg",
    title: "HACCP 危害分析與關鍵控制點認證",
  },
  {
    image: "/images/quality/cert3.jpg",
    title: "HALAL清真認證",
  },
  {
    image: "/images/quality/cert4.jpg",
    title: " KOSHER猶太認證",
  },
];

const Control = () => {
  return (
    <>
      <Navbar white />
      <Hero />
      <section className="relative">
        <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0">
          <span>首頁</span>
          <span>{">"}</span>
          <span>品質守護</span>
          <span>{">"}</span>
          <span className="font-bold">證書與標章</span>
        </AnimateDiv>
        <AnimateDiv className="px-5 pt-15 pb-20 text-center md:px-10 lg:px-15 lg:pt-20 lg:pb-30 xl:pt-25 max-w-[1080px] mx-auto xl:px-0">
          <div className="flex flex-col mb-10">
            <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4">
            證書與標章
            </h2>
            <p className="text-deep-brown/[0.82] tracking-[0.64px] xl:text-lg">
            我們堅守每一道製程細節，並通過多項國際標準與專業機構的認證，為客戶打造安全、高品質、值得信賴的產品體驗。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-9">
            {CONTROL_DATA.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 items-center"
              >
                <div className="w-[240px] md:w-[196px] lg:w-[240px] border border-[#E0E0E0] bg-white rounded-[11px] overflow-hidden shadow-[0_4px_24px_0_rgba(0,0,0,0.08)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full hover:scale-102 transition-all duration-500"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                <p className="text-deep-brown text-[15px] font-medium tracking-[0.6px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </AnimateDiv>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Control;
