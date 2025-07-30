import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Questions from "./Questions";
import Footer from "@/features/shared/Footer";
import ContactUs from "@/features/shared/ContactUs";

const FAQPage = () => {
  return <>
    <Navbar white />
    <Hero />
    <Questions />
    <ContactUs />
    <Footer />
  </>;
};

export default FAQPage;