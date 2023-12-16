import { Track } from '@/__generated__/ggl/graphql'
import PlayButton from '@/components/play-button/PlayButton'
import usePlay from '@/hooks/usePlay'
import Image from 'next/image'
import { FC } from 'react'

const SearchedTracks: FC<{ tracks: Track[] }> = ({ tracks }) => {
  const play = usePlay(tracks)
  return (
    <>
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
    </>
  )
}

export default SearchedTracks
