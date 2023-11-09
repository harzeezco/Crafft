import React from 'react';
import { MobileInputProps } from '@/lib/types';
import Image from 'next/image';

function IconBox({ onclick, isShow }: MobileInputProps) {
  return (
    <div className='iconContainer pr-2 pt-5 transition-inputTransition w-fit'>
      {isShow ? (
        <Image
          alt='enter search'
          className='search_icon'
          src='/svg/search.svg'
          height={25}
          width={25}
        />
      ) : (
        <button
          type='button'
          className='text-white'
          onClick={() => onclick(!isShow)}
          aria-label='cancel search'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default IconBox;
