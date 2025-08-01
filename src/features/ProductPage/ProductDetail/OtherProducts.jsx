import { useMemo, useRef, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { useRouter } from "next/navigation";
import ProductCarousel from "./ProductCarousel";

const ContainerClass = "px-5 md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0"

const OtherProducts = ({ product }) => {
  const scrollRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug)
  const marginLeft = useMemo(() => {
    return (progress * 120 / 100) + 'px'
  }, [progress])
  const router = useRouter()

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const scrollLeft = el.scrollLeft
    const maxScrollLeft = el.scrollWidth - el.clientWidth
    const percent = (scrollLeft / maxScrollLeft) * 100
    setProgress(percent)
  }

  return <section>
    <div className={`pt-12 pb-20`}>
      <h4 className="text-deep-brown text-[18px] font-bold tracking-[1.44px] mb-8 mx-auto text-center">看看其他產品</h4>
      <div className="w-full md:hidden">
        <div ref={scrollRef} onScroll={handleScroll} className="flex gap-9 overflow-x-auto snap-x px-5 pb-8" style={{ scrollbarWidth: 'none' }}>
          {otherProducts.map((product) => (
            <div key={product.slug} className="flex-shrink-0 w-[277px] snap-center text-center cursor-pointer" onClick={() => router.push(`/products/${product.slug}`)}>
              <img src={product.image} alt={product.name} className="w-full object-cover border-1 border-[#E0E0E0] rounded-[10px] mb-5" />
              <h4 className="text-deep-brown text-[15px] font-medium tracking-[0.6px] mb-1">{product.name}</h4>
              <p className="text-deep-brown/[0.82] text-xs font-medium tracking-[0.48px]">{product.enName}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2.5">
          <div className="w-40 h-1.5 bg-[#E0E0E0] mx-auto">
            <div className={`h-full bg-[#DA3947] w-10`} style={{ marginLeft }}></div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ProductCarousel products={otherProducts} />
      </div>
    </div>
  </section>;
};

export default OtherProducts;