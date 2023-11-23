'use client'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ITrack } from '@/types/track.types'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { HiPause, HiPlay } from 'react-icons/hi'
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2'
import { TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled } from 'react-icons/tb'
import useSound from 'use-sound'
import VolumeBar from './VolumeBar'

interface TrackProps {
  activeId: number | undefined
  track: ITrack
  trackUrl: string
}

const Player: FC<TrackProps> = ({ activeId, track, trackUrl }) => {
  const { ids, volume, isPlaying } = useTypedSelector((state) => state.player)
  const { setId, setVolume, setIsPlaying } = useActions()
  const [prevVolume, setPrevVolume] = useState<number>(1)
  const onPlayNext = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id) => +id === activeId)
    const nextTrack = ids[currentIndex + 1]

    if (!nextTrack) return setId(ids[0])

    setId(nextTrack)
  }

  const onPlayPrev = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id) => id === activeId)
    const prevTrack = ids[currentIndex - 1]

    if (!prevTrack) return setId(ids[ids.length - 1])

    setId(prevTrack)
  }

  const [play, { pause, sound }] = useSound(trackUrl, {
    volume: volume,

    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false)
      onPlayNext()
    },
    onpause: () => setIsPlaying(false),
    format: ['mp3'],
  })

  useEffect(() => {
    sound?.play()

    return () => {
      sound?.unload()
    }
  }, [sound])

  const handlePlay = () => {
    if (!isPlaying) {
      play()
    } else {
      pause()
    }
  }
  const toggleMute = () => {
    if (volume !== 0) {
      setPrevVolume(volume)
      setVolume(0)
    } else {
      setVolume(prevVolume)
    }
  }

  return (
    <div className="h-20 w-full justify-between fixed bottom-0 flex items-center px-3 bg-black">
      {track ? (
        <div className="flex gap-2 w-52 items-center p-2 my-2 rounded-md hover:bg-[#2a2a2a]  transition-all">
          <Image src={track.image} alt="image" width={40} height={40} />
          <div className="w-full">
            <p className="text-sm w-32 truncate cursor-pointer hover:underline">{track.name}</p>
            <p className="text-sm truncate text-slate-300 cursor-pointer hover:underline">
              {track.artist && track.artist.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 w-52 items-center p-2 my-2 rounded-md hover:bg-[#2a2a2a]  transition-all">
          <Image src={'/logo'} alt="image" width={40} height={40} />
          <div>
            <p className="text-sm cursor-pointer hover:underline">Выберите трек</p>
            <p className="text-sm text-slate-300 cursor-pointer hover:underline">Пример</p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <TbPlayerSkipBackFilled onClick={onPlayPrev} size={20} />
          <span className="p-1 flex items-center rounded-full justify-center ">
            {isPlaying ? (
              <HiPause onClick={handlePlay} color="white" size={40} />
            ) : (
              <HiPlay size={40} onClick={handlePlay} color="white" />
            )}
          </span>
          <TbPlayerSkipForwardFilled onClick={onPlayNext} size={20} />
        </div>
      </div>
      <div className="w-52 flex items-center gap-3">
        <div onChange={toggleMute} onClick={toggleMute}>
          {volume === 0 ? <HiOutlineSpeakerXMark size={20} /> : <HiOutlineSpeakerWave size={20} />}
        </div>

        <VolumeBar value={volume} onChange={(value) => setVolume(value)} />
      </div>
    </div>
  )
}

export default Player
