'use client'

import Navbar from '@/components/NavbarLegacy';
import Hero from './Hero';
import LineUs from '@/features/HomePage/LineUs';
import AboutUs from './AboutUs';
import Product from './Product';
import Quality from './Quality';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Product />
      <Quality />
      <ContactUs />
      <Footer />
      <div className='fixed bottom-10 right-15'>
        <LineUs />
      </div>
    </div>
  );
}
