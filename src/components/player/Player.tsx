'use client'
import usePlayer from '@/stores/playerStore'
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import useSound from 'use-sound'
import styles from './Player.module.scss'
import VolumeBar from './VolumeBar'

interface TrackProps {
  activeId: number | undefined
  track: any
  trackUrl: string
}

const Player: FC<TrackProps> = ({ activeId, track, trackUrl }) => {
  const { setId, setVolume, setIsPlaying, volume, isPlaying, ids } = usePlayer()
  const [prevVolume, setPrevVolume] = useState<number>(1)

  const onPlayNext = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id: number) => +id === activeId)
    const nextTrack = ids[currentIndex + 1]

    if (!nextTrack) return setId(ids[0])

    setId(nextTrack)
  }

  const onPlayPrev = () => {
    if (ids.length === 0 || activeId === undefined) return

    const currentIndex = ids.findIndex((id: number) => id === activeId)
    const prevTrack = ids[currentIndex - 1]

    if (!prevTrack) return setId(ids[ids.length - 1])

    setId(prevTrack)
  }

  const [play, { pause, sound, duration }] = useSound(trackUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    autoplay: false,
    onend: () => {
      setIsPlaying(false)
      onPlayNext()
    },

    onpause: () => setIsPlaying(false),
    format: ['mp3'],
  })

  useEffect(() => {
    if (isPlaying) {
      sound?.play()
    }
    if (!isPlaying) {
      sound?.once('load', () => {
        sound?.play()
      })
    }
    return () => {
      sound?.unload()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onSeek = (timeInSeconds: number) => {
    if (sound) {
      sound.seek(timeInSeconds)
    }
  }

  return (
    <div className={styles.player}>
      {track ? (
        <div className="flex gap-2 w-72 items-center p-2 my-2 rounded-md ">
          <Image src={track.image} alt="image" className="rounded-md" width={40} height={40} />
          <div className="w-full">
            <p className="text-sm w-64 truncate cursor-pointer hover:underline">{track.name}</p>
            <p className="text-sm truncate text-slate-300 cursor-pointer hover:underline">
              {track.artist && track.artist.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 w-72 items-center p-2 my-2 rounded-md hover:bg-graybackg  transition-all">
          <Image src={'/logo'} alt="image" width={40} height={40} />
          <div>
            <p className="text-sm cursor-pointer hover:underline">Choose song</p>
            <p className="text-sm text-slate-300 cursor-pointer hover:underline">Example</p>
          </div>
        </div>
      )}
      <div className="flex flex-col  items-center justify-center gap-3">
        <div className="flex flex-col w-[350px]  items-center">
          <div className="flex items-center gap-6 mb-1">
            <SkipBack onClick={onPlayPrev} size={18} fill="white" />
            <span className="p-1 flex items-center rounded-full justify-center ">
              {isPlaying ? (
                <Pause onClick={handlePlay} color="white" fill="white" size={20} />
              ) : (
                <Play size={20} onClick={handlePlay} color="white" fill="white" />
              )}
            </span>
            <SkipForward onClick={onPlayNext} fill="white" size={18} />
          </div>
          {/* <SeekBar onSeek={onSeek} duration={duration || 0} sound={sound} /> */}
        </div>
      </div>
      <div className="w-52 flex items-center gap-3">
        <div onChange={toggleMute} onClick={toggleMute}>
          {volume === 0 ? <VolumeX size={20} fill="white" /> : <Volume2 size={20} fill="white" />}
        </div>

        <VolumeBar value={volume} onChange={(value) => setVolume(value)} />
      </div>
    </div>
  )
}

export default Player
