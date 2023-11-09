'use client';

import React from 'react';
import { MobileInputProps } from '@/lib/types';
import IconBox from './icon-box';

function MobileInput({ onclick, isShow }: MobileInputProps) {
  return (
    <div className='relative'>
      <input
        checked={isShow}
        className='checkbox focus:border-none focus:outline-none checked:right-[10px] h-30 w-30 absolute top-[10px] right-4 appearance-none z-[9] cursor-pointer'
        type='checkbox'
        onClick={() => onclick(!isShow)}
      />
      <div className='main-box relative flex flex-row-reverse items-center justify-center h-50 transition-inputTransition rounded-160 bg-black'>
        <IconBox onclick={onclick} isShow={isShow} />
        <input
          className='search_input w-full h-full bg-transparent border-none outline-none pl-20 transition-inputTransition pb-1 text-white placeholder:text-gray-300'
          placeholder='Search collection, item...'
          type='text'
        />
      </div>
    </div>
  );
}

export default MobileInput;
