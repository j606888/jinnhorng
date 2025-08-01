import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Products from "./Products";
import ContactUs from "@/features/shared/ContactUs";
import Footer from "@/features/shared/Footer";

const ProductList = () => {
  return (
    <>
      <Navbar white />
      <Hero />
      <Products />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ProductList;
