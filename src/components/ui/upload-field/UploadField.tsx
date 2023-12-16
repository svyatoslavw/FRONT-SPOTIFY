import clsx from 'clsx'
import { FC } from 'react'
import { IoImageOutline } from 'react-icons/io5'
import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({ value, onChange, defaultValue }) => {
  const { uploadFile } = useUploadFile(onChange)
  return (
    <div className={styles.file}>
      <h1 className={clsx(styles.h1, 'text-sm flex items-center ml-2 px-2')}>
        {<IoImageOutline size={18} color="white" className="mr-1.5" />}
        Choose File
      </h1>
      <div className="w-full h-full z-50 mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {value ? (
          <img src={value} alt="" width={140} height={140} className="object-cover" />
        ) : (
          <img src={defaultValue} alt="" width={140} height={140} className="object-cover" />
        )}
      </div>
      <label>
        <span className="sr-only block">Choose File</span>
        <input type="file" onChange={uploadFile} className={clsx(styles.input)} />
      </label>
    </div>
  )
}

export default UploadField
