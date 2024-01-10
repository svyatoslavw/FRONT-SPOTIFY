'use client'
import { Album, Track } from '@/__generated__/ggl/graphql'
import Loader from '@/components/ui/loader/Loader'
import useFilterStore from '@/stores/filterStore'
import { FC } from 'react'
import SearchedAlbums from './SearchedAlbums'
import SearchedTracks from './SearchedTracks'
interface ICatalog {
  albums: Album[]
  tracks: Track[]
  isLoading: boolean
}
const CatalogPage: FC<ICatalog> = ({ albums, tracks, isLoading }) => {
  const { queryParams } = useFilterStore()
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        queryParams.searchTerm !== '' &&
        queryParams.searchTerm && (
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            <SearchedTracks tracks={tracks} />
            <SearchedAlbums albums={albums} />
          </div>
        )
      )}
    </>
  )
}

export default CatalogPage
