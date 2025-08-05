import AnimateDiv from "../shared/AnimateDiv";

const Quality = () => {
  return (
    <AnimateDiv className="px-0 py-20 bg-[#F7F3F2] relative">
      <h3 className="text-deep-brown text-[28px] font-bold tracking-[2.24px] text-center">
        成就品質、用心為本
        <br />
        與您共築信賴未來
      </h3>
      <img src="/images/about/dripping.png" alt="dripping" className="w-[24px] absolute -top-[58px] left-1/2 -translate-x-1/2" />
    </AnimateDiv>
  );
};

export default Quality;
