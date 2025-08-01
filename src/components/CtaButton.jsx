import WaterDrop from "./icons/WaterDrop";
import ArrowLight from "./icons/ArrowLight";
import clsx from "clsx";
import Link from "next/link";

const CtaButton = ({ children, className, url, onClick }) => {
  return (
    <Link href={url}>
    <button
      className={clsx(
        "cursor-pointer flex items-center gap-2 bg-[#DA3947] text-white px-6 py-4 rounded-lg hover:bg-[#E1616C] active:bg-[#C43340]",
        className
      )}
      onClick={onClick}
    >
      <WaterDrop size={20} />
      <span className="text-sm font-bold  leading-[normal] tracking-[0.56px]">
        {children}
      </span>
      <ArrowLight />
    </button>
    </Link>
  );
};

export default CtaButton;
