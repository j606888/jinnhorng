import AnimateDiv from "@/features/shared/AnimateDiv";

const Hero = () => {
  return <section className="relative w-full h-[360px] bg-[url('/images/contact/hero.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center z-1 overflow-hidden xl:h-[458px]">
    <AnimateDiv className='mt-[60px] text-center  z-2'>
      <h2 className='text-white font-ar text-xl font-semibold tracking-[1.2px] mb-[2px] uppercase'>Contact us</h2>
      <h1 className='text-white text-[36px] font-bold tracking-[2.88px]'>聯絡我們</h1>
    </AnimateDiv>
    <div className="absolute top-0 left-0 w-full h-[90px]" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 9.34%, rgba(0, 0, 0, 0.30) 100%)' }}></div>
    <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[354px] h-[170px] rounded-[354px] blur-[100px] bg-[rgba(48,36,30,0.23)] z-1" />
  </section>;
};

export default Hero;