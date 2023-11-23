import { useActions } from '@/hooks/useActions'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import { ImSearch } from 'react-icons/im'

const Search: FC<{ size?: string }> = ({ size }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { push } = useRouter()
  const { resetFilterUpdate, updateQueryParam } = useActions()

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      updateQueryParam({ key: 'searchTerm', value: '' })
    } else {
      push(`/search`)
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
        className={clsx('flex w-full h-8', {
          ['flex w-full h-[48px]']: size === 'bg',
        })}
      >
        <button
          onClick={handleSearch}
          className={
            'bg-[#242424] px-3 rounded-s-2xl hover:bg-gray/50 border-none cursor-pointer transition-colors duration-300 text-white flex items-center justify-center'
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
            'bg-[#242424] w-64 h-8 rounded-e-2xl border-none text-xs px-4 text-white outline-none',
            {
              ['bg-[#242424] h-[48px] w-1/3 rounded-e-2xl border-none text-[1rem] px-4 text-white outline-none']:
                size === 'bg',
            },
          )}
          placeholder="Search..."
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
        />
      </div>
    </>
  )
}

export default Search
