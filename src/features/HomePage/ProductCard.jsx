import CircleButton from "@/components/CircleButton";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, onMouseEnter, onMouseLeave }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${product.slug}`);
  };
  return (
    <div
      className="flex flex-col items-center min-w-[252px] max-w-[300px] rounded-[10px] overflow-hidden shadow-[0px_10px_24px_0px_rgba(0,0,0,0.06)] xl:min-w-[300px] group cursor-pointer hover:shadow-[0px_10px_24px_0px_rgba(0,0,0,0.12)]"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-[300px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onContextMenu={(e) => e.preventDefault()}
          className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-600"
        />
      </div>
      <div className="bg-white pt-5 px-4 pb-8 w-full flex flex-col items-center">
        <h3 className="text-[#30241E] text-[22px] font-medium tracking-[1.76px] mb-2">
          {product.name}
        </h3>
        <p className="text-[#30241E]/82 tracking-[0.52px] text-[13px] text-center font-medium mb-5">
          {product.enName}
        </p>
        <CircleButton className="group-hover:bg-[#DA3947] group-hover:text-white group-active:bg-[#C43340]" />
      </div>
    </div>
  );
};

export default ProductCard;
