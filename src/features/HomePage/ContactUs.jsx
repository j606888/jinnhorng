import CtaButton from "@/components/CtaButton";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <section className="px-5 py-15  h-[882px] md:py-24 md:bg-[url('/images/contact_us_tablet.jpg')] md:h-[815px]  lg:h-[667px] lg:px-15 lg:py-[180px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/contact_us_mobile.jpg')] bg-cover bg-center bg-no-repeat h-[882px] md:py-24 md:bg-[url('/images/contact_us_tablet.jpg')] md:h-[815px] lg:bg-[url('/images/contact_us_desktop.jpg')] lg:h-[667px] lg:px-15 lg:py-[180px] transition-transform duration-1000 hover:scale-[1.02] z-0" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center gap-[32px] text-center lg:items-start max-w-[1080px] mx-auto z-1"
      >
        <h3 className="text-[#30241E] text-[40px] font-bold tracking-[3.2px] lg:text-start">
          {" "}
          聯絡我們
          <br className="block md:hidden lg:block" />
          <span className="hidden md:inline lg:hidden">，</span>開啟安心合作
        </h3>
        <p className="text-[#30241E] tracking-[0.64px] text-base text-center lg:text-start">
          需要穩定、安心的原物料供應？我們隨時在這裡。
          <br className="hidden md:block" />
          聯絡我們，了解更多產品與合作細節。
        </p>
        <CtaButton>聯絡我們，專人為您服務</CtaButton>
      </motion.div>
    </section>
  );
};

export default ContactUs;
