'use client'
import { Query } from '@/__generated__/ggl/graphql'
import { GET_MAIN_STATISTICS } from '@/api/graphql/queries/GetMainStatistics'
import { ADMIN_URL } from '@/config/url.config'
import { convertCurrency } from '@/utils/convert-currency'
import { useQuery } from '@apollo/client'
import clsx from 'clsx'
import { Link2 } from 'lucide-react'
import Link from 'next/link'
import styles from './Dashboard.module.scss'

const DashboardPage = () => {
  const { data, loading } = useQuery<Query>(GET_MAIN_STATISTICS, {
    fetchPolicy: 'no-cache',
  })
  return (
    <div className="h-[100%] bg-gradient-custom overflow-y-auto rounded-xl">
      <div className="px-10 py-5">
        <div className={styles.wrapper}>
          {!loading &&
            data &&
            data.getMainStatistics.length &&
            data.getMainStatistics.map((item, index) => (
              <div key={item.name} className={clsx(styles.item, styles.color)}>
                <Link
                  className="absolute right-3 top-[60%]"
                  href={ADMIN_URL.root(item.name.toLowerCase())}
                >
                  <Link2 className="hover:scale-110 transition-all" size={24} />
                </Link>
                <div>
                  {index === data.getMainStatistics.length - 1 ? 'Total Amount' : item.name}
                </div>
                <div className="text-black">
                  {index === data.getMainStatistics.length - 1
                    ? convertCurrency(item.value || 0)
                    : item.value}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
