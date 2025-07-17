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
    <footer className="relative pt-10 pr-10 pb-[140px] pl-6 bg-[#2B2623]">
      <div className="flex flex-col  gap-10">
        <div className="flex gap-3 items-center">
          <Logo  width={35} height={29} />
          <h4 className="text-white text-[22px] font-medium tracking-[4px]">晉弘實業股份有限公司</h4>
        </div>
        <div className="flex flex-wrap gap-y-6 w-full">
          {FOOTER_LINKS.map((link) => (
            <div key={link.title} className="w-[50%]">
              <p className="text-white font-medium tracking-[0.64px]">{link.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-white font-medium tracking-[0.64px]">電話</span>
            <span className="text-[#ffffff]/60 font-medium">06-5701126</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-white font-medium tracking-[0.64px]">傳真</span>
            <span className="text-[#ffffff]/60 font-medium">06-5700242</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[34px] flex-shrink-0 text-white font-medium tracking-[0.64px]">地址</span>
            <span className="text-[#ffffff]/60 font-medium">721013  台南市麻豆區麻口里柚安路二段420號</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <p className="text-[#ffffff]/50 text-xs tracking-[0.48px] text-center">COPYRIGHT © JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.</p>
      </div>
    </footer>
  );
};

export default Footer;