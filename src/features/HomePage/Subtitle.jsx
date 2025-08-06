import Stroke from "@/components/icons/Stroke";

const Subtitle = ({ enTitle, cnTitle, white = false }) => {
  const enTitleColor = white ? "text-white" : "text-[#604C2B]/50";
  const cnTitleColor = white ? "text-white" : "text-[#30241E]/70";

  return (
    <div className="flex flex-col items-center">
      <h3 className={`${enTitleColor} font-semibold tracking-[0.96px] mb-1 md:text-xl font-ar`}>
        {enTitle}
      </h3>
      <h3 className={`${cnTitleColor} text-xl font-bold tracking-[4px] md:text-2xl md:tracking-[4.8px]`}>
        {cnTitle}
      </h3>
      <Stroke className="md:w-[120px] md:h-[24px]" />
    </div>
  );
};

export default Subtitle;
