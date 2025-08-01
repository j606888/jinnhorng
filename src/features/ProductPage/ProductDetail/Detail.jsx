import { useState } from "react";
import AnimateDiv from "@/features/shared/AnimateDiv";

const ContainerClass = "px-5 md:px-10 lg:px-15 max-w-[1080px] mx-auto xl:px-0"
const TABS = [
  {
    key: 'specifications',
    label: '產品規格',
  },
  {
    key: 'delivery',
    label: '包裝與出貨',
  },
  {
    key: 'industries',
    label: '適用產業與應用',
  }
]
const Detail = ({ product }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const activeTabData = product[activeTab];

  return (
    <section>
      <AnimateDiv className={`py-12 ${ContainerClass}`}>
        <div className="flex items-center justify-center mb-2.5 md:mb-4">
          {TABS.map((tab) => (
            <div key={tab.key} className={`text-sm font-bold tracking-[0.56px] px-4 py-3 border-b-3  cursor-pointer md:w-[150px] text-center ${activeTab === tab.key ? 'border-[#DA3947] text-deep-brown' : 'text-deep-brown/[0.6] border-transparent'}`} onClick={() => setActiveTab(tab.key)}>
              {tab.label}
            </div>
          ))}
        </div>
        <div className="px-3 py-6 bg-[#F8F7F7] rounded-[10px] md:px-[50px]">
          {activeTabData.map((specification) => (
            <div key={specification.name} className="flex gap-6 items-center py-2.5 border-b-1 last:border-b-0 border-deep-brown/[0.08] md:gap-20">
              <p className="w-[88px] flex-shrink-0 text-deep-brown text-sm font-medium tracking-[0.56px] leading-[30px] md:w-[120px]">{specification.name}</p>
              <p className="text-deep-brown/[0.82] text-sm font-normal tracking-[0.56px] leading-[24px]" dangerouslySetInnerHTML={{ __html: specification.value }} />
            </div>
          ))}
        </div>
      </AnimateDiv>
      <div className="h-2 bg-[#F8F7F7] md:hidden"></div>
    </section>
  );
};

export default Detail;