import { PRODUCTS } from "@/lib/products";
import { useRouter } from "next/navigation";
import AnimateDiv from "@/features/shared/AnimateDiv";
import Breadcrumb from "../Breadcrumb";

const Products = () => {
  const router = useRouter()
  return (
    <>
      <section className="relative">
        <div className="px-5 py-4 md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0">
          <Breadcrumb>所有產品</Breadcrumb>
        </div>
        <AnimateDiv className="px-5 pt-15 pb-20 text-center md:px-10 lg:px-15 lg:pt-20 lg:pb-30 xl:pt-25 max-w-[1080px] mx-auto xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-9 md:gap-y-10 lg:gap-y-15">
            {PRODUCTS.map((item) => (
              <div
                key={item.enName}
                className="flex flex-col gap-5 items-center cursor-pointer group"
                onClick={() => router.push(`/products/${item.slug}`)}
              >
                <div className="border border-[#E0E0E0] bg-white rounded-[10px] overflow-hidden max-w-[340px]">
                  <img
                    src={item.image}
                    alt={item.enName}
                    className="w-full group-hover:scale-102 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-deep-brown text-[15px] font-medium tracking-[0.6px] mb-1 group-hover:text-deep-brown/75">
                    {item.name}
                  </p>
                  <p className="text-deep-brown/[0.82] text-xs tracking-[0.48px] group-hover:text-deep-brown/50">
                    {item.enName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateDiv>
      </section>
    </>
  );
};

export default Products;
