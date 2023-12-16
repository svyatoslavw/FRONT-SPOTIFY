import { Album } from '@/__generated__/ggl/graphql'
import PlayButton from '@/components/play-button/PlayButton'
import Image from 'next/image'
import { FC } from 'react'

const SearchedAlbums: FC<{ albums: Album[] }> = ({ albums }) => {
  return (
    <>
      {albums &&
        albums.map((album) => (
          <div
            key={album.id}
            className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition mb-10 p-3"
          >
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
              <Image
                alt={album.name}
                src={album.image}
                width={150}
                height={150}
                className="object-cover h-[150px] w-[150px]"
              />
            </div>
            <div className="flex flex-col items-start w-full pt-2 gap-y-1">
              <p className="font-semibold truncate w-full hover:underline">{album.name}</p>
              {/* <p className="text-zinc-400 text-xs pb-1 w-full truncate">
                {album.artist && album.artist.name}
              </p> */}
              <div className="absolute bottom-[78px] right-5">
                <PlayButton />
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default SearchedAlbums
