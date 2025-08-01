import AnimateDiv from "@/features/shared/AnimateDiv";

const CONTACT_DATA = [
  {
    image: "/images/contact/phone.png",
    title: "電話",
    description: "06-5701126",
  },
  {
    image: "/images/contact/fax.png",
    title: "傳真",
    description: "06-5700242",
  },
  {
    image: "/images/contact/address.png",
    title: "地址",
    description: "721013  台南市麻豆區麻口里柚安路二段420號",
  },
];

const CUSTOM_LI_STYLE =
  "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:bg-black before:rounded-full";

const Contact = () => {
  return (
    <section>
      <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-15">
        <span>首頁</span>
        <span>{">"}</span>
        <span className="font-bold">聯絡我們</span>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col px-5 pt-[28px] text-center md:px-10 lg:px-15 lg:py-20 lg:pb-15 max-w-[1080px] mx-auto">
        <h2 className="mb-[6px] text-[24px] text-deep-brown font-bold tracking-[1.44px]">
          晉弘實業股份有限公司
        </h2>
        <p className="mb-[47px] text-xs font-ar text-deep-brown/[0.82] tracking-[0.72px]">
          JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.
        </p>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col px-5 gap-4 relative md:flex-row md:w-full mb-7 md:px-10 lg:px-15 max-w-[1080px] mx-auto">
        {CONTACT_DATA.map((item) => (
          <div
            key={item.title}
            className="flex flex-col px-6 py-6 rounded-[10px] bg-white shadow-[0px_2px_18px_0px_rgba(0,0,0,0.12)] items-center z-5 w-full text-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[56px] w-[56px] mb-3"
            />
            <h3 className="text-base text-deep-brown/[0.82] font-medium tracking-[0.64px] mb-2">
              {item.title}
            </h3>
            <p className="text-deep-brown/[0.58] text-sm font-normal tracking-[0.56px]">
              {item.description}
            </p>
          </div>
        ))}
      </AnimateDiv>
      <AnimateDiv>
        <ul className="flex flex-col gap-3 px-5 text-sm text-deep-brown tracking-[0.56px] list-none mb-[37px] md:text-base md:px-10 lg:px-15 max-w-[1080px] mx-auto">
          <li className={CUSTOM_LI_STYLE}>產業類別：食品製造業/糖類製造業</li>
          <li className={CUSTOM_LI_STYLE}>代表人姓名：李正峰</li>
          <li className={CUSTOM_LI_STYLE}>設立日期：1977/10/12</li>
          <li className={CUSTOM_LI_STYLE}>
            主要產品：果糖(高果糖糖漿)、麥芽糖、轉化液糖,本產品行銷供應國內各大知名飲料,果汁及冰品廠使用。
          </li>
        </ul>
      </AnimateDiv>
      <AnimateDiv className="px-5 pb-[28px] md:px-10 lg:px-15 max-w-[1080px] mx-auto">
        <img
          src="/images/contact/car.jpg"
          alt="car"
          className="w-full h-[224px] rounded-[10px] md:h-[458px] lg:h-[602px] xl:h-[719px]"
        />
      </AnimateDiv>
    </section>
  );
};

export default Contact;
