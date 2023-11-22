import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import { ImCross, ImSearch } from 'react-icons/im'

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { push } = useRouter()
  const { resetFilterUpdate, updateQueryParam } = useActions()

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      resetFilterUpdate()
    } else {
      push(`/search`)
      updateQueryParam({ key: 'searchTerm', value: searchTerm })
    }
  }
  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    if (newSearchTerm.trim() === '') {
      resetFilterUpdate()
    } else {
      updateQueryParam({ key: 'searchTerm', value: newSearchTerm })
    }
  }

  const handleClear = () => {
    setSearchTerm('')
    updateQueryParam({ key: 'searchTerm', value: '' })
    resetFilterUpdate()
  }

  return (
    <div>
      <div
        className="grid w-full rounded-3xl overflow-hidden"
        style={{ gridTemplateColumns: '0.15fr 1fr 0.1fr' }}
      >
        <button
          onClick={handleSearch}
          className={
            'bg-[#242424] hover:bg-gray-200 border-none cursor-pointer transition-colors duration-300 text-white flex items-center justify-center'
          }
        >
          <span>
            <ImSearch size={16} className="font-bold text-gray" />
          </span>
        </button>
        <input
          value={searchTerm}
          onChange={handlChange}
          className="bg-[#242424]  w-64  border-none text-xs px-4 text-white outline-none"
          placeholder="Search..."
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
        />

        <button
          onClick={handleClear}
          className="bg-[#242424] border-none cursor-pointer text-white hover:bg-red-600 hover:bg-opacity-40 transition-colors duration-300 hover:text-white flex  items-center justify-center p-2.5" // Стили для кнопки сброса
        >
          <span>
            <ImCross size={12} className="font-bold opacity-40 text-black" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Search
