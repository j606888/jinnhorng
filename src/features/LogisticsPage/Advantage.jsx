import AnimateDiv from "@/features/shared/AnimateDiv";

const Advantage = () => {
  return (
    <section className="bg-[#F7F3F2] -mt-[215px] relative overflow-hidden md:-mt-[204px]">
      <div className="h-[255px] md:h-[244px]"></div>
      <AnimateDiv className="flex flex-col gap-4 px-10 py-15 text-center md:px-25 max-w-[1080px] mx-auto xl:px-15">
        <h2 className="text-[28px] text-deep-brown font-bold tracking-[2.24px]">我們的物流優勢</h2>
        <p className="text-deep-brown tracking-[0.64px]">
          我們擁有數十年運輸經驗，能迅速應對各類配送挑戰；全車隊配備 24
          小時保全監控系統，隨時掌握車輛動態，確保貨物運送進度透明可控，讓您全程放心，交付無憂。
        </p>
      </AnimateDiv>
    </section>
  );
};

export default Advantage;
