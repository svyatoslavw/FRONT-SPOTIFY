import { IUser } from '@/types/user.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from './ProfileHeader.module.scss'

const ProfileHeader: FC<{ profile: IUser }> = ({ profile }) => {
  return (
    <div>
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
          <div className="flex my-2 items-center justify-between">
            <p className="text-sm cursor-default">Профиль</p>
            {profile.premium && <span className={styles.premiumBtn}>Premium</span>}
          </div>
          <p className="text-8xl tracking-tighter font-black">{profile.name}</p>
        </div>
      </div>
      <div className="px-16 flex gap-8">
        <button className={styles.customBtn}>add track</button>
        <button className={styles.customBtn}>add album</button>
      </div>
    </div>
  )
}

export default ProfileHeader
