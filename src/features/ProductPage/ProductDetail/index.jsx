import Navbar from "@/components/Navbar";
import Hero from "../ProductList/Hero";
import ContactUs from "@/features/shared/ContactUs";
import Footer from "@/features/shared/Footer";
import Overview from "./Overview";
import Detail from "./Detail";
import OtherProducts from "./OtherProducts";

const ProductDetail = ({ product }) => {
  return (
    <>
      <Navbar white />
      <Hero />
      <Overview product={product} />
      <Detail product={product} />
      <OtherProducts product={product} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ProductDetail;