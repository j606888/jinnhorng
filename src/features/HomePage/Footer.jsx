import Logo from "@/components/icons/Logo";

const FOOTER_LINKS = [
  {
    title: '關於我們',
    link: '/about-us',
  },
  {
    title: '糖漿系列',
    link: '/products',
  },
  {
    title: '品質守護',
    link: '/quality',
  },
  {
    title: '常見問題',
    link: '/faq',
  },
  {
    title: '聯絡我們',
    link: '/about-us',
  },
]

const Footer = () => {
  return (
    <footer className="relative pt-10 pr-10 pb-[140px] pl-6 bg-[#2B2623] md:px-[20px] md:pb-30 lg:px-15 lg:py-18">
      <div className="relative flex flex-col gap-10 max-w-[1080px] mx-auto md:items-center lg:flex-row lg:items-start lg:gap-0">
        <div className="flex gap-3 items-center md:justify-center lg:flex-col lg:items-start lg:w-[289px] lg:flex-shrink-0 lg:gap-[15px] lg:mr-auto">
          <Logo className="w-[35px] h-[29px] lg:w-[52px] lg:h-[42px]" />
          <h4 className="text-white text-[22px] font-medium tracking-[4px] lg:text-[20px] lg:tracking-[0.8px]">晉弘實業股份有限公司</h4>
        </div>
        <div className="flex flex-wrap gap-y-6 w-full md:flex-nowrap md:gap-10 md:justify-center lg:flex-col lg:items-start lg:gap-5 lg:w-[257px]">
          {FOOTER_LINKS.map((link) => (
            <div key={link.title} className="w-[50%] md:w-auto">
              <p className="text-[#ffffff]/92 font-medium tracking-[0.64px] md:text-sm">{link.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 md:w-[450px] md:text-sm lg:w-[257px] lg:flex-shrink-0">
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-[#ffffff]/92 font-medium tracking-[0.64px]">電話</span>
            <span className="text-[#ffffff]/60 font-medium">06-5701126</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-[#ffffff]/92 font-medium tracking-[0.64px]">傳真</span>
            <span className="text-[#ffffff]/60 font-medium">06-5700242</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-[#ffffff]/92 font-medium tracking-[0.64px]">地址</span>
            <span className="text-[#ffffff]/60 font-medium">721013  台南市麻豆區麻口里柚安路二段420號</span>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-[288px] ">
          <p className="text-[#ffffff]/50 text-xs tracking-[0.48px] text-center lg:text-start">COPYRIGHT © JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 lg:w-[288px] lg:left-[60px] lg:bottom-[72px] lg:p-0 lg:hidden">
        <p className="text-[#ffffff]/50 text-xs tracking-[0.48px] text-center lg:text-start">COPYRIGHT © JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.</p>
      </div>
    </footer>
  );
};

export default Footer;