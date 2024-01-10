'use client'
import AdminNavbar from '@/components/navbar/admin/AdminNavbar'
import { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="grid overflow-y-auto grid-cols-[0fr,1fr] grid-rows-1 gap-x-0 gap-y-0">
      <AdminNavbar />
      <div className=" m-2 ml-0 rounded-xl bg-primary">{children}</div>
    </div>
  )
}
