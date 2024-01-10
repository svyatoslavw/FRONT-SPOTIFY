import { getAuthURL } from '@/utils/getAuthUrl'
import { Webhook } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import styles from './GoogleAuth.module.scss'

interface IGoogleButton {
  type: string
  position: string
}

const GoogleAuth: FC<IGoogleButton> = ({ position, type }) => {
  // const { google } = useActions()
  // const { data } = useQuery<Query>(GOOGLE_USER, {})
  // const clicker = async () => {
  //   try {
  //     console.log(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  return (
    <div className="w-full">
      {position === 'bottom' && <div className={styles.divider}></div>}
      <div className="flex border border-gray rounded-full h-12 gap-4 items-center justify-center transition-colors hover:border-white text-sm my-3   font-semibold cursor-pointer">
        <Webhook size={25} />
        {/* <button onClick={clicker}>
          {type === 'login' ? 'Войти' : 'Зарегистрируйтесь'} через Google
        </button> */}
      </div>
      <div className="flex border border-gray rounded-full h-12 gap-4 items-center justify-center transition-colors hover:border-white text-sm my-3 font-semibold cursor-pointer">
        <Webhook color="white" size={25} />
        <Link href={getAuthURL('github')}>
          {type === 'login' ? 'Войти' : 'Зарегистрируйтесь'} через Github
        </Link>
      </div>
      {position === 'top' && <div className={styles.divider}></div>}
    </div>
  )
}

export default GoogleAuth
