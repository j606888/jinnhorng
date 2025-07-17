import LineLogo from "@/components/icons/LineLogo";
import { clsx } from "clsx";

const LineUs = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col w-20 h-20 bg-[#DA3947] rounded-full items-center justify-center gap-1.5 transition-all duration-300",
        "hover:bg-[#E1616C] hover:cursor-pointer",
        "active:bg-[#C43340]",
        className
      )}
    >
      <LineLogo className="w-10 h-10" />
      {/* <span className="text-white text-xs font-medium">立即洽談</span> */}
    </div>
  );
};

export default LineUs;
