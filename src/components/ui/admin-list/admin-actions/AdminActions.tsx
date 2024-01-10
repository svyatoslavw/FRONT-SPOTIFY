import { useDisclosure } from '@nextui-org/react'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { IListItem } from '../admin-list.interface'
import DeleteModal from '../delete-items/DeleteModal'
import styles from './AdminActions.module.scss'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
  removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, viewUrl, removeHandler }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { push } = useRouter()

  const [isModal, setIsModal] = useState(false)

  return (
    <div className={styles.actions}>
      {viewUrl && (
        <Eye size={30} color="black" className={styles.view} onClick={() => push(viewUrl)} />
      )}
      {editUrl && (
        <Pencil size={30} color="black" className={styles.edit} onClick={() => push(editUrl)} />
      )}
      {removeHandler && (
        <>
          <Trash2 size={30} color="black" className={styles.delete} onClick={onOpen} />

          <DeleteModal
            onOpen={onOpen}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            removeHandler={removeHandler}
          />
        </>
      )}
    </div>
  )
}

export default AdminActions
