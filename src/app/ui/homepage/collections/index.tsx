import React from 'react';
import Details from './collection-details';
import Button from '../../Button';

function Collections() {
  return (
    <div className='text-center mt-12 max-w-container mx-auto'>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
        Featured Collections🔥
      </h1>
      <p className='text-gray-300 text-lg max-w-md mx-auto text-center'>
        Discover, collect, and sell extraordinary NFTs through our awesome
        platform.
      </p>
      <div className='flex flex-wrap justify-center mt-10 gap-4'>
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
      </div>
      <div className='mt-12'>
        <Button variant='blue'>View More</Button>
      </div>
    </div>
  );
}

export default Collections;
