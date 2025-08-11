import AnimateDiv from "@/features/shared/AnimateDiv";

const Hero = () => {
  return <section className='relative w-full h-[360px] bg-[url("/images/logistics/hero.jpg")] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center lg:h-[360px] xl:h-[458px]'>
    <AnimateDiv className='mt-[60px] text-center '>
      <h2 className='text-white font-ar text-xl font-semibold tracking-[1.2px] mb-[2px] uppercase'>logistics services</h2>
      <h1 className='text-white text-[36px] font-bold tracking-[2.88px]'>物流服務</h1>
    </AnimateDiv>
  </section>
};

export default Hero;