import React from 'react';
import Card from './card';

function HowItWork() {
  return (
    <div className='max-w-container mx-auto pt-16 z-50 relative mt-24 px-6'>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px] text-center'>
        How it Works
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-7 mt-16'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default HowItWork;
