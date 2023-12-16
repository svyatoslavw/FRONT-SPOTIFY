'use client'
import { GET_SEARCH_QUERY } from '@/api/graphql/queries/GetSearchQuery'
import Header from '@/components/header/Header'
import { useFilter } from '@/hooks/useFilters'
import { ISearchData } from '@/services/search/search,types'
import { useQuery } from '@apollo/client'
import { FC } from 'react'
import CatalogPage from './CatalogPage'

interface IPage {
  initialTracks: ISearchData
}

const SearchPage: FC<IPage> = ({ initialTracks }) => {
  const { isFilterUpdated, queryParams, updateQueryParams } = useFilter()

  const { data, loading, refetch } = useQuery(GET_SEARCH_QUERY, {
    variables: {
      searchTerm: queryParams.searchTerm,
    },
    skip: !isFilterUpdated,
    fetchPolicy: 'cache-and-network',
  })
  return (
    <div className="">
      <Header />
      <div className="px-3 h-full mb-28">
        {queryParams.searchTerm &&
          queryParams.searchTerm.length &&
          `Seacrh by query ${queryParams.searchTerm}`}
        <CatalogPage
          albums={data?.getSearchQuery.albums || []}
          tracks={data?.getSearchQuery.tracks || []}
          isLoading={loading}
        />
      </div>
    </div>
  )
}

export default SearchPage
