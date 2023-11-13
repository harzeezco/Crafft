import Button from '@/app/ui/Button';
import Image from 'next/image';
import React from 'react';

function CategoryCard() {
  return (
    <div className='w-full md:max-w-[230px] bg-dark-900 p-8 md:p-6 flex-col flex items-center gap-6 justify-center rounded-xl'>
      <Image
        src='/png/door.png'
        width={230}
        height={230}
        alt=''
        className='w-[90%] md:w-full'
      />
      <Button variant='blue' isFullWidth>
        Art
      </Button>
    </div>
  );
}

export default CategoryCard;
