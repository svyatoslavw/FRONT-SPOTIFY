'use client'
import { ADMIN_URL } from '@/config/url.config'
import { AudioLines, BadgeDollarSign, Disc3, ListMusic, Sliders, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Navbar.module.scss'
import AdminNavLink from './AdminNavLink'

const AdminNavbar = () => {
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
          <AdminNavLink href={ADMIN_URL.root('dashboard')} icon={Sliders} text="Dashboard" />
          <AdminNavLink href={ADMIN_URL.root('tracks')} icon={AudioLines} text="Tracks" />
          <AdminNavLink href={ADMIN_URL.root('albums')} icon={Disc3} text="Albums" />
          <AdminNavLink href={ADMIN_URL.root('playlists')} icon={ListMusic} text="Playlists" />
          <AdminNavLink href={ADMIN_URL.root('users')} icon={UsersRound} text="Users" />
          <AdminNavLink href={ADMIN_URL.root('orders')} icon={BadgeDollarSign} text="Orders" />
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
