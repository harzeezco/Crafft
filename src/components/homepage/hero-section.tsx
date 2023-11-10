import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <div className='max-w-container mx-auto mt-[3rem] md:mt-[4rem] px-6 lg:px-0 lg:pb-12'>
      <div className='grid lg:grid-cols-2 items-center justify-between gap-x-16 -mb-10 sm:-mb-3 md:mb-0'>
        <div>
          {' '}
          <h1 className='font-bold text-4xl md:text-80 md:leading-90'>
            Buy, Sell, And
          </h1>
          <div className='flex items-center gap-x-6'>
            <Image
              src='/png/star-design.png'
              alt='star design'
              width={190}
              height={90}
              className='md:h-[60px] h-[40px]  w-[120px]'
            />
            <div className='container font-bold text-4xl md:text-80 mt-5 md:mt-0 md:leading-90'>
              <section className='animation h-[40px] md:h-[80px]'>
                <div className='first'>
                  <div>Showcase</div>
                </div>
                <div className='second'>
                  <div>Connect</div>
                </div>
                <div className='third'>
                  <div>Market</div>
                </div>
              </section>
            </div>
          </div>
          <div className='flex gap-x-4 items-center lg:-mt-5'>
            <h1 className='font-bold text-4xl md:text-80 md:leading-90 underline-bg relative'>
              Super NFTs
            </h1>
            <Image
              src='/png/skater.png'
              alt='skater boy'
              width={38}
              height={38}
              className='lg:h-70 lg:w-70'
            />
          </div>
        </div>
        <div className='lg:pl-10'>
          <p className='mb-10 text-gray-300 text-lg lg:pr-8'>
            Discover, collect, and sell extraordinary NFTs through our awesome
            platform. Express yourself by your artwork though us.
          </p>
          <Button variant='blue'>Explore NFTs</Button>
        </div>
      </div>
      <div>
        <Image
          src='/png/images.png'
          alt=''
          width={1120}
          height={300}
          className='md:mt-16 lg:mt-24 h-[350px] w-full lg:object-fill object-contain'
        />
      </div>
    </div>
  );
}

export default HeroSection;
