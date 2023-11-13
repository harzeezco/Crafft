import React from 'react';
import Button from '../../Button';
import CategoryCard from './category-card';

function Category() {
  return (
    <div className='max-w-container mx-auto pt-16 z-50 relative px-7'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
          Browse by Category
        </h1>
        <div className='md:flex gap-4 hidden'>
          <Button variant='dark'>
            <svg
              width='18'
              height='12'
              viewBox='0 0 18 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 6L17 6M17 6L12.5745 11M17 6L12.5745 1'
                stroke='white'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
          <Button variant='blue'>
            <svg
              width='18'
              height='12'
              viewBox='0 0 18 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17 6L1 6M1 6L5.42553 11M1 6L5.42553 1'
                stroke='white'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-7 mt-16 justify-center'>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default Category;
