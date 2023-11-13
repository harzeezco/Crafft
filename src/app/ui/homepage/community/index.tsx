import React from 'react';
import './index.css';
import Image from 'next/image';
import Button from '../../Button';

function Community() {
  return (
    <div className='bg-blue-900 max-w-container mx-auto grid place-items-center gap-7 relative mt-72 img-on-top rounded-xl lg:p-24 p-14 z-50 text-center'>
      <div className='absolute top-[-45%] sm:top-[-52%] lg:top-[-40%]'>
        <Image
          src='/png/artifact.png'
          alt=''
          width={278}
          height={220}
          className=''
        />
      </div>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
        Join our community
      </h1>
      <p>
        Discover, collect, and sell extraordinary NFTs through our awesome
        platform.
      </p>
      <Button variant='blue'>Get Started</Button>
    </div>
  );
}

export default Community;
