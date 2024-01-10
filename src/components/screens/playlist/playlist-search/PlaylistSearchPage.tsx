import { Mutation } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.config'
import { ADD_TO_PLAYLIST } from '@/api/graphql/mutations/AddToPlaylist'
import Loader from '@/components/ui/loader/Loader'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import useFilterStore from '@/stores/filterStore'
import { IAlbum } from '@/types/album.types'
import { ITrack } from '@/types/track.types'
import { useMutation } from '@apollo/client'
import { useDisclosure } from '@nextui-org/react'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import AddToPlaylistMenu from './AddToPlaylistMenu'
import PlaylistSearchItem from './PlaylistSearchItem'

interface IPlaylist {
  albums: IAlbum[]
  tracks: ITrack[]
  isLoading: boolean
}

const PlaylistSearchPage: FC<IPlaylist> = ({ albums, tracks, isLoading }) => {
  const { queryParams } = useFilterStore()

  const onPlay = usePlay(tracks)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { profile } = useProfile()

  const [playId, setPlayId] = useState<number | null>(null)
  const [trackId, setTrackId] = useState<number | null>(null)

  const [addToPlaylist] = useMutation<Mutation>(ADD_TO_PLAYLIST, {})

  const createButton = async () => {
    try {
      const { data } = await addToPlaylist({
        variables: {
          id: playId,
          trackId: trackId,
        },
        onCompleted: () => {
          client.refetchQueries({
            include: ['GET_ALL_PLAYLISTS'],
          })
        },
        fetchPolicy: 'network-only',
      })

      setPlayId(null)
      setTrackId(null)

      if (data && data.addToPlaylist) toast.success('Track successfully added')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  if (!profile) return
  return (
    <>
      {isLoading ? (
        <Loader color="green" />
      ) : (
        queryParams.searchTerm !== '' &&
        queryParams.searchTerm && (
          <div className="mt-5 overflow-y-auto 2xl:h-44 xl:h-32">
            {tracks &&
              tracks.map((track) => (
                <PlaylistSearchItem
                  track={track}
                  onPlay={onPlay}
                  setTrackId={setTrackId}
                  onOpen={onOpen}
                  profile={profile}
                  key={track.id}
                />
              ))}
            <AddToPlaylistMenu
              isOpen={isOpen}
              createButton={createButton}
              onOpen={onOpen}
              onOpenChange={onOpenChange}
              playId={playId}
              setPlayId={setPlayId}
            />
          </div>
        )
      )}
    </>
  )
}

export default PlaylistSearchPage
