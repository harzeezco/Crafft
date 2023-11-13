import React from 'react';
import Image from 'next/image';
import Button from '../../Button';

function TrendingAsset() {
  return (
    <div className='grid gap-y-10 gap-x-7 lg:grid-cols-2 grid-cols-1 py-32 place-items-center'>
      <Image
        src='/png/asset.png'
        alt='assets images'
        width={470}
        height={470}
        className=''
      />
      <div>
        <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
          JUNK FOOD PARTY #187
        </h1>
        <p className='my-7 text-lg'>
          <span className='text-gray-300'>Created by</span>
          <span className='pl-2 text-blue-700 font-semibold'>MitsuoKatori</span>
        </p>

        <div className='flex items-center gap-6'>
          <div className='bg-dark-900 rounded-md p-4 text-center flex-col flex'>
            <span>0</span>
            <span className='text-gray-300 font-semibold'>Days</span>
          </div>
          <div className='bg-dark-900 rounded-md flex-col flex p-4 text-center'>
            <span>4</span>
            <span className='text-gray-300 font-semibold'>HRS</span>
          </div>
          <div className='bg-dark-900 rounded-md flex-col flex p-4 text-center'>
            <span>17</span>
            <span className='text-gray-300 font-semibold'>MINS</span>
          </div>
          <div className='bg-dark-900 rounded-md p-4 flex-col flex text-center'>
            <span>59</span>
            <span className='text-gray-300 font-semibold'>SECS</span>
          </div>
        </div>
        <div className='mt-[20px] mb-10'>
          <span className='text-gray-300'>Current Bid</span>
          <p className='text-xl font-bold'>1.0324 ETH</p>
        </div>
        <div className='flex gap-6'>
          <Button variant='blue'>Place a Bid</Button>
          <Button variant='dark'>View Artwork</Button>
        </div>
      </div>
    </div>
  );
}

export default TrendingAsset;
