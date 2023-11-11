'use client'
import { FC } from 'react'
import MenuItem from './MenuItem'

const MenuProfileSmall: FC = () => {
  return (
    <div className="absolute animate-fade bg-[#282828] shadow-lg right-[375px] top-20">
      <div className="w-44 text-xs z-50 font-medium shadow-md p-1 rounded-lg h-auto">
        <MenuItem icon={true} href="/account/overview" text="Аккаунт" />
        <button className="flex text-white w-full text-[12px] hover:bg-green-500 py-2.5 px-3 justify-between cursor-pointer duration-150">
          <span>Выйти</span>
        </button>
      </div>
    </div>
  )
}

export default MenuProfileSmall
