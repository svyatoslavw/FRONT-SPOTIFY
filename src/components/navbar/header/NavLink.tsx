'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from '../Navbar.module.scss'
import { INavLink } from '../admin/nav-link.interface'

const NavLink: FC<INavLink> = ({ href, icon: Icon, text, title }) => {
  const pathname = usePathname()
  const isCurrentPath = pathname === href

  return (
    <Link
      rel="preload"
      href={href}
      className={styles.link}
      style={isCurrentPath ? { color: 'white' } : undefined}
      title={title}
    >
      <span>
        <Icon size={24} />
      </span>
      <span>{text}</span>
    </Link>
  )
}

export default NavLink
