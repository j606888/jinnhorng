import CtaButton from "@/components/CtaButton";

const ContactUs = () => {
  return (
    <section className="px-5 py-15 bg-[url('/images/contact_us_mobile.jpg')] bg-cover bg-center bg-no-repeat h-[882px]">
      <div className="flex flex-col items-center gap-[32px] text-center">
        <h3 className="text-[#30241E] text-[40px] font-bold tracking-[3.2px]"> 聯絡我們<br />開啟安心合作</h3>
        <p className="text-[#30241E] tracking-[0.64px] text-base text-center">需要穩定、安心的原物料供應？我們隨時在這裡。聯絡我們，了解更多產品與合作細節。</p>
        <CtaButton>聯絡我們，專人為您服務</CtaButton>
      </div>
    </section>
  );
};

export default ContactUs;