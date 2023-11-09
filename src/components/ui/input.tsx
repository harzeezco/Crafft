'use client';

import React from 'react';
import mergeClasses from '@/lib/utils';

type InputProps = {
  placeholder: string;
  name: string;
  className: string;
};

function Input({ placeholder = '', name = '', className = '' }: InputProps) {
  return (
    <div className='flex items-center rounded-lg overflow-hidden border border-solid border-deepDark focus:border focus:border-white relative container-input'>
      <input
        className={mergeClasses(
          'bg-inherit outline-none text-white py-2 placeholder:text-gray focus:opacity-100 focus:w-350 transition-inputTransition pl-40',
          className,
        )}
        type='text'
        placeholder={placeholder}
        name={name}
        autoComplete='off'
      />
      <svg
        className='ml-1 absolute top-1/2 left-[10px] -translate-y-1/2'
        width='18'
        height='18'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='9.7659'
          cy='9.7659'
          r='8.98856'
          stroke='#B1B5C1'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.0176 16.4844L19.5416 19.9992'
          stroke='#B1B5C1'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default Input;
