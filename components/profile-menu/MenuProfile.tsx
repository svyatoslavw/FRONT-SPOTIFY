'use client'
import { FC } from 'react'
import MenuItem from './MenuItem'

const MenuProfile: FC = () => {
  return (
    <div className="absolute animate-fade bg-[#282828] shadow-lg right-10 top-20">
      <div className="w-44 text-xs z-50 font-medium shadow-md p-1 rounded-lg h-auto">
        <MenuItem icon={true} href="/account/overview" text="Аккаунт" />
        <MenuItem icon={false} href="/user" text="Профиль" />
        <MenuItem icon={true} href="/" text="Справка" />
        <MenuItem icon={true} href="/" text="Скачать" />
        <MenuItem icon={true} href="/" text="Настройки" />
        <div className="bg-gray h-[1px] w-full"></div>
        <button className="flex text-white w-full text-[12px] hover:bg-[#3e3e3e] py-2.5 px-3 justify-between cursor-pointer duration-150">
          <span>Выйти</span>
        </button>
      </div>
    </div>
  )
}

export default MenuProfile
