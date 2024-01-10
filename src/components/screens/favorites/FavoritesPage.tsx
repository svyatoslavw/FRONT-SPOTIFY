'use client'
import Header from '@/components/header/Header'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { Divider } from '@nextui-org/react'
import { useState } from 'react'
import PlaylistItem from '../playlist/PlaylistItem'
import FavoritesHeader from './FavoritesHeader'

const FavoritesPage = () => {
  const { profile } = useProfile()!

  const [isHovered, setIsHovered] = useState<number | null>(null)

  const openHover = (index: number) => setIsHovered(index)
  const closeHover = () => setIsHovered(null)

  //@ts-ignore
  const onPlay = usePlay(profile?.likedTracks)
  if (!profile) return

  return (
    <>
      <>
        <Header />
        <FavoritesHeader />
      </>
      <div className="px-10 h-[300px]">
        <Divider orientation="horizontal" className=" bg-gray/30 h-[2px] my-4" />
        {profile.likedTracks.map((track, index) => (
          <PlaylistItem
            key={track.id}
            closeHover={closeHover}
            index={index}
            isHovered={isHovered}
            openHover={() => openHover(index)}
            track={track}
            onPlay={() => onPlay(track.id)}
            profile={profile}
          />
        ))}
      </div>
    </>
  )
}

export default FavoritesPage
