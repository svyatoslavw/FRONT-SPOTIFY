import AdminNavbar from '@/components/navbar/AdminNavbar'
import { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="grid overflow-hidden grid-cols-[0fr,1fr] grid-rows-1 gap-x-0 gap-y-0">
      <AdminNavbar />
      <div className=" m-2 ml-0">{children}</div>
    </div>
  )
}
