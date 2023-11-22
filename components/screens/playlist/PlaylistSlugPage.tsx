'use client'
import Header from '@/components/header/Header'
import Button from '@/components/ui/button/Button'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { UserService } from '@/services/user.service'
import { IPlaylist } from '@/types/playlist.types'
import { ITrack } from '@/types/track.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { average } from 'color.js'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
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

  const { profile } = useProfile()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['favorite'],
    mutationFn: () => UserService.toggleFavorite(playlist.id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  if (!profile) return null
  const isFavorite =
    profile.favorites && profile.favorites.some((favorite) => favorite.playlist.id === +playlist.id)
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
        <div className="flex items-center gap-5 py-4 px-10">
          <Button onClick={() => onPlay(playlist.id)} className={'hover:scale-125'}>
            <div className="bg-green-500 p-3.5 flex items-center justify-center rounded-full">
              <FaPlay size={16} />
            </div>
          </Button>
          <Button
            onClick={() => {
              mutate()
            }}
            className={''}
          >
            {isFavorite ? (
              <AiFillHeart color="#1ed760" size={38} />
            ) : (
              <AiOutlineHeart color="gray" size={38} />
            )}
          </Button>
        </div>
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
