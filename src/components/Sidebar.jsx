import Logo from "./icons/Logo";
import X from "./icons/X";
import Menu from "./icons/Menu";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import ArrowUp from "./icons/ArrowUp";
import ArrowDown from "./icons/ArrowDown";
import { LINKS } from "./Navbar";
import WaterDrop from "@/components/icons/WaterDrop";

const Sidebar = ({ white = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const sidebarRef = useRef(null);

  const toggleExpand = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <X
          onClick={() => setIsOpen(false)}
          className="cursor-pointer xl:hidden"
        />
      ) : (
        <Menu
          onClick={() => setIsOpen(true)}
          className="cursor-pointer xl:hidden"
          color={white ? "#fff" : "#30241E"}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-60 lg:h-auto lg:top-[66px] lg:right-4 lg:left-auto lg:py-3 lg:w-[375px] lg:rounded-[10px] lg:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-[14px] lg:hidden">
              <div className="flex items-center gap-2.5 ">
                <Logo width={21.5} height={18} />
                <h1 className="text-[#30241E] text-[14px] font-medium tracking-[2.5px]">
                  晉弘實業股份有限公司
                </h1>
              </div>
              <X onClick={() => setIsOpen(false)} />
            </div>
            <motion.div
              className="flex flex-col"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  }}
                >
                  {link.children ? (
                    <>
                      <div
                        className="text-[#30241E] text-base font-medium tracking-[0.64px] flex items-center justify-between py-[18px] pl-[50px] pr-[24px] cursor-pointer group"
                        onClick={() => toggleExpand(link.name)}
                      >
                        <div className="flex items-center justify-between w-full relative group">
                          <span className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <WaterDrop size={16} color="#DA3947" />
                          </span>
                          <span>{link.name}</span>
                          {expanded === link.name ? <ArrowUp /> : <ArrowDown />}
                        </div>
                      </div>
                      <AnimatePresence initial={false}>
                        {expanded === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.link}
                                className="text-[#30241E]/[0.72] text-[15px] font-medium tracking-[0.64px] py-3 pl-[64px] cursor-pointer hover:text-[#30241E] transition-colors duration-200 group"
                              >
                                <span>{child.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div className="py-[18px] pl-[50px] pr-[24px]">
                      <Link
                        href={link.link}
                        className="text-[#30241E] text-base font-medium tracking-[0.64px] cursor-pointer"
                      >
                        <div className="flex items-center relative group">
                          <span className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <WaterDrop size={16} color="#DA3947" />
                          </span>
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-auto w-full p-6 lg:hidden">
              <p className="text-[#30241E]/[0.82] text-xs font-medium tracking-[0.4px] text-center">
                COPYRIGHT © JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
