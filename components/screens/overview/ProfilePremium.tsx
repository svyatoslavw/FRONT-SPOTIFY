import { useProfile } from '@/hooks/useProfile'
import { FC } from 'react'
import { BiLogoSpotify } from 'react-icons/bi'

const ProfilePremium: FC = () => {
  const { profile } = useProfile()
  if (!profile) return null
  return (
    <div className=" bg-[#232323] w-[600px] px-4 py-2 rounded-lg">
      <div className="flex justify-between">
        <h6 className="text-[10px]">Моя подписка</h6>
        <BiLogoSpotify size={30} color="#15b37f" />
      </div>

      <h1 className="font-semibold text-emerald-500  text-3xl pb-8">
        {profile.premium && profile.premium.name}
      </h1>
      <p className=" py-2 text-sm text-slate-300">
        Вы участник подписки {profile.premium && profile.premium.name}
      </p>
    </div>
  )
}

export default ProfilePremium
