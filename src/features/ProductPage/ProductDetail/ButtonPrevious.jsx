import ArrowLeft from "@/components/icons/ArrowLeft"

const ButtonPrevious = ({ onClick, className }) => {
  return (
    <div className={`w-9 h-14 flex items-center justify-center cursor-pointer rounded-r-[10px] bg-white/[0.85] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] group ${className}`} onClick={onClick}>
      <ArrowLeft className="text-[#30241E] group-hover:text-[#30241E]/[0.72] active:text-[#30241E]" />
    </div>
  )
}

export default ButtonPrevious;