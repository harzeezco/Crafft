import Details from '@/components/ui/collection-details';
import React from 'react';

function Collections() {
  return (
    <div className='text-center my-12 max-w-container mx-auto'>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
        Featured Collections🔥
      </h1>
      <p className='text-gray-300 text-lg max-w-md mx-auto text-center'>
        Discover, collect, and sell extraordinary NFTs through our awesome
        platform.
      </p>
      <div className='flex flex-wrap justify-center items-center mt-10 gap-4'>
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
        <Details index={0} />
      </div>
    </div>
  );
}

export default Collections;
