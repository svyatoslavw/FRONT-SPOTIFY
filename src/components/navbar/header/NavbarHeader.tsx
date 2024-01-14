import { AudioLines, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

const NavbarHeader = () => {
  return (
    <div className="h-40 w-full bg-primary rounded-xl p-5">
      <Link href={'/'} className="flex gap-1 cursor-pointer">
        <Image src={'/logo.png'} alt="logo" width={25} height={25} />
        <span className="font-semibold text-white">Spotify</span>
      </Link>
      <div>
        <NavLink href="/" icon={AudioLines} text="Home" />
        <NavLink href="/search" icon={Search} text="Search" />
      </div>
    </div>
  )
}

export default NavbarHeader
