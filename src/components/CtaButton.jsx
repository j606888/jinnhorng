import WaterDrop from "./icons/WaterDrop";
import ArrowLarge from "./icons/ArrowLarge";

const CtaButton = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center gap-2 bg-[#DA3947] text-white px-6 py-4 rounded-lg"
      onClick={onClick}
    >
      <WaterDrop size={20} />
      <span className="text-base font-bold  leading-[normal] tracking-[0.64px]、、">
        {children}
      </span>
      <ArrowLarge />
    </button>
  );
};

export default CtaButton;
