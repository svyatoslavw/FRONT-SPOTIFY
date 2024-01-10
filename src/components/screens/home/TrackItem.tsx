import { Track } from '@/__generated__/ggl/graphql'
import PlayButton from '@/components/player/PlayButton'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HomePage.module.scss'

const TrackItem: FC<{ track: Track; play: (id: number) => void }> = ({ track, play }) => {
  return (
    <div key={track.id} className={clsx(styles.item, 'group')}>
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
        <Link
          href={`/track/${track.slug}`}
          className="font-semibold truncate w-full hover:underline"
        >
          {track.name}
        </Link>
        <p className="text-zinc-400 text-xs pb-1 w-full truncate">
          {track.artist && track.artist.name}
        </p>
        <div onClick={() => play(track.id)} className="absolute bottom-[78px] right-5">
          <PlayButton />
        </div>
      </div>
    </div>
  )
}

export default TrackItem
