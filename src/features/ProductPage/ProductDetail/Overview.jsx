import Link from "next/link";
import { useState } from "react";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";

const ContainerClass = "px-5 md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0";

const Overview = ({ product }) => {
  const [previewIndex, setPreviewIndex] = useState(0);
  const selectedPreview = product.previews[previewIndex];

  return (
    <section>
      <div
        className={`flex gap-2 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] ${ContainerClass}`}
      >
        <span>首頁</span>
        <span>{">"}</span>
        <span>產品系列</span>
        <span>{">"}</span>
        <span className="font-bold">{product.name}</span>
      </div>
      <div className={`flex flex-col gap-10 py-9 ${ContainerClass}`}>
        <div>
          <div className="border-1 border-[#E0E0E0] rounded-[8px] overflow-hidden max-w-[366px] mb-4 relative">
            <img src={selectedPreview.image} alt={selectedPreview.name} />
            {previewIndex > 0 && (
              <ButtonPrevious
                onClick={() => setPreviewIndex(previewIndex - 1)}
                className="absolute top-1/2 -translate-y-1/2 left-0"
              />
            )}
            {previewIndex < product.previews.length - 1 && (
              <ButtonNext
                onClick={() => setPreviewIndex(previewIndex + 1)}
                className="absolute top-1/2 -translate-y-1/2 right-0"
              />
            )}
          </div>
          <div className="flex gap-4 items-center justify-center">
            {product.previews.map((preview, index) => (
              <div
                key={index}
                className={`w-[64px] h-[64px] rounded-[8px]   overflow-hidden cursor-pointer border-2 ${
                  selectedPreview.name === preview.name
                    ? " border-[#D5B09F]"
                    : "border-transparent"
                }`}
                onClick={() => setPreviewIndex(index)}
              >
                <img src={preview.image} alt={preview.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-deep-brown text-[26px] font-bold tracking-[2.08px] mb-[7px]">
            {product.name}
          </h2>
          <p className="text-deep-brown text-[14px] font-normal tracking-[0.56px] mb-7">
            {product.enName}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: product.description }}
            className="tracking-[0.64px] mb-7"
          />
          <p className="text-deep-brown/[0.82] text-[15px] font-bold tracking-[0.6px] mb-4">
            產品預覽
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            {product.previews.map((preview, index) => (
              <div
                key={index}
                className={`px-4 py-3 border-1  rounded-[4px]  text-sm font-normal tracking-[0.56px] cursor-pointer  ${
                  selectedPreview.name === preview.name
                    ? "text-[#DA3947] border-[#DA3947]"
                    : "text-deep-brown border-[#E0E0E0]"
                }`}
                onClick={() => setPreviewIndex(index)}
              >
                {preview.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/quality/process"
              className="text-deep-brown font-bold tracking-[0.64px] px-6 py-4 border-1 border-[#E0E0E0] rounded-[8px] text-center cursor-pointer"
            >
              看看產品製程流程
            </Link>
            <Link
              href="/logistics"
              className="font-bold tracking-[0.64px] px-6 py-4 rounded-[8px] text-center cursor-pointer bg-[#DA3947] text-white"
            >
              了解物流服務
            </Link>
          </div>
        </div>
      </div>
      <div className="h-2 bg-[#F8F7F7] md:hidden"></div>
    </section>
  );
};

export default Overview;
