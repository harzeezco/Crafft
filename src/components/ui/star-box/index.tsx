import React from 'react';
import Star from './star';

function StarBox() {
  return (
    <div className='hidden md:block'>
      <div className='absolute top-[20%] left-1/2 -z-[1]'>
        <Star color='#1E50FF' />
      </div>
      <div className='absolute top-[40%] right-[13%] -z-[1]'>
        <Star color='#AA00FF' />
      </div>
      <div className='absolute top-[50%] left-1/2 -z-[1]'>
        <Star color='#FFC935' />
      </div>
    </div>
  );
}

export default StarBox;
