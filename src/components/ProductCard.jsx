import CircleButton from "./CircleButton";

const ProductCard = ({ title, description, image, url }) => {
  return (
    <div className="relative">
      <div className="mx-auto relative z-100 w-[214px] h-[254px] flex items-center justify-center rounded-xl bg-[#D9D9D9] shadow-[0px_6px_40.9px_0px_rgba(0,0,0,0.07),0px_52px_60px_0px_rgba(0,0,0,0.07)]">
        {url ? <img src={image} alt={title} /> : <p className='text-2xl font-bold text-[rgb(0,0,0,0.5)] tracking-[1.92px]'>Photo</p>}
      </div>
      <div className="flex flex-col items-center bg-white w-[300px] h-[390px] rounded-[10px] shadow-[0px_12px_25.6px_0px_rgba(0,0,0,0.06)] -mt-[196px] pt-[237px] text-center">
        <h4 className="mb-2 text-[22px] font-medium text-[#30241E] tracking-[1.76px]">{title}</h4>
        <p className="mb-5 text-sm text-[rgb(48,36,30)]/82 tracking-[0.52px] font-medium">{description}</p>
        <CircleButton />
      </div>
    </div>
  );
};

export default ProductCard;