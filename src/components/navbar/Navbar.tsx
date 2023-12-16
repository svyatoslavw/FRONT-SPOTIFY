'use client'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { IFullUser } from '@/types/user.types'
import { FC } from 'react'
import styles from './Navbar.module.scss'
import NavbarHeader from './navbar-header/NavbarHeader'
import NavbarMain from './navbar-main/NavbarMain'

interface FavoritesPage {
  user?: IFullUser
}

const Navbar: FC<FavoritesPage> = ({ user }) => {
  const { isAdminPanel } = useIsAdminPanel()

  return (
    <div className={styles.navbar}>
      <NavbarHeader />
      <NavbarMain />
      {/* {isOpen && (
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <CreatePlaylist />
        </Modal>
      )} */}
    </div>
  )
}

export default Navbar
