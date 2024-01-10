import { ChevronRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Overview.module.scss'
interface IOverviewLink {
  href: string
  Icon: LucideIcon
  text: string
}

const OverviewLink: FC<IOverviewLink> = ({ Icon, href, text }) => {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.link__item}>
        <div className={styles.link__icon}>
          <Icon color="gray" size={20} />
        </div>
        <span>{text}</span>
      </div>
      <ChevronRight color="gray" size={25} />
    </Link>
  )
}

export default OverviewLink
