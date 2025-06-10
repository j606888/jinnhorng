import ArrowSmall from "./icons/ArrowSmall";
import ArrowLarge from "./icons/ArrowLarge";
import { clsx } from "clsx";

const CircleButton = ({
  size = "small",
  direction = "right",
  className = '',
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white transition-all duration-300 cursor-pointer flex items-center justify-center rounded-[100px] border-1 border-[#DBDBDB]",
        size === "small" ? "w-[46px] h-[46px]" : "w-[60px] h-[60px]",
        "hover:bg-[#DA3947] hover:text-white",
        "active:bg-[#C43340]",
        className
      )}
    >
      {size === "small" ? (
        <ArrowSmall className={clsx(
          direction === "left" && "scale-x-[-1]"
        )} />
      ) : (
        <ArrowLarge className={clsx(
          direction === "left" && "scale-x-[-1]"
        )} />
      )}
    </div>
  );
};

export default CircleButton;
