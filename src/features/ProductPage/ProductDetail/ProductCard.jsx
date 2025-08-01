import { useRouter } from "next/navigation";
const ProductCard = ({ product, onMouseEnter, onMouseLeave }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div className="flex flex-col items-center min-w-[244px] lg:min-w-[337px] xl:min-w-[273px] group cursor-pointer " onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="h-[244px] w-[244px] overflow-hidden rounded-[10px] border-1 border-[#E0E0E0] lg:h-[337px] lg:w-[337px] xl:h-[273px] xl:w-[273px]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-1000" />
      </div>
      <div className="bg-white pt-5 px-4 pb-8 w-full flex flex-col items-center">
        <h3 className="text-[#30241E] text-[15px] font-medium tracking-[0.6x] mb-1">{product.name}</h3>
        <p className="text-[#30241E]/82 tracking-[0.48px] text-[12px] text-center">{product.enName}</p>
      </div>
    </div>
  );
};

export default ProductCard;