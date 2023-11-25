'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Navbar.module.scss'
import { INavLink } from './nav-link.interface'

const AdminNavLink: FC<INavLink> = ({ href, icon: Icon, text }) => {
  const pathname = usePathname()
  const isCurrentPath = pathname === href

  return (
    <Link
      rel="preload"
      href={href}
      className={styles.linkAdmin}
      style={isCurrentPath ? { color: '#22c55e' } : undefined}
    >
      {isCurrentPath && <span className="absolute -ml-3 h-7 w-1 bg-green-500"></span>}
      <span>
        <Icon size={30} />
      </span>
      <span>{text}</span>
    </Link>
  )
}

export default AdminNavLink
