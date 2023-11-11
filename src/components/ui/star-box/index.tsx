import React from 'react';
import Star from './star';
import './index.css';

function StarBox() {
  return (
    <div className='hidden md:block'>
      <div className='absolute top-[5%] left-1/2'>
        <Star color='#1E50FF' />
      </div>
      <div className='absolute top-[10%] right-[13%]'>
        <Star color='#AA00FF' />
      </div>
      <div className='absolute top-[13%] left-1/2'>
        <Star color='#FFC935' />
      </div>
    </div>
  );
}

export default StarBox;
