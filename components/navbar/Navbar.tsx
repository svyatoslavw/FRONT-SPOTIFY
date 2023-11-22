'use client'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useProfile } from '@/hooks/useProfile'
import { IFavorite, IPlaylist } from '@/types/playlist.types'
import { IFullUser } from '@/types/user.types'
import Image from 'next/image'
import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'
import { GoHomeFill } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import LikedPlaylist from './LikedPlaylist'
import NavLink from './NavLink'
import styles from './Navbar.module.scss'

interface FavoritesPage {
  user?: IFullUser
}

const Navbar: FC<FavoritesPage> = ({ user }) => {
  const { isAdminPanel } = useIsAdminPanel()
  const { profile } = useProfile()

  return (
    <div className={styles.navbar}>
      <div className="h-40 w-full bg-primary rounded-xl p-5">
        <div className="flex gap-1">
          <Image src={'/logo.png'} alt="logo" width={25} height={25} />
          <span className="font-semibold text-white">Spotify</span>
        </div>
        <div>
          <NavLink href="/" icon={GoHomeFill} text="Главная" />
          <NavLink href="/search" icon={IoSearchOutline} text="Поиск" />
        </div>
      </div>
      <div className="h-full overflow-scroll w-full bg-primary rounded-xl px-2 mt-2">
        <div className="flex justify-between items-center px-5">
          <NavLink icon={BiSolidPlaylist} href="/library" text="Моя медиатека" />
          <AiOutlinePlus size={25} color="gray" />
        </div>
        {/* <div className="bg-[#242424] w-full h-36 rounded-xl px-5 py-3 text-white">
          <p className="py-1 font-semibold">Создай свой первый плейлист</p>
          <p className="py-1 text-sm">Это совсем не сложно! Мы поможем.</p>
          <button className="py-1.5 px-3 mt-4 rounded-3xl text-sm text-center font-semibold bg-white text-black hover:scale-105 duration-200">
            Создать плейлист
          </button>
        </div> */}
        <div className="flex flex-col gap-2">
          {profile &&
            profile.favorites &&
            profile.favorites.map((favorites: IFavorite) => (
              <LikedPlaylist
                key={favorites.playlist.id}
                playlist={favorites.playlist as IPlaylist}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
