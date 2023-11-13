import React from 'react';
import StarBox from './ui/homepage/star-box';
import HeroSection from './ui/homepage/hero';
import TrustedCompanies from './ui/homepage/trusted-companies';
import TrendingAsset from './ui/homepage/trending-assets';
import Collections from './ui/homepage/collections';
import Category from './ui/homepage/category';
import TopCollections from './ui/homepage/top-collections';
import HowItWork from './ui/homepage/how-it-work';
import Community from './ui/homepage/community';

export default function Home() {
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
        <div className='relative bg-dark-700 pb-24'>
          <div className='second-blur' />
          <div className='blur' />
          <Category />
          <TopCollections />
          <HowItWork />
          <Community />
        </div>
      </div>
    </main>
  );
}
