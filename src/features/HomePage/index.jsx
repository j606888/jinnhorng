'use client'

import Navbar from '@/components/Navbar';
import Hero from './Hero';
import LineUs from '@/components/LineUs';
import AboutUs from './AboutUs';
import Product from './Product';

export default function HomePage() {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Product />
      <div className='fixed bottom-10 right-15'>
        <LineUs />
      </div>
    </div>
  );
}
