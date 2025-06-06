import Navbar from '@/components/Navbar';
import WaterDrop from '@/components/icons/WaterDrop';
import Pointer from '@/components/icons/Pointer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className='bg-[url("/images/hero.png")] bg-cover bg-center min-h-[800px] w-full relative flex '>
        <div className='mx-auto mt-45 flex flex-col gap-6 items-center'>
          <h1 className='text-[56px] font-medium tracking-[4.48px] leading-[56px] text-[#30241E]'>
            專業製糖 用心為您
          </h1>
          <p className='text-2xl font-medium text-[#30241E]'>
            不只是供應商，更是品質守門人
          </p>
          <button className='flex items-center gap-2 bg-[#DA3947] text-white px-6 py-4 rounded-lg'>
            <WaterDrop size={20}  />
            <span className='text-base font-medium'>探索產品系列</span>
            <Pointer />
          </button>
        </div>
      </section>
    </div>
  );
}
