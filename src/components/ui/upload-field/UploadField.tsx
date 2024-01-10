import clsx from 'clsx'
import { AudioLines, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({ value, onChange, defaultValue, file }) => {
  const { uploadFile } = useUploadFile(onChange)
  console.log(value)
  return (
    <div className={styles.file}>
      <h1 className={clsx(styles.h1, 'text-sm flex items-center ml-2 px-2')}>
        {<ImageIcon size={18} color="white" className="mr-1.5" />}
        Choose File
      </h1>

      <label className="flex items-center justify-center gap-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {value ? (
          file ? (
            <AudioLines size={118} className="object-cover" />
          ) : (
            <Image src={value} alt="" width={80} height={80} className="object-cover" />
          )
        ) : defaultValue ? (
          <Image src={defaultValue} alt="" width={80} height={80} className="object-cover" />
        ) : (
          <AudioLines size={118} className="object-cover" />
        )}
        <span className="sr-only block">Choose File</span>
        <input type="file" onChange={uploadFile} className={clsx(styles.input)} />
      </label>
    </div>
  )
}

export default UploadField
