import { IUser } from '@/types/user.types'
import Image from 'next/image'
import { FC } from 'react'

const ProfileHeader: FC<{ profile: IUser }> = ({ profile }) => {
  return (
    <div className="w-full h-[270px] flex gap-7 px-4 items-center">
      <Image
        src={profile.image}
        className="text-sm font-semibold rounded-full"
        width={230}
        height={230}
        alt="/"
      />
      <div>
        <p className="text-sm my-3">Профиль</p>
        <p className="text-8xl tracking-tighter font-black">{profile.name}</p>
      </div>
    </div>
  )
}

export default ProfileHeader
