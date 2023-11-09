import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';
import Star from '../ui/Star';

function HeroSection() {
  return (
    <div className='grid lg:grid-cols-2 items-center justify-between header max-w-container mx-auto pt-[5rem] gap-x-16'>
      <div className='absolute top-[30%] left-1/2 -z-[1]'>
        <Star />
      </div>
      <div>
        {' '}
        <h1 className='font-bold text-4xl md:text-80 md:leading-90'>
          Buy, Sell, And
        </h1>
        <div className='flex items-center'>
          <Image
            src='/png/star-design.png'
            alt='star design'
            width={190}
            height={90}
            className='h-[60px] w-[120px]'
          />
          <main className='container font-bold text-4xl md:text-80 md:leading-90'>
            <section className='animation'>
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
          </main>
        </div>
        <div className='flex gap-x-4 items-center -mt-5'>
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
  );
}

export default HeroSection;
