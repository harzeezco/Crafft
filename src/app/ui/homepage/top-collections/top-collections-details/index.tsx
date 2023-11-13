import Image from 'next/image';
import React from 'react';

function CollectionDetails() {
  return (
    <div className='flex justify-between items-center bg-dark-900 w-[350px] h-[94px] p-6 rounded-xl'>
      <div className='flex items-center gap-5'>
        <Image src='/png/profile.png' width={54} height={54} alt='' />
        <div>
          <p className='font-bold text-xl text-left'>CloneX</p>
          <span>302.6K ETH</span>
        </div>
      </div>
      <div>
        <span className='text-green-700'>+70.05%</span>
      </div>
    </div>
  );
}

export default CollectionDetails;
