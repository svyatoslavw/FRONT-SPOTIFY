import { Mutation } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.config'
import { TOGGLE_FAVORITE_TRACK } from '@/api/graphql/mutations/ToggleFavoriteTrack'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import usePlayer from '@/stores/playerStore'
import { ITrack } from '@/types/track.types'
import { IUser } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import clsx from 'clsx'
import { Heart, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import toast from 'react-hot-toast'
import styles from './PlaylistSlug.module.scss'

interface IPlaylistTrack {
  track: ITrack
  openHover: () => void
  closeHover: () => void
  onPlay: () => void
  index: number
  isHovered: number | null
  profile: IUser | null
}

const PlaylistItem: FC<IPlaylistTrack> = ({
  track,
  closeHover,
  openHover,
  onPlay,
  index,
  isHovered,
  profile,
}) => {
  const { activeId } = usePlayer()

  const isFavorite = profile?.likedTracks.some((favorite) => favorite.id === track.id)

  const [toggleFavoriteTrack] = useMutation<Mutation>(TOGGLE_FAVORITE_TRACK, {
    onCompleted: async () => {
      await client.refetchQueries({
        include: [GET_PROFILE],
      })
    },
    fetchPolicy: 'no-cache',
  })

  const toggleButton = async () => {
    try {
      const { data } = await toggleFavoriteTrack({
        variables: {
          id: profile!.id,
          trackId: track.id,
        },
      })

      if (data && data.toggleFavoriteTrack) {
        if (isFavorite) {
          toast.error('Track successfully removed')
        } else {
          toast.success('Track successfully added')
        }
      }
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  return (
    <div key={track.id} onMouseEnter={openHover} onMouseLeave={closeHover} className={styles.track}>
      <div className={styles.track__main}>
        <p onClick={onPlay} className={styles.track__btns}>
          {isHovered === index ? (
            activeId === track.id ? (
              <Pause size={16} fill="white" />
            ) : (
              <Play size={16} fill="white" />
            )
          ) : (
            index + 1
          )}
        </p>
        <Image src={track.image} alt="image" width={40} height={40} />
        <div>
          <p
            className={clsx(styles.track__text, {
              'text-sm cursor-pointer text-green-500 hover:underline': activeId === track.id,
            })}
          >
            <Link href={`/track/${track.slug}`}>{track.name}</Link>
          </p>
          <p className={styles.track__artist}>{track.artist && track.artist.name}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleButton}>
          {isFavorite ? (
            <Heart
              fill="#22c55e"
              color="#22c55e"
              className={styles.track__icon}
              strokeWidth={1.5}
              size={20}
            />
          ) : (
            <Heart className={styles.track__icon} strokeWidth={1.5} size={20} />
          )}
        </button>
      </div>
    </div>
  )
}

export default PlaylistItem
