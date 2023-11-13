import React from 'react';
import Image from 'next/image';
import Button from '@/app/ui/Button';

type DetailsProp = {
  index: number;
};

function Details({ index }: DetailsProp) {
  return (
    <div
      role='button'
      tabIndex={index}
      className='group relative flex h-470 w-full max-w-[320px] cursor-pointer flex-col rounded-xl border-none bg-dark-900 p-4 text-white transition-all duration-200 ease-in hover:shadow-sm z-50'
    >
      <div className='lg:group-hover:h-[350px]'>
        <div className='absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white'>
          <Image src='/png/heart.png' alt='heart' width={20} height={20} />
        </div>
        <Image
          src='/png/asset-image.png'
          alt='asset'
          height={330}
          width={330}
          className='h-200 transition-all duration-200 ease-linear lg:h-[300px]'
        />
        <div className='mt-[10px]'>
          <h1 className='text-[22px] font-bold leading-8 text-left'>
            LuppyclubOfficial
          </h1>
          <p className='left-7 flex gap-x-2 text-lg'>
            <span className='text-gray-300'>Created by</span>
            <span className='text-blue-700' title='LuppyclubOfficial'>
              LuppyclubOfficial
            </span>
          </p>
        </div>
        <div className='mt-5 flex items-center justify-between lg:group-hover:scale-0 transition-all'>
          <div>
            <span className='text-gray-300'>Current Bid</span>
            <p>1.0324 ETH</p>
          </div>
          <div>
            <span className='text-gray-300'>Remaining Time</span>
            <p>12 : 03 : 44</p>
          </div>
        </div>
      </div>
      <div className='mt-10 max-h-0 w-full transform group-hover:scale-[1] lg:scale-0'>
        <Button variant='blue' isFullWidth>
          Collect Now
        </Button>
      </div>
    </div>
  );
}

export default Details;
