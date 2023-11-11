'use client'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { PlaylistService } from '@/services/playlist/playlist.service'
import { IPlaylist } from '@/types/playlist.types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'
import { GoHomeFill } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import NavLink from './NavLink'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const { isAdminPanel } = useIsAdminPanel()
  const { user } = useAuth()

  const { data: playlists } = useQuery({
    queryKey: ['playlist'],
    queryFn: () => PlaylistService.getAll(),
    select: ({ data }) => data,
  })

  return (
    <div className={styles.navbar}>
      <div className="h-40 w-full bg-primary rounded-xl p-5">
        <div className="flex gap-1">
          <Image src={'/logo.png'} alt="logo" width={25} height={25} />
          <span className="font-semibold text-white">Spotify</span>
        </div>
        <div>
          <NavLink href="/" icon={GoHomeFill} text="Главная" />
          <NavLink href="/dashboard" icon={IoSearchOutline} text="Поиск" />
        </div>
      </div>
      <div className="h-full w-full bg-primary rounded-xl px-2 mt-2">
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
          {playlists &&
            playlists.map((playlist: IPlaylist) => (
              <Link
                href={`/playlist/${playlist.slug}`}
                className="hover:bg-[#232323] p-2 rounded-lg transition-colors"
              >
                <div className="flex gap-2">
                  <Image
                    src={playlist.image}
                    alt="image"
                    width={55}
                    height={55}
                    className="rounded-lg"
                  />
                  <div>
                    <p>{playlist.name}</p>
                    <span className="text-sm text-slate-300">
                      {playlist.user && playlist.user.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
