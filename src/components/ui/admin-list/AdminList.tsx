'use client'
import { FC } from 'react'
import ProgressBar from '../progress-bar/ProgressBar'
import AdminListItem from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminList {
  listItems?: IListItem[]
  isLoading: boolean
  removeHandler?: (id: number) => void
  text: string
  create?: () => void
}

const AdminList: FC<IAdminList> = ({ listItems = [], isLoading, create, removeHandler, text }) => {
  return (
    <>
      {isLoading ? (
        <tr className={'flex w-full'}>
          <td className="flex w-[100vw] py-2">
            <ProgressBar />
          </td>
        </tr>
      ) : listItems.length ? (
        <>
          {listItems.map((listItem) => (
            <AdminListItem
              key={listItem.id}
              listItem={listItem}
              removeHandler={removeHandler ? () => removeHandler(listItem.id) : undefined}
            />
          ))}
        </>
      ) : (
        <tr className={'flex w-full'}>
          <td className="flex w-[100vw] py-2">
            <ProgressBar />
          </td>
        </tr>
      )}
    </>
  )
}

export default AdminList
