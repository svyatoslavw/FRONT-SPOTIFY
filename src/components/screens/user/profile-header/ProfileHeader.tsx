import Header from '@/components/header/Header'
import { IUser } from '@/types/user.types'
import { average } from 'color.js'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import styles from './ProfileHeader.module.scss'

const ProfileHeader: FC<{ profile: IUser }> = ({ profile }) => {
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
        <div className={styles.container}>
          <Image
            src={profile.image}
            draggable={false}
            className={styles.container__image}
            width={230}
            height={230}
            alt="/"
          />
          <div>
            <div className={styles.container__heading}>
              <p className="text-sm cursor-default">Profile</p>
              {profile.premium && <span className={styles.premiumBtn}>Premium</span>}
            </div>
            <p className={styles.container__name}>{profile.name}</p>
          </div>
        </div>
      </>
    </div>
  )
}

export default ProfileHeader
