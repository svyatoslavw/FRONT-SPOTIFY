'use client';
import { AdminNavbar } from '@/widgets/Navbar/admin/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid overflow-y-auto bg-black grid-cols-[0fr,1fr] grid-rows-1 gap-x-0 gap-y-0">
      <AdminNavbar />
      <div className=" m-2 ml-0 rounded-xl bg-primary">{children}</div>
    </div>
  );
}
