'use client'
import Header from '@/components/header/Header'
import { IPlaylist } from '@/types/playlist.types'
import { ITrack } from '@/types/track.types'
import { average } from 'color.js'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import PlaylistHeader from './playlist-header/PlaylistHeader'

interface ISlugPage {
  playlist: IPlaylist
}

const PlaylistSlugPage: FC<ISlugPage> = ({ playlist }) => {
  const [color, setColor] = useState<string>('')
  useEffect(() => {
    if (playlist) {
      average(playlist.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          console.error('Error calculating color:', error)
        })
    }
  }, [playlist])

  return (
    <div className="m-2 ml-0 h-[98.2%] bg-gradient-custom rounded-xl">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {playlist && <PlaylistHeader playlist={playlist} />}
      </div>

      <div className="h-full w-full">
        <div className="px-10">
          {playlist &&
            playlist.tracks.map((track: ITrack, index) => (
              <div className="flex gap-2 items-center7 my-5 hover:bg-[#2a2a2a]">
                <p>{index + 1}</p>
                <Image src={track.image} alt="image" width={40} height={40} />
                <div>
                  <p className="text-sm">{track.name}</p>
                  <p className="text-sm text-slate-300">{track.artist && track.artist.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PlaylistSlugPage
