import Logo from "./icons/Logo";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import clsx from "clsx";
import WaterDrop from "@/components/icons/WaterDrop";
import Link from "next/link";

export const LINKS = [
  {
    name: "關於我們",
    link: "/about",
  },
  {
    name: "產品系列",
    children: [
      {
        name: "所有產品",
        link: "/products",
      },
      {
        name: "果糖（高果糖糖漿）",
        link: "/products/fructose",
      },
      {
        name: "轉化液糖",
        link: "/products/conversion-liquid-sugar",
      },
      {
        name: "麥芽糖漿",
        link: "/products/maltose-syrup",
      },
      {
        name: "龍眼風味糖漿",
        link: "/products/longan-flavor-syrup",
      },
      {
        name: "特級結晶葡萄糖",
        link: "/products/super-crystalline-glucose",
      },
    ],
  },
  {
    name: "物流服務",
    link: "/logistics",
  },
  {
    name: "品質守護",
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
  {
    name: "聯絡我們",
    link: "/contact",
  },
];

const Navbar = ({ white = false }) => {
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
        "fixed top-0 left-0 right-0 z-50 flex px-5 py-[14px] justify-between items-center bg-transparent md:px-10 xl:h-15",
        isScolled
          ? "bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)]"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2.5">
        <Logo color={white && !isScolled ? "#fff" : "#DA3947"} />
        <h1
          className={clsx(
            "text-lg font-medium tracking-[3.24px]",
            white && !isScolled ? "text-white" : "text-[#30241E]"
          )}
        >
          晉弘實業股份有限公司
        </h1>
      </div>
      <Sidebar white={white && !isScolled} />
      <div className="hidden xl:flex gap-16 items-center">
        {LINKS.slice(0, 5).map((link) =>
          link.children ? (
            <div
              key={link.name}
              className={clsx(
                "text-sm font-bold tracking-[0.56px] relative group  transition-colors duration-300 flex items-center",
                white && !isScolled
                  ? "text-white"
                  : "text-[#30241E]/[0.72] hover:text-[#30241E]"
              )}
            >
              <span className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <WaterDrop
                  size={16}
                  color={white && !isScolled ? "#fff" : "#DA3947"}
                />
              </span>
              <span>{link.name}</span>
              <div
                className={clsx(
                  "absolute -left-5 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                  isScolled ? "pt-7" : "pt-5"
                )}
              >
                <div className="bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] rounded-xl w-[184px] py-4 pr-8 pl-5 flex flex-col gap-4.5">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.link}
                      className="text-sm text-[#30241E]/[0.72] hover:text-[#30241E] font-medium transition-colors duration-200"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.link}
              className={clsx(
                "group relative text-sm font-bold tracking-[0.56px]  transition-colors duration-300 flex items-center",
                white && !isScolled
                  ? "text-white"
                  : "text-[#30241E]/[0.72] hover:text-[#30241E]"
              )}
            >
              <span className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <WaterDrop
                  size={16}
                  color={white && !isScolled ? "#fff" : "#DA3947"}
                />
              </span>
              <span>{link.name}</span>
            </Link>
          )
        )}
        <Link
          href="/contact"
          className={clsx(
            "ml-[-14px] text-xs px-6 py-2 border-1 font-bold  rounded-[4px] transition-colors duration-200",
            white && !isScolled
              ? "text-white border-white hover:bg-white hover:text-deep-brown active:bg-[#F5F5F5]"
              : "text-[#30241E]/[0.72] border-[#30241E]/[0.72] hover:bg-[#30241E] hover:text-white active:bg-[#403028]"
          )}
        >
          聯絡我們
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
