'use client'
import { IPlaylist } from '@/types/playlist.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const LikedPlaylist: FC<{ playlist?: IPlaylist }> = ({ playlist }) => {
  if (!playlist) {
    return null
  }
  return (
    <Link
      key={playlist.id}
      href={`/playlist/${playlist.slug}`}
      className="hover:bg-[#232323] p-2 rounded-lg transition-colors"
    >
      <div className="flex gap-2 ">
        <Image src={playlist.image} alt="image" width={45} height={45} className="rounded-lg" />
        <div>
          <p className="text-sm">{playlist.name}</p>
          <span className="text-xs text-slate-300">{playlist.user && playlist.user.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default LikedPlaylist
