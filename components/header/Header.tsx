import NavButtons from '@/components/nav-buttons/NavButtons'
import MenuProfile from '@/components/profile-menu/MenuProfile'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

const Header: FC = () => {
  const { user } = useAuth()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { ref, isShow, setIsShow } = useOutside(false)
  return (
    <div className="h-[70px] w-full flex bg-transparent justify-between px-5 items-center">
      <NavButtons />
      <div className="flex gap-6 items-center">
        <Link href={'/'} style={{ color: 'gray', fontWeight: 700 }}>
          <span className="hover:text-grayLight duration-200 py-1 px-4 rounded-2xl bg-primary">
            Premium
          </span>
        </Link>

        {!user ? (
          <>
            <div className="w-full h-[28px] bg-[#a3a3a3] mx-3"></div>
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
          <Image
            src={user.image}
            className="text-sm font-semibold rounded-full"
            width={35}
            height={35}
            alt="/"
            onClick={() => setIsShow(!isShow)}
          />
        )}

        <div ref={ref}>{isShow && <MenuProfile />}</div>
      </div>
    </div>
  )
}

export default Header
