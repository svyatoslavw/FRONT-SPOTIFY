import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ITrack } from '@/types/track.types'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'

interface IPlaylistTrack {
  track: ITrack
  openHover: () => void
  closeHover: () => void
  onPlay: () => void
  index: number
  isHovered: number | null
}

const PlaylistItem: FC<IPlaylistTrack> = ({
  track,
  closeHover,
  openHover,
  onPlay,
  index,
  isHovered,
}) => {
  const { activeId } = useTypedSelector((state) => state.player)

  return (
    <div
      key={track.id}
      onMouseEnter={openHover}
      onMouseLeave={closeHover}
      className={clsx(
        'flex gap-2 items-center p-2 my-2 rounded-md hover:bg-graybackg  transition-all',
      )}
    >
      <p onClick={onPlay} className={clsx('text-sm w-5 flex items-center justify-center')}>
        {isHovered === index ? (
          activeId === track.id ? (
            <BsFillPauseFill size={20} />
          ) : (
            <BsFillPlayFill size={20} />
          )
        ) : (
          index + 1
        )}
      </p>
      <Image src={track.image} alt="image" width={40} height={40} />
      <div>
        <p
          className={clsx('text-sm cursor-pointer hover:underline', {
            'text-sm cursor-pointer text-green-500 hover:underline': activeId === track.id,
          })}
        >
          {track.name}
        </p>
        <p className="text-sm text-slate-300 cursor-pointer hover:underline">
          {track.artist && track.artist.name}
        </p>
      </div>
    </div>
  )
}

export default PlaylistItem
