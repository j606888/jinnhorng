import { useState } from "react";
import Question from "./Question";
import AnimateDiv from "@/features/shared/AnimateDiv";

const QUESTIONS_DATA = [
  {
    id: "Q1",
    question: "各類糖漿保存方法?",
    answer:
      "保存方式：未開封情況下，建議儲存於陰涼乾燥處，避免高溫、陽光直射，存儲時應避免與有強烈氣味的物品放在一起。若已開封，為確保最佳食用期限，請盡早使用完。",
  },
  {
    id: "Q2",
    question: "果糖(高果糖糖漿)有基因改造的疑慮?",
    answer:
      "我們所製造的果糖(高果糖糖漿)產品，非使用基因改造原料所製成，故無基因改造問題。",
  },
  {
    id: "Q3",
    question: "果糖(高果糖糖漿)會結晶?",
    answer:
      "我們所製造的果糖(高果糖糖漿)產品，經過精心調配，穩定性高，使果糖(高果糖糖漿)不易產生結晶狀況，請安心選購。",
  },
];

const Contact = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  return (
    <section>
      <AnimateDiv className="flex gap-2 px-5 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-15">
        <span>首頁</span>
        <span>{">"}</span>
        <span className="font-bold">常見問題</span>
      </AnimateDiv>
      <AnimateDiv className="flex flex-col px-5 pt-8 pb-10 gap-3 relative  mb-7 md:px-10 lg:px-15 max-w-[1080px] mx-auto">
        {QUESTIONS_DATA.map((item) => (
          <Question key={item.id} {...item} isOpen={openQuestionId === item.id} onClick={() => setOpenQuestionId(openQuestionId === item.id ? null : item.id)} />
        ))}
      </AnimateDiv>
    </section>
  );
};

export default Contact;
