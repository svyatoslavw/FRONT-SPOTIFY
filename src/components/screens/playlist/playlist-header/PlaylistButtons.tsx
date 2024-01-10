import { DELETE_PLAYLIST } from '@/api/graphql/mutations/DeletePlaylist'
import { GET_ALL_PLAYLISTS } from '@/api/graphql/queries/GetAllPlaylists'
import { GET_PLAYLIST_BY_SLUG } from '@/api/graphql/queries/GetPlaylistBySlug'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import Button from '@/components/ui/button/Button'
import usePlay from '@/hooks/usePlay'
import { IPlaylist } from '@/types/playlist.types'
import { IUser } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import { Heart, Pencil, Play, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import toast from 'react-hot-toast'
import styles from '../PlaylistSlug.module.scss'

interface IPlaylistButtons {
  playlist: IPlaylist
  profile: IUser
  isFavorite: boolean
  onOpen: () => void
}

const PlaylistButtons: FC<IPlaylistButtons> = ({ playlist, isFavorite, onOpen, profile }) => {
  const { push } = useRouter()
  // const { mutate } = useMutation({
  //   mutationKey: ['add favorite'],
  //   mutationFn: () => UserService.toggleFavorite(playlist.id),
  //   onSuccess() {
  //     queryClient.invalidateQueries({ queryKey: ['profile'] })
  //   },
  // })

  // const { mutate: remove } = useMutation({
  //   mutationKey: ['delete playlist'],
  //   mutationFn: () => PlaylistService.delete(profileId, playlist.id),
  //   onSuccess() {
  //     queryClient.invalidateQueries({ queryKey: ['profile'] })
  //   },
  // })

  const addToFavorite = () => {
    try {
      //mutate()
      toast.success('Playlist added to favorite!')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  const [remove] = useMutation(DELETE_PLAYLIST)
  const deleteButton = async () => {
    try {
      await remove({
        variables: {
          id: profile.id,
          playlistId: playlist.id,
        },
        refetchQueries: [GET_PROFILE, GET_PLAYLIST_BY_SLUG, GET_ALL_PLAYLISTS],
      })
      toast.success('Playlist successfully removed!')
      push('/')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  const onPlay = usePlay(playlist.tracks)

  const isMyPlaylist =
    profile.favorites &&
    profile.favorites.some((favorite) => favorite.playlist.user.id === +profile.id)

  if (!profile) return
  return (
    <div className={styles.buttons}>
      <Button onClick={() => onPlay(playlist.id)} className={'hover:scale-125'}>
        <div className={styles.buttons__icon}>
          <Play size={18} fill="black" />
        </div>
      </Button>
      {isMyPlaylist ? (
        <>
          <Button onClick={onOpen}>
            <Pencil color="#1ed760" size={24} />
          </Button>
          <Button onClick={deleteButton}>
            <Trash2 color="#1ed760" size={28} />
          </Button>
        </>
      ) : (
        <Button onClick={addToFavorite}>
          {isFavorite ? (
            <Heart color="#1ed760" size={38} fill="#1ed760" />
          ) : (
            <Heart color="gray" size={38} />
          )}
        </Button>
      )}
    </div>
  )
}

export default PlaylistButtons
