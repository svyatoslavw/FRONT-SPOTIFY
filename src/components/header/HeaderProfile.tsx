import { useProfile } from '@/hooks/useProfile'
import { Divider } from '@nextui-org/react'
import Link from 'next/link'
import HeaderMenu from './HeaderMenu'

const HeaderProfile = () => {
  const { profile, error } = useProfile()
  return (
    <div className="flex gap-6 items-center">
      {profile && !profile.premium && !error && (
        <>
          <Link href={'/premium'} style={{ color: 'gray', fontWeight: 700 }}>
            <span className="hover:text-secondary duration-200 py-2 px-5 rounded-2xl bg-primary">
              Premium
            </span>
          </Link>
          <Divider orientation="vertical" className="h-5" />
        </>
      )}

      {!profile ? (
        <div>
          <Link href={'/auth/register'} style={{ color: 'gray', fontWeight: 700 }}>
            <span className="hover:text-grayLight duration-200">Register</span>
          </Link>
          <Link
            href={'auth/login'}
            style={{ color: 'black', fontWeight: 700 }}
            className="bg-white py-2 px-6 ml-4 rounded-full"
          >
            <span className="hover:text-grayLight duration-200">Login</span>
          </Link>
        </div>
      ) : (
        <HeaderMenu />
      )}
    </div>
  )
}

export default HeaderProfile
