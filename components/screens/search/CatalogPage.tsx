'use client'
import Loader from '@/components/ui/loader/Loader'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TypeSearchDataFilters } from '@/services/search/search,types'
import { IAlbum } from '@/types/album.types'
import { ITrack } from '@/types/track.types'
import { FC } from 'react'
import SearchedAlbums from './SearchedAlbums'
import SearchedTracks from './SearchedTracks'
interface ICatalog {
  albums: IAlbum[]
  tracks: ITrack[]
  queryParams: TypeSearchDataFilters
  isLoading: boolean
}
const CatalogPage: FC<ICatalog> = ({ albums, tracks, isLoading }) => {
  const { queryParams } = useTypedSelector((state) => state.filters)
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        queryParams.searchTerm !== '' && (
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
