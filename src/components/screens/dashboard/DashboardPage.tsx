'use client'

import { getAdminUrl } from '@/config/url.config'
import { StatisticsService } from '@/services/statistics.service'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import styles from './Dashboard.module.scss'
import { convertCurrency } from '@/utils/convert-currency'

const DashboardPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['statistics'],
    queryFn: () => StatisticsService.getMain(),
    select: ({ data }) => data,
  })
  return (
    <div className="h-[98.2vh] bg-gradient-custom overflow-y-auto rounded-xl">
      <div className="px-10 py-5">
        <div className={styles.wrapper}>
          {data?.length &&
            data.map((item, index) => (
              <div key={item.name} className={clsx(styles.item, styles.color)}>
                <Link
                  className="absolute right-3 top-[60%]"
                  href={getAdminUrl('/' + item.name.toLowerCase())}
                >
                  <IoIosArrowForward size={28} />
                </Link>
                <div>{item.name}</div>
                <div className="text-black">
                  {index === data.length - 1 ? convertCurrency(item.value || 0) : item.value}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
