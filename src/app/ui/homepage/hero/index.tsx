import React from 'react';
import Image from 'next/image';
import FirstContentBox from './first-content-box';
import SecondContentBox from './second-content-box';

function HeroSection() {
  return (
    <div className='max-w-container mx-auto md:pt-4 px-6 lg:px-0 lg:pb-12'>
      <div className='grid lg:grid-cols-2 items-center justify-between gap-x-16 lg:mt-14 pt-14 lg:pt-0'>
        <FirstContentBox />
        <SecondContentBox />
      </div>
      <div>
        <Image
          src='/png/images.png'
          alt='assets images'
          width={1120}
          height={300}
          className='md:mt-16 lg:mt-24 h-350 w-full lg:object-fill object-contain'
        />
      </div>
      <div className='header' />
    </div>
  );
}

export default HeroSection;
