import CircleButton from "@/components/CircleButton";

const ProductCard = ({ name, enName, image }) => {
  return (
    <div className="flex flex-col items-center min-w-[252px] max-w-[300px] rounded-[10px] overflow-hidden shadow-[0px_10px_24px_0px_rgba(0,0,0,0.06)]">
      <img src={image} alt={name} />
      <div className="bg-white pt-5 px-14 pb-8 w-full flex flex-col items-center">
        <h3 className="text-[#30241E] text-[22px] font-medium tracking-[1.76px] mb-2">{name}</h3>
        <p className="text-[#30241E]/82 tracking-[0.52px] text-[13px] text-center font-medium mb-5">{enName}</p>
        <CircleButton />
      </div>
    </div>
  );
};

export default ProductCard;