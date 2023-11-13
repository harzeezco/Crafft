import React from 'react';
import Button from '../../Button';
import CollectionDetails from './top-collections-details';

function TopCollections() {
  return (
    <div className='max-w-container mx-auto relative z-50 text-center mt-24 px-6'>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
        Top Collections
      </h1>
      <div className='mt-5 flex gap-5 justify-center flex-col md:flex-row'>
        <Button variant='blue'>Today</Button>
        <Button variant='dark'>Last 7 Days</Button>
        <Button variant='dark'>Last 30 Days</Button>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-7 mt-16 place-items-center'>
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
        <CollectionDetails />
      </div>
    </div>
  );
}

export default TopCollections;
