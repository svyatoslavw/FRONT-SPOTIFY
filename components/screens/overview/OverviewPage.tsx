'use client'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { FC } from 'react'
import { BiLogoSpotify, BiPencil, BiSolidLockAlt } from 'react-icons/bi'
import { BsClipboard2DataFill, BsListUl } from 'react-icons/bs'
import { IoIosCard, IoIosEye, IoIosRefresh } from 'react-icons/io'
import { IoDiamondOutline } from 'react-icons/io5'
import { TbUsersPlus } from 'react-icons/tb'
import OverviewLink from './OverviewLink'
import ProfilePremium from './ProfilePremium'

const OverviewPage: FC = () => {
  const { profile } = useProfile()
  if (!profile) return

  return (
    <div className="bg-gradient-custom flex flex-col items-center justify-center py-10 gap-6 overflow-hidden overflow-y-hidden">
      {profile.premium ? (
        <ProfilePremium premium={profile.premium} />
      ) : (
        <div className=" bg-[#232323] w-[600px] px-4 py-2 rounded-lg">
          <div className="flex justify-between">
            <h6 className="text-[10px]">Моя подписка</h6>
            <BiLogoSpotify size={30} color="gray" />
          </div>

          <h1 className="font-semibold text-3xl pb-3 mb-5 text-slate-200">NONE Premium</h1>
          <Image
            src={profile.image}
            className="text-sm font-semibold rounded-full"
            width={30}
            height={30}
            alt="/"
          />
          <p className=" py-2 text-sm text-slate-300">Вы участник Spotify сообщества</p>
        </div>
      )}

      <div className=" bg-[#232323] w-[600px] p-2 rounded-lg">
        <h1 className="font-medium px-4 py-3">Аккаунт</h1>
        <OverviewLink href="/account/profile" Icon={BiPencil} text="Редактировать профиль" />
        <OverviewLink href="/" Icon={IoIosRefresh} text="Восстановление плейлистов" />
      </div>

      <div className="bg-[#232323] w-[600px] p-2 rounded-lg">
        <h1 className="font-medium px-4 py-3">Подписка</h1>
        <OverviewLink href="/" Icon={IoDiamondOutline} text="Доступные подписки" />
        <OverviewLink href="/" Icon={BiLogoSpotify} text="Управление подпиской" />
        <OverviewLink href="/" Icon={TbUsersPlus} text="Управление учасниками" />
      </div>

      <div className="bg-[#232323] w-[600px] p-2 rounded-lg">
        <h1 className="font-medium px-4 py-3">Оплата</h1>
        <OverviewLink href="/" Icon={BsClipboard2DataFill} text="История заказов" />
        <OverviewLink href="/" Icon={IoIosCard} text="Сохраненные платежные карты" />
        <OverviewLink href="/" Icon={TbUsersPlus} text="Управление учасниками" />
      </div>

      <div className="bg-[#232323] w-[600px] p-2 rounded-lg">
        <h1 className="font-medium px-4 py-3">Безопасность и конфиденциальность</h1>
        <OverviewLink href="/" Icon={BiSolidLockAlt} text="Смена пароля" />
        <OverviewLink href="/" Icon={IoIosEye} text="Настройка конфиденциальности" />
        <OverviewLink href="/" Icon={BsListUl} text="Способы входа" />
      </div>
    </div>
  )
}

export default OverviewPage
