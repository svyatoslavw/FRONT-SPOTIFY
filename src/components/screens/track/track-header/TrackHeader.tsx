import { ITrack } from '@/types/track.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../TrackSlug.module.scss'

const TrackHeader: FC<{ track: ITrack }> = ({ track }) => {
  return (
    <div className={styles.header}>
      <Image src={track.image} className={styles.header__image} width={210} height={210} alt="/" />
      <div className={styles.header__heading}>
        <p className="text-sm my-3">Сингл</p>
        <p className={styles.header__name}>{track.name}</p>
      </div>
    </div>
  )
}

export default TrackHeader
