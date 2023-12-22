'use client';

import { useQuery } from '@tanstack/react-query';
import fetchOpenSeaAssets from '../provider/fetch-api';

function useFetchQuery() {
  const { data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchOpenSeaAssets,
  });
  if (error) {
    return 'loading';
  }
  return data;
}

export default useFetchQuery;
