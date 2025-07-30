import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Footer from "@/features/shared/Footer";
import ContactUs from "@/features/shared/ContactUs";

const ContactPage = () => {
  return <>
    <Navbar white />
    <Hero />
    <Contact />
    <ContactUs />
    <Footer />
  </>;
};

export default ContactPage;