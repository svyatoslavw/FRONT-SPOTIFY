'use client'
import { Mutation } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.config'
import { TOGGLE_FAVORITE_TRACK } from '@/api/graphql/mutations/ToggleFavoriteTrack'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import usePlayerStore from '@/stores/playerStore'
import { ITrack } from '@/types/track.types'
import { IUser } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import clsx from 'clsx'
import { Heart, Pause, Play, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import styles from '../PlaylistSlug.module.scss'

interface IPlaylistItem {
  track: ITrack
  onPlay: any
  setTrackId: Dispatch<SetStateAction<number | null>>
  onOpen: () => void
  profile: IUser
}

const PlaylistSearchItem: FC<IPlaylistItem> = ({ track, onPlay, setTrackId, onOpen, profile }) => {
  const { activeId } = usePlayerStore()
  const isFavorite = profile.likedTracks.some((favorite) => favorite.id === track.id)

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
    <>
      <div key={track.id} className={styles.track}>
        <div className={styles.track__main}>
          <p onClick={() => onPlay(track.id)} className={styles.track__btns}>
            {activeId === track.id ? (
              <Pause size={18} fill="white" />
            ) : (
              <Play size={18} fill="white" />
            )}
          </p>
          <Image src={track.image} alt="image" width={40} height={40} />
          <div>
            <p
              className={clsx(styles.track__text, {
                'text-sm cursor-pointer text-green-500 hover:underline': activeId === track.id,
              })}
            >
              {track.name}
            </p>
            <p className={styles.track__artist}>{track.artist && track.artist.name}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <PlusCircle
            onClick={() => {
              setTrackId(track.id)
              onOpen()
            }}
            className={styles.track__icon}
            strokeWidth={1.5}
            size={20}
          />
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
    </>
  )
}

export default PlaylistSearchItem
