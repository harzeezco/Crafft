'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MobileInput from '../../mobile-search';

function Mobile() {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <div
      className={`lg:hidden py-8 px-7 z-50 ${
        isShow ? 'flex items-center justify-between' : ''
      }`}
    >
      {isShow && <Image src='/svg/logo.svg' alt='' width={99} height={33} />}
      <div className='mr-7'>
        <MobileInput onclick={setIsShow} isShow={isShow} />
      </div>
      <button
        type='button'
        className='fixed top-12 right-5'
        aria-label='toggle nav'
      >
        <Image src='/svg/menu.svg' alt='' width={24} height={24} />
      </button>
    </div>
  );
}

export default Mobile;
