'use client'
import Header from '@/components/header/Header'
import { useFilter } from '@/hooks/useFilters'
import { ISearchData } from '@/services/search/search,types'
import { SearchService } from '@/services/search/search.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import CatalogPage from './CatalogPage'

interface IPage {
  initialTracks: ISearchData
}

const SearchPage: FC<IPage> = ({ initialTracks }) => {
  const { isFilterUpdated, queryParams, updateQueryParams } = useFilter()

  const { data, isFetching } = useQuery({
    queryKey: ['search', queryParams],
    queryFn: () => SearchService.getAll(queryParams),
    initialData: initialTracks,
    enabled: isFilterUpdated,
  })
  return (
    <div className="m-2 ml-0 h-[98vh] bg-gradient-custom overflow-y-auto rounded-xl">
      <Header />
      <div className="px-3 h-full mb-28">
        {queryParams.searchTerm ? `Seacrh by query ${queryParams.searchTerm}` : ''}
        <CatalogPage
          albums={data.albums || []}
          tracks={data.tracks || []}
          queryParams={queryParams}
          isLoading={isFetching}
        />
      </div>
    </div>
  )
}

export default SearchPage
