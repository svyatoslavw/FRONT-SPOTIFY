'use client'

import PlayButton from '@/components/play-button/PlayButton'
import usePlay from '@/hooks/usePlay'
import { IPlaylist } from '@/types/playlist.types'
import { ITrack } from '@/types/track.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Header from '../../header/Header'

interface IHomePage {
  tracks: ITrack[]
  playlists: IPlaylist[]
}

const HomePage: FC<IHomePage> = ({ tracks, playlists }) => {
  const play = usePlay(tracks)
  return (
    <div>
      <Header />
      <div className="px-3 h-full mb-28">
        {tracks.length !== 0 && (
          <h1 className="text-2xl font-semibold pb-2">Рекомендованные подборки</h1>
        )}
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {tracks &&
            tracks.map((track) => (
              <div
                key={track.id}
                className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition mb-10 p-3"
              >
                <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                  <Image
                    alt={track.name}
                    src={track.image}
                    width={150}
                    height={150}
                    className="object-cover h-[150px] w-[150px]"
                  />
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
        {playlists.length !== 0 && <h1 className="text-2xl font-semibold pb-2">Плейлисты</h1>}
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {playlists &&
            playlists.map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.slug}`}
                className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
              >
                <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                  <Image
                    alt={playlist.name}
                    src={playlist.image}
                    width={150}
                    height={150}
                    className="object-cover h-[150px] w-[150px]"
                  />
                </div>
                <div className="flex flex-col items-start w-full pt-2 gap-y-1">
                  <p className="font-semibold truncate w-full hover:underline">{playlist.name}</p>
                  <p className="text-zinc-400 text-xs pb-1 w-full truncate">
                    {playlist.user && playlist.user.name}
                  </p>
                  <div className="absolute bottom-[78px] right-5">
                    <PlayButton />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
