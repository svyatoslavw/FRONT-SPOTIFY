import { IPlaylist } from '@/types/playlist.types'
import Image from 'next/image'
import { FC } from 'react'

const PlaylistHeader: FC<{ playlist: IPlaylist }> = ({ playlist }) => {
  return (
    <div className="w-full h-[270px] flex gap-7 px-6 items-center">
      <Image
        src={playlist.image}
        className="text-sm font-semibold"
        width={230}
        height={230}
        alt="/"
      />
      <div>
        <p className="text-sm my-3">Плейлист</p>
        <p className="text-8xl tracking-tighter font-black">{playlist.name}</p>
      </div>
    </div>
  )
}

export default PlaylistHeader
