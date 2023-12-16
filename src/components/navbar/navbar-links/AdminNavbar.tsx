'use client'
import { getAdminUrl } from '@/config/url.config'
import { AudioLines, Disc3, ListMusic, Sliders, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../Navbar.module.scss'
import AdminNavLink from './AdminNavLink'

const AdminNavbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className="h-full overflow-scroll w-full bg-primary rounded-xl p-5">
        <Link href={'/'} className="flex gap-1 cursor-pointer">
          <Image src={'/logo.png'} alt="logo" width={25} height={25} />
          <span className="font-semibold text-white">Spotify</span>
        </Link>
        <div className="my-8">
          {/* <NavLink href="/" icon={GoHomeFill} text="Главная" /> */}
          {/* <NavLink href="/search" icon={IoSearchOutline} text="Поиск" /> */}
          <AdminNavLink href={getAdminUrl('/dashboard')} icon={Sliders} text="Dashboard" />
          <AdminNavLink href={getAdminUrl('/tracks')} icon={AudioLines} text="Треки" />
          <AdminNavLink href={getAdminUrl('/albums')} icon={Disc3} text="Альбомы" />
          <AdminNavLink href={getAdminUrl('/playlists')} icon={ListMusic} text="Плейлисты" />
          <AdminNavLink href={getAdminUrl('/users')} icon={UsersRound} text="Пользователи" />
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
