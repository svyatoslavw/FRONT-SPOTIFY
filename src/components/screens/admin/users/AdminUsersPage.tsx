'use client'
import AdminList from '@/components/ui/admin-list/AdminList'
import { useAdminUsers } from './useAdminUsers'

const AdminUsersPage = () => {
  const { users, onDelete } = useAdminUsers()

  console.log(users)

  return (
    <div>
      <table className="min-w-full text-left text-sm font-light text-white">
        <thead className="border-2 border-b-0 border-secondary text-black font-bold bg-secondary">
          <tr>
            <th scope="col" className="px-6 py-4 text-xl ">
              ###
            </th>
            <th scope="col" className="px-6 py-4 text-xl ">
              Email
            </th>
            <th scope="col" className="px-6 py-4 text-xl ">
              Name
            </th>
            <th scope="col" className="px-6 py-4 text-xl ">
              Role
            </th>
            <th scope="col" className="px-6 py-4 text-xl text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <AdminList
            text="Products"
            isLoading={false}
            create={() => {}}
            listItems={users}
            removeHandler={onDelete}
          />
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsersPage
