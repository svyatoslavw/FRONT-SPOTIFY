import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth/auth.service'
import { getAuthURL } from '@/utils/getAuthUrl'
import Link from 'next/link'
import { FC } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import styles from './GoogleAuth.module.scss'

interface IGoogleButton {
  type: string
  position: string
}

const GoogleAuth: FC<IGoogleButton> = ({ position, type }) => {
  const { google } = useActions()
  const clicker = async () => {
    const response = await AuthService.authGoogle()
    return response
  }
  return (
    <div className="w-full">
      {position === 'bottom' && <div className={styles.divider}></div>}
      <div className="flex border border-gray rounded-full h-12 gap-4 items-center justify-center transition-colors hover:border-white text-sm my-3   font-semibold cursor-pointer">
        <FcGoogle size={25} />
        <Link href={getAuthURL('google')}>
          {}
          {type === 'login' ? 'Войти' : 'Зарегистрируйтесь'} через Google
        </Link>
      </div>
      <div className="flex border border-gray rounded-full h-12 gap-4 items-center justify-center transition-colors hover:border-white text-sm my-3 font-semibold cursor-pointer">
        <BsGithub color="white" size={25} />
        <Link href={getAuthURL('github')}>
          {type === 'login' ? 'Войти' : 'Зарегистрируйтесь'} через Github
        </Link>
      </div>
      {position === 'top' && <div className={styles.divider}></div>}
    </div>
  )
}

export default GoogleAuth
