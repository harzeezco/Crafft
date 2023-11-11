import Image from 'next/image';
import React from 'react';

function FirstContentBox() {
  return (
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
          className='md:h-60 h-40 w-120'
        />
        <div className='font-bold text-4xl md:text-80 mt-5 md:mt-0 md:leading-90'>
          <div className='animation h-40 md:h-80'>
            <div className='first'>
              <div>Showcase</div>
            </div>
            <div className='second'>
              <div>Connect</div>
            </div>
            <div className='third'>
              <div>Market</div>
            </div>
          </div>
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
  );
}

export default FirstContentBox;
