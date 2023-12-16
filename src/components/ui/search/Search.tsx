import { useActions } from '@/hooks/useActions'
import { Input } from '@nextui-org/react'
import clsx from 'clsx'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

const Search: FC<{ size?: string }> = ({ size }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { push } = useRouter()
  const { resetFilterUpdate, updateQueryParam } = useActions()

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      updateQueryParam({ key: 'searchTerm', value: '' })
    } else {
      updateQueryParam({ key: 'searchTerm', value: searchTerm })
    }
  }
  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    if (newSearchTerm.trim() === '') {
      updateQueryParam({ key: 'searchTerm', value: '' })
      resetFilterUpdate()
    } else {
      updateQueryParam({ key: 'searchTerm', value: newSearchTerm })
    }
  }

  return (
    <>
      {size === 'bg' && (
        <h1 className="text-lg font-semibold pl-1 mb-3">Let's add something to the playlist</h1>
      )}
      <div
        className={clsx('flex items-center justify-center w-full h-8', {
          ['flex w-full items-center justify-center h-[48px]']: size === 'bg',
        })}
      >
        <Input
          value={searchTerm}
          onChange={handlChange}
          radius="lg"
          classNames={{
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'w-[300px]',
              'h-[40px]',
              'shadow-md',
              'bg-default-200/20',
              'dark:bg-default-200/20',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-primary',
              'dark:hover:bg-primary',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon
              size="20"
              className=" dark:text-white/90 text-white/50 pointer-events-none flex-shrink-0"
            />
          }
        />
        {/* <button
          onClick={handleSearch}
          className={
            'bg-[#242424] px-3 rounded-s-2xl border-primary border-2 border-r-0 hover:bg-gray/50 cursor-pointer transition-colors duration-300 text-white flex items-center justify-center'
          }
        >
          <span>
            <ImSearch size={16} className="font-bold text-gray" />
          </span>
        </button>
        
         <input
          value={searchTerm}
          onChange={handlChange}
          className={clsx(
            'bg-[#242424] w-64 h-8 rounded-e-2xl text-xs px-4 text-white outline-none border-2 border-l-0 border-primary focus:border-white',
            {
              ['bg-[#242424] h-[48px] w-1/3 rounded-e-2xl  text-[1rem] px-4 text-white outline-none border-primary border-2 border-l-0 focus:border-white']:
                size === 'bg',
            },
          )}
          placeholder="Search..."
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
        /> */}
      </div>
    </>
  )
}

export default Search
