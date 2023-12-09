import Image from 'next/image'
import Link from 'next/link'
import { GoHomeFill } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import NavLink from '../NavLink'

const NavbarHeader = () => {
  return (
    <div className="h-40 w-full bg-primary rounded-xl p-5">
      <Link href={'/'} className="flex gap-1 cursor-pointer">
        <Image src={'/logo.png'} alt="logo" width={25} height={25} />
        <span className="font-semibold text-white">Spotify</span>
      </Link>
      <div>
        <NavLink href="/" icon={GoHomeFill} text="Главная" />
        <NavLink href="/search" icon={IoSearchOutline} text="Поиск" />
      </div>
    </div>
  )
}

export default NavbarHeader
