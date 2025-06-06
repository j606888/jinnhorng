'use client'

import Navbar from '@/components/Navbar';
import Hero from './Hero';
import LineUs from '@/components/LineUs';
import AboutUs from './AboutUs';

export default function HomePage() {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <AboutUs />
      <div className='fixed bottom-10 right-15'>
        <LineUs />
      </div>
    </div>
  );
}
