'use client';

import React from 'react';
import useFetchQuery from '@/app/hooks/useQuery';
import Details from './collection-details';
import Button from '../../Button';

type DetailsProp = {
  name: string;
  image_original_url: string;
  asset_contract: {
    chain_identifier: string;
    seller_fee_basis_points: string;
  };
};

function Collections() {
  const query = useFetchQuery();
  if (!query) {
    return 'loading';
  }
  console.log(query);

  return (
    <div className='text-center mt-12 max-w-container mx-auto'>
      <h1 className='font-bold md:text-[44px] leading-[54px] text-[26px]'>
        Featured Collections🔥
      </h1>
      <p className='text-gray-300 text-lg max-w-md mx-auto text-center'>
        Discover, collect, and sell extraordinary NFTs through our awesome
        platform.
      </p>
      <div className='flex flex-wrap justify-center mt-10 gap-4'>
        {query.assets.map((details: DetailsProp) => (
          <Details
            index={0}
            assetName={details.name}
            bid={details.asset_contract.chain_identifier}
            sellarBid={details.asset_contract.seller_fee_basis_points}
            img={details.image_original_url}
          />
        ))}
      </div>
      <div className='mt-12'>
        <Button variant='blue'>View More</Button>
      </div>
    </div>
  );
}

export default Collections;
