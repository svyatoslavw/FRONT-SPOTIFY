'use client'
import Header from '@/components/header/Header'
import usePlay from '@/hooks/usePlay'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IPlaylist } from '@/utils/types/playlist.types'
import { ITrack } from '@/utils/types/track.types'
import clsx from 'clsx'
import { average } from 'color.js'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import PlaylistHeader from './playlist-header/PlaylistHeader'

interface ISlugPage {
  playlist: IPlaylist
}

const PlaylistSlugPage: FC<ISlugPage> = ({ playlist }) => {
  const [color, setColor] = useState<string>('')
  const { activeId } = useTypedSelector((state) => state.player)

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
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const onPlay = usePlay(playlist.tracks)

  const openHover = (index: number) => setIsHovered(index)
  const closeHover = () => setIsHovered(null)
  return (
    <div className="overflow-scroll ml-0 h-[100vh] m-2 bg-gradient-custom rounded-xl">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {playlist && <PlaylistHeader playlist={playlist} />}
      </div>

      <div className="w-full">
        <div className="px-10">
          {playlist &&
            playlist.tracks.map((track: ITrack, index) => (
              <div
                key={track.id}
                onMouseEnter={() => openHover(index)}
                onMouseLeave={closeHover}
                className={clsx(
                  'flex gap-2 items-center p-2 my-2 rounded-md hover:bg-[#2a2a2a]  transition-all',
                )}
              >
                <p
                  onClick={() => onPlay(track.id)}
                  className={clsx('text-sm w-5 flex items-center justify-center')}
                >
                  {isHovered === index ? (
                    activeId === track.id ? (
                      <BsFillPauseFill size={20} />
                    ) : (
                      <BsFillPlayFill size={20} />
                    )
                  ) : (
                    index + 1
                  )}
                </p>
                <Image src={track.image} alt="image" width={40} height={40} />
                <div>
                  <p
                    className={clsx('text-sm cursor-pointer hover:underline', {
                      'text-sm cursor-pointer text-green-500 hover:underline':
                        activeId === track.id,
                    })}
                  >
                    {track.name}
                  </p>
                  <p className="text-sm text-slate-300 cursor-pointer hover:underline">
                    {track.artist && track.artist.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PlaylistSlugPage
