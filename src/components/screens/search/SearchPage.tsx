'use client'
import { GET_SEARCH_QUERY } from '@/api/graphql/queries/GetSearchQuery'
import Header from '@/components/header/Header'
import { useFilter } from '@/hooks/useFilters'
import { ISearchData } from '@/types/search.types'
import { useQuery } from '@apollo/client'
import { FC } from 'react'
import CatalogPage from './CatalogPage'
import styles from './SearchPage.module.scss'

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
    <section className={styles.search}>
      <Header />
      <div className={styles.search__container}>
        {queryParams.searchTerm && queryParams.searchTerm.length && (
          <span className={styles.search__heading}>
            Search by query <span className={styles.search__term}>{queryParams.searchTerm}</span>
          </span>
        )}
        <CatalogPage
          albums={data?.getSearchQuery.albums || []}
          tracks={data?.getSearchQuery.tracks || []}
          isLoading={loading}
        />
      </div>
    </section>
  )
}

export default SearchPage
