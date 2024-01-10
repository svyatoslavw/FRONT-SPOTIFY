import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './Header.module.scss'

const NavButtons: FC = () => {
  const router = useRouter()
  return (
    <div className="flex gap-2">
      <span onClick={() => router.back()} className={styles.header__btns}>
        <ChevronLeft size={25} color="white" />
      </span>
      <span onClick={() => router.forward()} className={styles.header__btns}>
        <ChevronRight size={25} color="white" />
      </span>
    </div>
  )
}

export default NavButtons
