import React from "react";
import Logo from "./Logo";
import WaterDrop from "./icons/WaterDrop";

const items = [
  {
    name: "關於我們",
    link: "/about",
  },
  {
    name: "糖漿系列",
    link: "/products",
  },
  {
    name: "品質守護",
    link: "/quality",
  },
  {
    name: "常見問題",
    link: "/faq",
  },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center h-15 px-15">
      <div className="flex items-center gap-2">
        <Logo color="#DA3947" size={28} />
        <h1 className="text-lg font-medium tracking-[2.88px]">晉弘實業股份有限公司</h1>
      </div>
			<div className="flex items-center gap-12">
				<div className="flex items-center gap-16">
					{items.map((item, index) => (
						<a
							href={item.link}
							key={index}
							className="relative flex items-center gap-1 group transition-colors duration-300"
						>
							<span className='absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<WaterDrop
									size={9}
									className="text-transparent group-hover:text-[#DA3947]"
								/>
							</span>
							<span className="text-sm font-medium text-[#30241E]/[0.72] group-hover:text-[#30241E]">{item.name}</span>
						</a>
					))}
				</div>
					<div className="text-xs font-medium px-6 py-2 border border-[#30241E]/[0.72] text-[#30241E]/[0.72] rounded-sm">聯絡我們</div>
			</div>
    </div>
  );
};

export default Navbar;
