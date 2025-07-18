import Logo from "./icons/Logo";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import clsx from "clsx";

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
    <div className={clsx(
      "fixed top-0 left-0 right-0 z-50 flex px-5 py-[14px] justify-between items-center bg-transparent md:px-10",
      isScolled
        ? "bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)]"
        : "bg-transparent"
    )}>
      <div className="flex items-center gap-2.5">
        <Logo />
        <h1 className="text-[#30241E] text-lg font-medium tracking-[3.24px]">晉弘實業股份有限公司</h1>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
