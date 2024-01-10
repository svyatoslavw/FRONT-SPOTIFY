import Button from '@/components/ui/button/Button'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { ITrack } from '@/types/track.types'
import { Heart, Play } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import toast from 'react-hot-toast'
import styles from './TrackSlug.module.scss'

interface IPlaylistButtons {
  track: ITrack
  isFavorite: boolean
  profileId: number
}

const TrackButtons: FC<IPlaylistButtons> = ({ track, isFavorite, profileId }) => {
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

  const deleteButton = () => {
    try {
      //remove()
      toast.success('Playlist successfully removed!')
      push('/')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  const onPlay = usePlay([])
  const { profile } = useProfile()

  if (!profile) return
  return (
    <div className={styles.btns}>
      <Button onClick={() => onPlay(track.id)} className="hover:scale-125">
        <div className={styles.btns__play}>
          <Play size={18} fill="black" />
        </div>
      </Button>

      <Button onClick={addToFavorite} className={''}>
        {isFavorite ? (
          <Heart color="#1ed760" size={38} fill="#1ed760" />
        ) : (
          <Heart color="gray" size={38} />
        )}
      </Button>
    </div>
  )
}

export default TrackButtons
