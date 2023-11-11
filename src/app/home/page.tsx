import React from 'react';
import HeroSection from '@/components/homepage/hero';
import StarBox from '@/components/ui/star-box';
import TrustedCompanies from '@/components/homepage/trusted-companies';
import TrendingAsset from '@/components/homepage/trending-assets';
import Collections from '@/components/homepage/collections';

function HomePage() {
  return (
    <main>
      <div className='bg' />
      <div>
        <StarBox />
        <div className='relative'>
          <HeroSection />
        </div>
        <TrustedCompanies />
        <div className='category'>
          <TrendingAsset />
          <Collections />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
