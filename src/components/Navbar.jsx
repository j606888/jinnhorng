"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { clsx } from "clsx";
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
  const [isScolled, setIsScolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScolled(offset > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-50 flex justify-between items-center h-15 px-15 transition-all duration-300",
        isScolled
          ? "bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)]"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <Logo color="#DA3947" size={28} />
        <h1 className="text-lg font-medium tracking-[2.88px]">
          晉弘實業股份有限公司
        </h1>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-16">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.link}
                className="relative flex items-center gap-1 transition-colors duration-300"
              >
                <span className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <WaterDrop
                    size={16}
                    className="text-transparent group-hover:text-[#DA3947]"
                  />
                </span>
                <span className="text-sm font-medium text-[#30241E]/[0.72] group-hover:text-[#30241E] group-hover:font-medium">
                  {item.name}
                </span>
              </a>
              {item.children && (
                <div
                  className={clsx(
                    "absolute -left-5 top-full opacity-0 invisible",
                    "group-hover:opacity-100 group-hover:visible transition-all duration-300",
                    isScolled ? "pt-7" : "pt-5"
                  )}
                >
                  <div className="bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-xl w-[184px] py-4 pr-10 pl-5 flex flex-col gap-4.5">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.link}
                        className="text-sm text-[#30241E]/[0.72] hover:text-[#30241E] hover:font-medium transition-colors duration-200"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
