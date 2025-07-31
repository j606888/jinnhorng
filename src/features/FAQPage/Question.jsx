import Expand from "@/components/icons/Expand";
import Collapse from "@/components/icons/Collapse";
import clsx from "clsx";

const Question = ({ id, question, answer, onClick, isOpen }) => {
  return (
    <div className={clsx(
      "rounded-[10px] border-[1px] border-deep-brown/[0.16] ",
      isOpen ? "bg-[#F8F7F7] border-l-6 border-l-[#DA3947]" : ""
    )}>
      <div className="flex gap-6 items-center p-4 cursor-pointer" onClick={onClick}>
        <div className="text-deep-brown/[0.82] text-lg font-semibold tracking-[1.08px]">
          {id}
        </div>
        <div className="text-deep-brown text-lg font-medium tracking-[0.72px] mr-auto">
          {question}
        </div>
        <div className="flex-shrink-0">
          {isOpen ? <Collapse /> : <Expand />}
        </div>
      </div>
      <div 
        className={clsx(
          "text-deep-brown/[0.82] tracking-[0.64px] pl-[66px] pr-6 overflow-hidden transition-all duration-500 ease-in-out",
          isOpen 
            ? "max-h-[500px] opacity-100 pb-6" 
            : "max-h-0 opacity-0 pb-0"
        )}
      >
        {answer}
      </div>
    </div>
  )
}

export default Question;