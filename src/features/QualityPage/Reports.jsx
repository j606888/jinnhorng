import Navbar from "@/components/Navbar";
import ContactUs from "../shared/ContactUs";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import AnimateDiv from "@/features/shared/AnimateDiv";

const CONTROL_DATA = [
  {
    image: "/images/quality/檢測報告_果糖(高果糖糖漿).jpg",
    title: "果糖(高果糖糖漿)",
  },
  {
    image: "/images/quality/檢測報告_特級結晶葡萄糖.jpg",
    title: "特級結晶葡萄糖",
  },
  {
    image: "/images/quality/檢測報告_轉化液糖.jpg",
    title: "轉化液糖",
  },
  {
    image: "/images/quality/檢測報告_麥芽糖.jpg",
    title: "麥芽糖",
  },
  {
    image: "/images/quality/檢測報告_麥芽糖漿.jpg",
    title: "麥芽糖漿",
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
          <span className="font-bold">檢測報告</span>
        </AnimateDiv>
        <AnimateDiv className="px-5 pt-15 pb-20 text-center md:px-10 lg:px-15 lg:pt-20 lg:pb-30 xl:pt-25 max-w-[1080px] mx-auto xl:px-0">
          <div className="flex flex-col mb-10">
            <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4">
              檢測報告
            </h2>
            <p className="text-deep-brown/[0.82] tracking-[0.64px] xl:text-lg">
              為確保每一批產品的品質與安全，我們定期委託第三方公正單位進行嚴格檢驗。所有報告皆依據國際標準檢測項目執行，全面保障產品符合食品安全規範，讓您選得安心、用得放心。
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
                <div>
                  <p className="text-deep-brown text-[15px] font-medium tracking-[0.6px]">
                    {item.title}
                  </p>
                  <p className="text-deep-brown/[0.6] text-[15px] font-medium tracking-[0.6px]">
                    檢驗報告
                  </p>
                </div>
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
