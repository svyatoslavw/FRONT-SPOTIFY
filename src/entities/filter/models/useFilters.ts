import { useEffect } from 'react';

import useFilterStore from '@/entities/filter/models/filterStore';
import { TypeSearchDataFilters } from '@/types/search.types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useFilter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { updateQueryParam, resetFilterUpdate } = useFilterStore();

  const { queryParams, isFilterUpdated } = useFilterStore((state) => ({
    queryParams: state.queryParams,
    isFilterUpdated: state.isFilterUpdated,
  }));

  useEffect(() => {
    searchParams.forEach((value, key) => {
      updateQueryParam(key as keyof TypeSearchDataFilters, value);
    });
  }, []);

  const updateQueryParams = (
    key: keyof TypeSearchDataFilters,
    value: string
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }

    resetFilterUpdate();
    updateQueryParam(key, value);
    const updatedQueryString = newParams.toString()
      ? `?${newParams.toString()}`
      : '';
    replace(pathname + updatedQueryString);
  };

  const { replace } = useRouter();

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  };
};
