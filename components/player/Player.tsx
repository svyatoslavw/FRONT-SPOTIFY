'use client'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TrackService } from '@/services/track/track.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { HiPause, HiPlay } from 'react-icons/hi'
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2'
import { TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled } from 'react-icons/tb'
import useSound from 'use-sound'
import VolumeBar from './VolumeBar'

const Player: FC = () => {
  const { activeId, ids } = useTypedSelector((state) => state.player)
  const { setId } = useActions()

  const { data: track } = useQuery({
    queryKey: ['track', activeId],
    queryFn: () => TrackService.byId(activeId),
    select: ({ data }) => data,
  })

  const [volume, setVolume] = useState<number>(1)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const onPlayNext = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id) => +id === activeId)
    const nextTrack = ids[currentIndex + 1]

    if (!nextTrack) return setId(ids[0])

    setId(nextTrack)
  }

  const onPlayPrev = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id) => +id === activeId)
    const prevTrack = ids[currentIndex - 1]

    if (!prevTrack) return setId(ids[ids.length - 1])

    setId(prevTrack)
  }

  const [play, { pause, sound }] = useSound(track?.file || '', {
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
    if (volume === 0) {
      setVolume(1)
    } else {
      setVolume(0)
    }
  }

  //if (!track || !track.file || activeId) return null
  return (
    <div className="h-20 w-full justify-between fixed bottom-0 flex items-center px-3 bg-black">
      {track && (
        <div className="flex gap-2 w-52 items-center p-2 my-2 rounded-md hover:bg-[#2a2a2a]  transition-all">
          <Image src={track.image} alt="image" width={40} height={40} />
          <div>
            <p className="text-sm cursor-pointer hover:underline">{track.name}</p>
            <p className="text-sm text-slate-300 cursor-pointer hover:underline">
              {track.artist && track.artist.name}
            </p>
          </div>
        </div>
      )}
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
      <div className="w-52 flex gap-3">
        {volume === 0 ? (
          <HiOutlineSpeakerXMark onChange={toggleMute} size={20} />
        ) : (
          <HiOutlineSpeakerWave onChange={toggleMute} size={20} />
        )}
        <VolumeBar value={volume} onChange={(value) => setVolume(value)} />
      </div>
    </div>
  )
}

export default Player
