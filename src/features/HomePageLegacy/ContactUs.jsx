import CtaButton from "@/components/CtaButton";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <section className="relative bg-[url('/images/contact-us-bg.jpg')] bg-cover bg-center py-[180px] flex flex-col items-center overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/images/contact-us-bg.jpg')] bg-cover bg-center transition-transform duration-1500 group-hover:scale-105" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[1080px] flex flex-col gap-8 items-start"
        >
          <h3 className="text-5xl font-bold tracking-[3.84px] text-[#30241E]">
            聯絡我們
            <br />
            開啟安心合作
          </h3>
          <p className="text-xl text-[#30241E] font-medium tracking-[0.8px]">
          需要穩定、安心的原物料供應？我們隨時在這裡。<br />聯絡我們，了解更多產品與合作細節。
          </p>
          <CtaButton>聯絡我們，專人為您服務</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
