'use client'
import NavButtons from '@/components/header/NavButtons'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import Search from '../ui/search/Search'
import styles from './Header.module.scss'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
  const pathname = usePathname()

  return (
    <div className={styles.header}>
      {pathname.includes('search') ? (
        <div className="flex gap-5">
          <NavButtons />
          <Search />
        </div>
      ) : (
        <NavButtons />
      )}
      <HeaderProfile />
    </div>
  )
}

export default Header
