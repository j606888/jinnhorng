import CtaButton from "@/components/CtaButton";

const ContactUs = () => {
  return (
    <section className="px-5 py-15 bg-[url('/images/contact_us_mobile.jpg')] bg-cover bg-center bg-no-repeat h-[882px] md:py-24 md:bg-[url('/images/contact_us_tablet.jpg')] md:h-[815px]">
      <div className="flex flex-col items-center gap-[32px] text-center">
        <h3 className="text-[#30241E] text-[40px] font-bold tracking-[3.2px]"> 聯絡我們<br className="block md:hidden" /><span className="hidden md:inline">，</span>開啟安心合作</h3>
        <p className="text-[#30241E] tracking-[0.64px] text-base text-center">需要穩定、安心的原物料供應？我們隨時在這裡。<br className="hidden md:block" />聯絡我們，了解更多產品與合作細節。</p>
        <CtaButton>聯絡我們，專人為您服務</CtaButton>
      </div>
    </section>
  );
};

export default ContactUs;