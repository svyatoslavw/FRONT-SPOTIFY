'use client'

import PlayButton from '@/components/play-button/PlayButton'
import usePlay from '@/hooks/usePlay'
import { ITrack } from '@/types/track.types'
import Image from 'next/image'
import { FC } from 'react'
import Header from '../../header/Header'

interface IHomePage {
  tracks: ITrack[]
}

// interface SongItemProps {
//   data: Song;
//   onClick: (id: string) => void;
// }

const HomePage: FC<IHomePage> = ({ tracks }) => {
  const play = usePlay(tracks)
  return (
    <div className="m-2 ml-0 h-[98.2%] bg-gradient-custom rounded-xl">
      <Header />
      <div className="h-full w-full">
        <div className="grid px-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {tracks &&
            tracks.map((track) => (
              <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
                <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                  <Image alt={track.name} src={track.image} width={150} height={150} />
                </div>
                <div className="flex flex-col items-start w-full pt-2 gap-y-1">
                  <p className="font-semibold truncate w-full hover:underline">{track.name}</p>
                  <p className="text-zinc-400 text-xs pb-1 w-full truncate">
                    {track.artist && track.artist.name}
                  </p>
                  <div onClick={() => play(track.id)} className="absolute bottom-[78px] right-5">
                    <PlayButton />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
