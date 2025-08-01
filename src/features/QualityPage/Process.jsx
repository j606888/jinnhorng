import Navbar from "@/components/Navbar";
import ContactUs from "../shared/ContactUs";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import { useState, useRef, useEffect } from "react";
import ArrowDown from "@/components/icons/ArrowDown";
import AnimateDiv from "@/features/shared/AnimateDiv";

const PRODUCTS = [
  {
    id: 1,
    label: "果糖(高果糖糖漿)",
    image: "/images/quality/流程圖_高果糖.jpg",
  },
  {
    id: 2,
    label: "轉化液糖",
    image: "/images/quality/流程圖_轉化液糖.jpg",
  },
  {
    id: 3,
    label: "麥芽糖漿",
    image: "/images/quality/流程圖_麥芽糖漿.jpg",
  },
  {
    id: 4,
    label: "龍眼風味糖漿",
    image: "/images/quality/流程圖_龍眼風味糖漿.jpg",
  },
  {
    id: 5,
    label: "特級結晶葡萄糖",
    image: "/images/quality/流程圖_特級結晶葡萄糖.jpg",
  },
];

const Control = () => {
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedProduct = PRODUCTS.find(
    (product) => product.id === selectedProductId
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <span className="font-bold">製程流程</span>
        </AnimateDiv>
        <AnimateDiv className="px-5 pt-15 pb-20 text-center md:px-10 lg:px-15 lg:pt-20 max-w-[1080px] mx-auto xl:px-0">
          <div className="flex flex-col mb-10">
            <h2 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] mb-4">
              製程流程
            </h2>
            <p className="text-deep-brown/[0.82] tracking-[0.64px] xl:text-lg">
              我們的生產流程依循標準化作業規範（SOP），從原料進廠、製程控管到最終包裝，每一道程序皆經嚴格控管與即時監測。結合自動化設備與專業團隊管理，確保製程穩定、高效，讓每一批產品都能達到一致品質，展現我們對食品安全與製造細節的重視。
            </p>
          </div>
          <div className="relative inline-block md:hidden" ref={dropdownRef}>
            <div
              className="inline-flex flex-row gap-1 items-center justify-center px-5 py-3 rounded-[8px] border border-[#E3E3E3] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.11)] cursor-pointer hover:bg-gray-50 transition-colors w-[208px]"
              onClick={toggleDropdown}
            >
              <p>{selectedProduct.label}</p>
              <ArrowDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E3E3E3] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,0,0,0.15)] z-10 w-full">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    className={`w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors first:rounded-t-[8px] last:rounded-b-[8px] cursor-pointer ${
                      product.id === selectedProductId
                        ? "bg-gray-100 font-medium"
                        : ""
                    }`}
                    onClick={() => handleProductSelect(product.id)}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-3 lg:gap-4 items-center justify-center">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`px-5 py-3 text-[14px] text-deep-brown/[0.82] tracking-[0.56px] cursor-pointer rounded-[8px] hover:bg-[#E0E0E0]/[0.5] ${
                  product.id === selectedProductId
                    ? "bg-[#E0E0E0]/[0.5] font-bold"
                    : ""
                }`}
                onClick={() => handleProductSelect(product.id)}
              >
                <p>{product.label}</p>
              </div>
            ))}
          </div>
          {selectedProduct && (
            <div className="mt-8">
              <img
                src={selectedProduct.image}
                alt={`${selectedProduct.label}的製程流程圖`}
                className="w-full"
              />
            </div>
          )}
        </AnimateDiv>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Control;
