'use client'
import NavButtons from '@/components/nav-buttons/NavButtons'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import { EnumUserPremium } from '@/types/premium.types'
import { EnumUserRoles } from '@/types/user.types'
import { Divider } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import Search from '../ui/search/Search'
import AdminMenu from './menu/AdminMenu'
import UserMenu from './menu/UserMenu'

const Header: FC = () => {
  const { user } = useAuth()
  const { profile, error, loading } = useProfile()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { ref, isShow, setIsShow } = useOutside(false)
  const pathname = usePathname()

  return (
    <div className="h-[80px] w-full flex bg-transparent justify-between px-5 items-center">
      {pathname.includes('search') ? (
        <div className="flex gap-5">
          <NavButtons />
          <Search />
        </div>
      ) : (
        <NavButtons />
      )}

      <div className="flex gap-6 items-center">
        {profile && profile.premium && profile.premium.type === EnumUserPremium.NONEPREMIUM && (
          <>
            <Link href={'/premium'} style={{ color: 'gray', fontWeight: 700 }}>
              <span className="hover:text-secondary duration-200 py-2 px-5 rounded-2xl bg-primary">
                Premium
              </span>
            </Link>
            <Divider orientation="vertical" className="h-5" />
          </>
        )}

        {!user ? (
          <>
            <Link href={'/auth/register'} style={{ color: 'gray', fontWeight: 700 }}>
              <span className="hover:text-grayLight duration-200">Зарегистрироваться</span>
            </Link>
            <Link
              href={'auth/login'}
              className="py-3 text-sm px-7 font-semibold text-black bg-white rounded-full"
            >
              <span className="hover:text-grayLight duration-200">Войти</span>
            </Link>
          </>
        ) : (
          <>
            {profile?.role === EnumUserRoles.USER && <UserMenu />}
            {profile?.role === EnumUserRoles.ADMIN && <AdminMenu />}
          </>
        )}
      </div>
    </div>
  )
}

export default Header
