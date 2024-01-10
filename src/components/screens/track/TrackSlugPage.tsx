'use client'
import Header from '@/components/header/Header'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { ITrack } from '@/types/track.types'
import { average } from 'color.js'
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PlaylistItem from '../playlist/PlaylistItem'
import TrackButtons from './TrackButtons'
import styles from './TrackSlug.module.scss'
import TrackHeader from './track-header/TrackHeader'

interface ISlugPage {}

const PlaylistSlugPage: FC<{ track: ITrack }> = ({ track }) => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    if (track) {
      average(track.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          toast.error('Error calculating color')
        })
    }
  }, [track])

  const [isHovered, setIsHovered] = useState<number | null>(null)
  const onPlay = usePlay([])
  const openHover = (index: number) => setIsHovered(index)
  const closeHover = () => setIsHovered(null)

  const { profile } = useProfile()

  if (!profile) return
  const profileId = profile.id
  const isFavorite =
    profile.favorites && profile.favorites.some((favorite) => favorite.playlist.id === +track.id)
  return (
    <div className={styles.container}>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {track && <TrackHeader track={track} />}
      </div>

      <div className="w-full">
        <TrackButtons profileId={profileId} isFavorite={isFavorite} track={track} />
        <div className="px-10">
          <PlaylistItem
            openHover={() => openHover(0)}
            closeHover={closeHover}
            track={track}
            onPlay={() => onPlay(track.id)}
            index={0}
            isHovered={isHovered}
            profile={profile}
          />
        </div>
      </div>
    </div>
  )
}

export default PlaylistSlugPage
