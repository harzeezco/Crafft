import React from 'react';
import Image from 'next/image';
import Input from '@/components/ui/input';
import Button from '@/components/ui/Button';
import HeaderNav from '@/components/navigation/header-nav';

function Desktop() {
  return (
    <div className='lg:flex justify-between items-center py-8 max-w-container mx-auto text-white gap-8 hidden px-7'>
      <Image priority src='/svg/logo.svg' height={34} width={99} alt='logo' />

      <Input
        placeholder='Search collection, item...'
        name='search'
        className='w-[320px]'
      />

      <div className='lg:flex justify-between items-center hidden'>
        <nav>
          <HeaderNav />
        </nav>

        <div className='mr-5 ml-6 bg-lightDark rounded-full h-11 w-11 flex items-center justify-center'>
          <Image src='/svg/profile.svg' alt='profile' height={20} width={16} />
        </div>

        <Button variant='dark'>Connect Wallet</Button>
      </div>
    </div>
  );
}

export default Desktop;
