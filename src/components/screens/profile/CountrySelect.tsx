import { countries } from '@/constants/country.constant'
import { Select, SelectItem } from '@nextui-org/react'
import { FlagIcon } from 'lucide-react'
import { FC } from 'react'

const CountrySelect: FC = () => {
  return (
    <div>
      <span className={'absolute z-[1] -mt-3 text-sm justify-center flex items-center ml-2 px-2'}>
        <FlagIcon size={18} color="white" className="mr-1.5" />
        Select country
      </span>
      <Select
        items={countries}
        data-hover={false}
        size="sm"
        classNames={{
          mainWrapper: 'py-3',
          trigger:
            'bg-[#1e1e1e] border-2 text-sm border-gray focus:border-white hover:bg-[#1e1e1e] hover:opacity-1 data-hover=false',
          listboxWrapper: 'bg-primary',
        }}
        label="Country"
      >
        {(country) => <SelectItem key={country.code}>{country.name}</SelectItem>}
      </Select>
    </div>
  )
}

export default CountrySelect
