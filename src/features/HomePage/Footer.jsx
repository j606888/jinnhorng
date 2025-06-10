import Logo from "@/components/Logo"

const Footer = () => {
  return (
    <footer className='bg-[#2B2623] pt-[73px] pb-[116px] flex gap-4'>
      <div className='w-[1080px] flex gap-4 m-auto'>
        <div className='flex flex-col gap-4 w-[289px] mr-auto'>
          <Logo color="#DA3947" />
          <h4 className='text-white text-xl font-medium tracking-[0.8px]'>晉弘實業股份有限公司</h4>
          <p className='text-[rgb(255,255,255,0.5)] text-sm font-medium tracking-[0.56px] mt-auto'>COPYRIGHT © JINN HORNG CHEMICAL INDUSTRIAL CO., LTD.</p>
        </div>
        <div className='w-[296px] flex flex-col gap-5'>
          <h4 className='text-2xl font-medium tracking-[0.96px] text-[rgb(255,255,255,0.5)]'>
            Category
          </h4>
          <div className='flex flex-col gap-5 text-white'>
            <div>關於我們</div>
            <div>糖漿系列</div>
            <div>品質守護</div>
            <div>常見問題</div>
            <div>聯絡我們</div>
          </div>
        </div>
        <div className='w-[296px] flex flex-col gap-5'>
          <h4 className='text-2xl font-medium tracking-[0.96px] text-[rgb(255,255,255,0.5)]'>
            Contact
          </h4>
          <div className='flex flex-col gap-2.5 text-white'>
            <div>電話  |  06-5701126</div>
            <div>傳真  |  06-5700242</div>
            <div>地址  |  721013  台南市麻豆區麻口里柚安路二段420號</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer