import Link from "next/link";
import { useState } from "react";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import AnimateDiv from "@/features/shared/AnimateDiv";
import Breadcrumb from "../Breadcrumb";

const ContainerClass = "px-5 md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0";

const Overview = ({ product }) => {
  const [previewIndex, setPreviewIndex] = useState(product.previews.findIndex(preview => preview.default) || 0);
  const selectedPreview = product.previews[previewIndex];

  return (
    <section>
      <AnimateDiv
        className={`flex gap-2 py-4 text-sm tracking-[0.84px] font-normal text-[#30241E] ${ContainerClass}`}
      >
        <Breadcrumb>{product.name}</Breadcrumb>
      </AnimateDiv>
      <AnimateDiv
        className={`flex flex-col gap-10 py-9 ${ContainerClass} md:flex-row xl:gap-15`}
      >
        <div className="md:w-1/2 xl:flex-shrink-0 xl:w-auto">
          <div className="border-1 border-[#E0E0E0] rounded-[8px] overflow-hidden max-w-[366px] mb-4 relative mx-auto md:mx-0 lg:max-w-[432px] xl:max-w-[500px]">
            <img src={selectedPreview.image} alt={selectedPreview.name} onContextMenu={(e) => e.preventDefault()} />
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
          <div className="text-center overflow-x-auto md:text-start">
            <div className="inline-flex gap-4 md:items-center md:justify-start ">
              {product.previews.map((preview, index) => (
                <div
                  key={index}
                  className={`w-[64px] h-[64px] rounded-[8px] overflow-hidden cursor-pointer border-2 flex-shrink-0 ${
                    selectedPreview.name === preview.name
                      ? " border-[#D5B09F]"
                      : "border-transparent"
                  }`}
                  onClick={() => setPreviewIndex(index)}
                >
                  <img src={preview.image} alt={preview.name} onContextMenu={(e) => e.preventDefault()} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 xl:w-auto">
          <h2 className="text-deep-brown text-[26px] font-bold tracking-[2.08px] mb-[7px]">
            {product.name}
          </h2>
          <p className="text-deep-brown text-[14px] font-normal tracking-[0.56px] mb-7 xl:mb-9">
            {product.enName}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: product.description }}
            className="text-deep-brown/[0.82] text-base md:text-[14px] lg:text-base tracking-[0.64px] mb-7 xl:mb-9"
          />
          <p className="text-deep-brown/[0.82] text-[15px] font-bold tracking-[0.6px] mb-4">
            產品預覽
          </p>
          <div className="flex flex-wrap gap-3 mb-7 xl:mb-9">
            {product.previews.map((preview, index) => (
              <div
                key={index}
                className={`px-4 py-3 border-1 rounded-[4px] text-sm font-normal tracking-[0.56px] cursor-pointer hover:text-[#DA3947] hover:border-[#DA3947] ${
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
          <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-3">
            <Link
              href="/quality/process"
              className="text-deep-brown text-sm lg:text-base font-bold tracking-[0.64px] px-6 py-4 border-1 border-[#E0E0E0] rounded-[8px] text-center cursor-pointer lg:w-[192px] hover:text-deep-brown/82"
            >
              看看產品製程流程
            </Link>
            <Link
              href="/logistics"
              className="font-bold text-sm lg:text-base tracking-[0.64px] px-6 py-4 rounded-[8px] text-center cursor-pointer bg-[#DA3947] text-white lg:w-[192px] hover:bg-[#E1616C] active:bg-[#C43340]"
            >
              了解物流服務
            </Link>
          </div>
        </div>
      </AnimateDiv>
      <div className="h-2 bg-[#F8F7F7] md:hidden"></div>
    </section>
  );
};

export default Overview;
