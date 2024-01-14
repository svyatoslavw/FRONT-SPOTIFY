'use client'
import { Track } from '@/__generated__/ggl/graphql'
import PlayButton from '@/components/player/PlayButton'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { PUBLIC_URL } from '@/config/url.config'
import usePlay from '@/hooks/usePlay'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IHomePage } from './HomePage'
import styles from './HomePage.module.scss'
import TrackItem from './TrackItem'

const MainPage: FC<IHomePage> = ({ tracks, loading, playlists }) => {
  //@ts-ignore
  const play = usePlay(tracks)
  return (
    <div className="px-3 xl:h-[85vh] lg:h-[80vh] md:h-[90vh] sm:h-full">
      <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
      <div className="bg-zinc-800 w-72 rounded-e-md hover:bg-zinc-700 transition-all">
        <div className="flex gap-2 items-center">
          <Heart
            size={60}
            className="p-4 bg-purple rounded-sm"
            style={{
              background:
                'linear-gradient(to left top, rgb(233, 213, 255), rgb(140,131,228), rgb(109,82,234))',
            }}
            color="white"
            fill="white"
            strokeWidth={1}
          />
          <Link href={PUBLIC_URL.favorites()} className="ml-2 cursor-pointer hover:underline">
            Liked tracks
          </Link>
        </div>
      </div>
      {tracks.length !== 0 && <h1 className="text-2xl font-bold mt-10">Newest songs</h1>}
      <div className={styles.container}>
        {loading ? (
          <div className="w-full px-10 mt-20 absolute">
            <ProgressBar />
          </div>
        ) : (
          tracks &&
          tracks.map((track: Track) => <TrackItem track={track} key={track.id} play={play} />)
        )}
      </div>
      {playlists.length !== 0 && <h1 className="text-2xl font-bold pb-2">Popular playlists</h1>}
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
  )
}

export default MainPage
