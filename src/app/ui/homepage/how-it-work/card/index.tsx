import Image from 'next/image';
import React from 'react';

function Card() {
  return (
    <div className='max-w-[370px] p-8 flex-col flex justify-center items-center rounded-xl hover:shadow-sm bg-dark-900'>
      <Image src='/png/how-it-work/mobile.png' width={80} height={84} alt='' />
      <p className='text-xl font-bold mt-6'>Set up your wallet</p>
      <span className='text-gray-300 text-lg text-center'>
        Once you’ve set up your wallet of choice, connect it to our platform by
        clicking the wallet icon.
      </span>
    </div>
  );
}

export default Card;
