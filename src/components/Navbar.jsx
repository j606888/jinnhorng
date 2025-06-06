import React from "react";
import Logo from "./Logo";
import WaterDrop from "./icons/WaterDrop";

const items = [
  {
    name: "關於我們",
    link: "/about",
  },
  {
    name: "產品系列",
    link: "/products",
    children: [
      {
        name: "果糖（高果糖糖漿）",
        link: "/products/fructose",
      },
      {
        name: "轉化液糖",
        link: "/products/2",
      },
      {
        name: "麥芽糖漿",
        link: "/products/2",
      },
      {
        name: "龍眼風味糖漿",
        link: "/products/2",
      },
      {
        name: "龍眼風味糖漿",
        link: "/products/2",
      },
    ],
  },
  {
    name: "品質守護",
    link: "/quality",
    children: [
      {
        name: "品質控管",
        link: "/quality",
      },
      {
        name: "製程流程",
        link: "/quality",
      },
      {
        name: "證書與標章",
        link: "/quality",
      },
      {
        name: "檢測報告",
        link: "/quality",
      },
    ],
  },
  {
    name: "常見問題",
    link: "/faq",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between items-center h-15 px-15">
      <div className="flex items-center gap-2">
        <Logo color="#DA3947" size={28} />
        <h1 className="text-lg font-medium tracking-[2.88px]">
          晉弘實業股份有限公司
        </h1>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-16">
          {items.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="relative flex items-center gap-1 group transition-colors duration-300"
            >
              <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <WaterDrop
                  size={20}
                  className="text-transparent group-hover:text-[#DA3947]"
                />
              </span>
              <span className="text-sm font-medium text-[#30241E]/[0.72] group-hover:text-[#30241E]">
                {item.name}
              </span>
            </a>
          ))}
        </div>
        <div className="text-xs font-medium px-6 py-2 border border-[#30241E]/[0.72] text-[#30241E]/[0.72] rounded-sm">
          聯絡我們
        </div>
      </div>
    </div>
  );
};

export default Navbar;
