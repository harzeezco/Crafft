import React from 'react';
import HeroSection from '@/components/homepage/hero-section';
import StarBox from '@/components/ui/star-box';

function HomePage() {
  return (
    <div>
      <div className='header' />
      <StarBox />
      <HeroSection />
    </div>
  );
}

export default HomePage;
