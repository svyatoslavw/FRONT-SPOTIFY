import { IUser } from '@/types/user.types'
import Image from 'next/image'
import { FC } from 'react'

const ProfileHeader: FC<{ profile: IUser }> = ({ profile }) => {
  return (
    <div>
      <div className="w-full h-[270px] flex gap-7 px-4 items-center">
        <Image
          src={profile.image}
          className="text-sm font-semibold rounded-full"
          width={230}
          height={230}
          alt="/"
        />
        <div>
          <div className="flex my-2 items-center justify-between">
            <p className="text-sm">Профиль</p>
            {profile.premium && (
              <span className="text-xs bg-secondary px-2 py-1 text-black rounded-full">
                Premium
              </span>
            )}
          </div>
          <p className="text-8xl tracking-tighter font-black">{profile.name}</p>
        </div>
      </div>
      <div className="px-16 flex gap-8">
        <button className="text-center px-5 w-32 text-white rounded-full py-1 bg-secondary/50 hover:bg-secondary transition">
          add track
        </button>
        <button className="text-center px-5 w-32 text-white rounded-full py-1 bg-secondary/50 hover:bg-secondary transition">
          add album
        </button>
      </div>
    </div>
  )
}

export default ProfileHeader
