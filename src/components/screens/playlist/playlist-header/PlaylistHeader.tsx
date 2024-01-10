import { IPlaylist } from '@/types/playlist.types'
import Image from 'next/image'
import { FC } from 'react'

const PlaylistHeader: FC<{ playlist: IPlaylist }> = ({ playlist }) => {
  return (
    <div className="w-full 2xl:h-[240px] xl:h-[200px] flex gap-7 px-6 items-center">
      <Image
        src={playlist.image}
        className="text-sm font-semibold hover:scale-110 transition-all"
        width={210}
        height={210}
        alt="/"
      />
      <div>
        <p className="text-sm my-3">Playlist</p>
        <p className="text-8xl w-full py-2 tracking-tighter font-black">{playlist.name}</p>
      </div>
    </div>
  )
}

export default PlaylistHeader
