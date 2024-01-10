import useFilterStore from '@/stores/filterStore'
import { Input } from '@nextui-org/react'
import clsx from 'clsx'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './Search.module.scss'
const Search: FC<{ size?: string }> = ({ size }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { push } = useRouter()
  const { resetFilterUpdate, updateQueryParam } = useFilterStore()

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      updateQueryParam('searchTerm', '')
    } else {
      updateQueryParam('searchTerm', searchTerm)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      {size === 'bg' && (
        <h1 className={styles.search__heading}>Let's add something to the playlist</h1>
      )}
      <div
        className={clsx(styles.search, {
          ['flex w-full items-center justify-center h-[48px]']: size === 'bg',
        })}
      >
        <Input
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          radius="lg"
          classNames={{
            innerWrapper: 'bg-transparent data-hover=false',
            inputWrapper: [
              'w-[300px]',
              'h-[40px]',
              'shadow-md',
              'bg-default-200/20',
              'dark:bg-default-200/20',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60',
              '!cursor-text',
              'data-hover=false',
              'data-focus-visible=false',
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon onClick={handleSearch} size="20" className={styles.search__icon} />
          }
        />
      </div>
    </>
  )
}

export default Search
