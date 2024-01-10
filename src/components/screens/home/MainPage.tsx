'use client'
import { Track } from '@/__generated__/ggl/graphql'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import usePlay from '@/hooks/usePlay'
import { FC } from 'react'
import { IHomePage } from './HomePage'
import styles from './HomePage.module.scss'
import TrackItem from './TrackItem'

const MainPage: FC<IHomePage> = ({ tracks, loading }) => {
  //@ts-ignore
  const play = usePlay(tracks)

  return (
    <div className="px-3 h-full ">
      {tracks.length !== 0 && <h1 className="text-2xl font-bold pb-2">Recommended selections</h1>}
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
      {/* {playlists.length !== 0 && <h1 className="text-2xl font-semibold pb-2">Плейлисты</h1>} */}
      {/* <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
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
        </div> */}
    </div>
  )
}

export default MainPage
