import Header from '@/components/header/Header'
import { IUser } from '@/types/user.types'
import { average } from 'color.js'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import styles from './ArtistHeader.module.scss'

const ArtistHeader: FC<{ profile: IUser }> = ({ profile }) => {
  const [color, setColor] = useState<string>('')
  useEffect(() => {
    if (profile) {
      average(profile.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          console.error('Error calculating color:', error)
        })
    }
    console.log(color)
  }, [profile])

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
      }}
      className="rounded-t-lg rounded-r-lg"
    >
      <Header />
      <>
        <div className="w-full h-[270px] flex gap-7 px-4 items-center">
          <Image
            src={profile.image}
            draggable={false}
            className="text-sm font-semibold rounded-full"
            width={230}
            height={230}
            alt="/"
          />
          <div>
            <div className="flex my-2 items-center justify-end">
              {profile.premium && <span className={styles.premiumBtn}>Artist</span>}
            </div>
            <p className="text-8xl tracking-tighter font-black">{profile.name}</p>
          </div>
        </div>
        {/* <div className="px-16 flex gap-8">
          <button className={styles.customBtn}>add track</button>
          <button className={styles.customBtn}>add album</button>
        </div> */}
      </>
    </div>
  )
}

export default ArtistHeader
