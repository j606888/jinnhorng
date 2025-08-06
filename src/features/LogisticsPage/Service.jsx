import AnimateDiv from "@/features/shared/AnimateDiv";

const SERVICE_DATA = [
  {
    image: "/images/logistics/logistics1.png",
    title: "專業運輸服務，靈活因應出貨",
    description: "快速處理、多樣貨型配送，效率與準時兼具",
  },
  {
    image: "/images/logistics/logistics2.png",
    title: "多元車型調度，全區配送到位",
    description: "多款車型支援各式場域，靈活調度全區域",
  },
  {
    image: "/images/logistics/logistics3.png",
    title: "客製倉儲裝櫃，精準對接運輸",
    description: "客製倉儲與裝櫃服務，降低成本、提升效率",
  },
  {
    image: "/images/logistics/logistics4.png",
    title: "安全穩定的運輸",
    description: "標準作業與安全培訓，確保穩定每趟配送",
  },
]

const Service = () => {
  return (
    <section className="relative overflow-x-clip">
      <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] lg:px-25 max-w-[1080px] mx-auto xl:px-15">
        <span>首頁</span>
        <span>{">"}</span>
        <span className="font-bold">物流服務</span>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col px-5 py-15 text-center md:px-10 lg:px-15 lg:py-20 lg:pb-15 max-w-[1080px] mx-auto">
        <h2 className="mb-4 text-[28px] text-deep-brown font-bold tracking-[2.24px]">
          工廠直送，打造高效穩健的供應鏈支持
        </h2>
        <p className="mb-10 text-deep-brown tracking-[0.64px]">
          我們深知，準時、安全的運送是品質的延伸。
          我們建構自有物流體系，精準掌握每一項配送細節，穩妥串接生產與交付之間的每一環，成為您供應鏈中最值得信賴的後勤支援。
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className='w-full h-[234px] rounded-[10px] overflow-hidden lg:h-[310px]'>
            <img src="/images/logistics/truck-1.jpg" alt="truck-1" className="w-full h-full object-cover hover:scale-102 transition-all duration-300" />
          </div>
          <div className='w-full h-[234px] rounded-[10px] overflow-hidden lg:h-[310px]'>
            <img src="/images/logistics/truck-2.jpg" alt="truck-2" className="w-full h-full object-cover hover:scale-102 transition-all duration-300" />
          </div>
        </div>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col px-5 md:px-10 lg:px-15 max-w-[1080px] mx-auto">
        <h2 className="mb-10 text-[28px] text-deep-brown font-bold tracking-[2.24px] text-center">
          從出貨到交付，我們的專業保障
        </h2>
        <div className="flex flex-col gap-5 relative md:flex-row md:flex-wrap md:w-full z-10">
          {SERVICE_DATA.map((item) => (
            <div key={item.title} className="flex flex-col text-center px-7 py-10 rounded-[10px] bg-white shadow-[0px_2px_18px_0px_rgba(0,0,0,0.12)] items-center z-5 md:w-[calc(50%-10px)]">
              <img src={item.image} alt={item.title} className="h-[100px] w-[133px] mb-3" />
              <h3 className="text-[18px] text-deep-brown font-medium tracking-[0.72px] mb-[9px]">{item.title}</h3>
              <p className="text-deep-brown text-sm font-normal tracking-[0.56px]">{item.description}</p>
            </div>
          ))}
          <img src="/images/logistics/box-1.png" alt="box-1" className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] -left-[50px] -bottom-[140px] md:-left-[40px] md:-bottom-[133px] xl:-left-[60px] xl:-bottom-[156px]" />
          <img src="/images/logistics/box-2.png" alt="box-1" className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] -right-[91px] -bottom-[111px] md:-right-[40px] md:-bottom-[128px] lg:-right-[60px] lg:-bottom-[117px]  xl:-bottom-[156px]" />
        </div>
      </AnimateDiv>
    </section>
  );
};

export default Service;
