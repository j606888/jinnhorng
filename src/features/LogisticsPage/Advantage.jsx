import AnimateDiv from "@/features/shared/AnimateDiv";

const Advantage = () => {
  return (
    <section className="bg-[#F7F3F2] -mt-[215px] relative overflow-hidden md:-mt-[204px] lg:-mt-[227px]">
      <div className="h-[255px] md:h-[244px] lg:h-[267px]"></div>
      <AnimateDiv className="flex flex-col gap-4 px-10 py-15 text-center md:px-25 max-w-[1080px] mx-auto xl:px-15">
        <h2 className="text-[28px] text-deep-brown font-bold tracking-[2.24px]">我們的物流優勢</h2>
        <p className="text-deep-brown tracking-[0.64px]">
          我們擁有數十年運輸經驗，能迅速應對各類配送挑戰；全車隊配備 24
          小時保全監控系統，隨時掌握車輛動態，確保貨物運送進度透明可控，讓您全程放心，交付無憂。
        </p>
      </AnimateDiv>
      <img src="/images/logistics/box-1.png" alt="box-1" className="absolute top-[214px] -left-[30px] w-[140px] h-[140px] md:-left-[0px] md:w-[200px] md:top-[160px] lg:top-[180px]" />
      <img src="/images/logistics/box-2.png" alt="box-1" className="absolute top-[147px] -right-[71px] w-[180px] h-[180px] md:-right-[0px] md:w-[250px] md:top-[120px] lg:top-[140px]" />
    </section>
  );
};

export default Advantage;
