import Loader from '@/components/ui/loader/Loader'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IAlbum } from '@/types/album.types'
import { ITrack } from '@/types/track.types'
import { FC } from 'react'
import PlaylistSearchItem from './playlist-search-item/PlaylistSearchItem'

interface IPlaylist {
  albums: IAlbum[]
  tracks: ITrack[]
  isLoading: boolean
}

const PlaylistSearchPage: FC<IPlaylist> = ({ albums, tracks, isLoading }) => {
  const { queryParams } = useTypedSelector((state) => state.filters)
  return (
    <>
      {isLoading ? (
        <Loader color="green" />
      ) : (
        queryParams.searchTerm !== '' &&
        queryParams.searchTerm && (
          <div className="mt-10 overflow-y-auto h-48">
            <PlaylistSearchItem tracks={tracks} />
          </div>
        )
      )}
    </>
  )
}

export default PlaylistSearchPage
