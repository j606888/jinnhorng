import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import LineUs from '@/features/HomePage/LineUs';
import AboutUs from "./AboutUs";
import Products from "./Products";
import Quality from "./Quality";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Quality />
      <ContactUs />
      <Footer />
      <div className='fixed bottom-5 right-5'>
        <LineUs />
      </div>
    </>
  );
};

export default HomePage;