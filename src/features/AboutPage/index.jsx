import Hero from "./Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/features/shared/Footer";
import EveryStep from "./EveryStep";
import Quality from "./Quality";
import ContactUs from "@/features/shared/ContactUs";

const AboutPage = () => {
  return <>
    <Navbar white />
    <Hero />
    <EveryStep />
    <Quality />
    <ContactUs />
    <Footer />
  </>;
};

export default AboutPage;