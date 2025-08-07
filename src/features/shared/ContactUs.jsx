import CtaButton from "@/components/CtaButton";
import AnimateDiv from "@/features/shared/AnimateDiv";

const ContactUs = () => {
  return (
    <section className="px-5 py-15 h-[882px] md:py-[203px] bg-cover bg-center bg-no-repeat md:bg-[url('/images/contact_us_tablet.jpg')] md:px-10 md:h-[665px] lg:h-[667px] lg:px-15 lg:py-[180px] lg:bg-[url('/images/contact_us_desktop.jpg')] relative overflow-hidden">
      <AnimateDiv className="relative flex flex-col items-center text-center md:items-start max-w-[1080px] mx-auto z-1">
        <h3 className="text-deep-brown text-[28px] font-bold mb-3 tracking-[2.24px] md:text-[36px] md:text-start md:mb-5 xl:text-[40px] xl:tracking-[3.2px]">
          {" "}
          聯絡我們
          <br />
          開啟安心合作
        </h3>
        <p className="text-[#30241E] tracking-[0.64px] text-base text-center md:text-start mb-8 lg:text-xl">
          需要穩定、安心的原物料供應？我們隨時在這裡。
          <br className="hidden md:block" />
          聯絡我們，了解更多產品與合作細節。
        </p>
        <CtaButton url="/contact">聯絡我們，專人為您服務</CtaButton>
      </AnimateDiv>
    </section>
  );
};

export default ContactUs;
