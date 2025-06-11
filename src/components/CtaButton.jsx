import WaterDrop from "./icons/WaterDrop";
import ArrowLight from "./icons/ArrowLight";

const CtaButton = ({ children, onClick }) => {
  return (
    <button
      className="cursor-pointer flex items-center gap-2 bg-[#DA3947] text-white px-6 py-4 rounded-lg hover:bg-[#E1616C] active:bg-[#C43340]"
      onClick={onClick}
    >
      <WaterDrop size={20} />
      <span className="text-base font-bold  leading-[normal] tracking-[0.64px]、、">
        {children}
      </span>
      <ArrowLight />
    </button>
  );
};

export default CtaButton;
