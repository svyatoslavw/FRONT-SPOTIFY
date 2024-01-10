'use client'
import { FC } from 'react'
import styles from './Navbar.module.scss'
import NavbarHeader from './header/NavbarHeader'
import NavbarMain from './main/NavbarMain'

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <NavbarHeader />
      <NavbarMain />
    </div>
  )
}

export default Navbar
