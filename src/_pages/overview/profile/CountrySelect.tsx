import { countries } from '@/shared/lib/constants/country.constant';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { FlagIcon } from 'lucide-react';
import { FC, useState } from 'react';
('absolute z-[1] -mt-3 text-sm justify-center flex items-center ml-2 px-2');

const CountrySelect: FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="dark bg-[#1e1e1e]">
      <span className="absolute z-[1] -mt-6 text-sm justify-center flex items-center ml-2 px-2">
        <FlagIcon size={18} className="mr-1.5" />
        Country
      </span>
      <Select onValueChange={(value) => setValue(value)}>
        <SelectTrigger className="bg-[#1e1e1e]">
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent className="dark bg-[#1e1e1e]">
          {countries.map((country) => (
            <SelectItem value={country.code}>{country.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelect;
