import Image from 'next/image'
import { FC } from 'react'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem }) => {
  return (
    <tr className="border-2 border-t-0 border-neutral-800 hover:bg-neutral-800 transition-background">
      {listItem.items &&
        listItem.items.map((value, index) => (
          <td key={value} className="whitespace-nowrap px-4 py-2 font-normal text-sm ">
            {index === 0 ? (
              <Image
                src={value}
                alt="image"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
            ) : (
              value
            )}
          </td>
        ))}
      <td className="whitespace-nowrap px-4 py-2 justify-center items-center flex">
        <AdminActions
          editUrl={listItem.editUrl}
          viewUrl={listItem.viewUrl}
          removeHandler={removeHandler}
        />
      </td>
    </tr>
  )
}

export default AdminListItem
