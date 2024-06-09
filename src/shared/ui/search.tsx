import useFilterStore from '@/entities/filter/models/filterStore';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Input } from './input';

const Search: FC<{ size?: string }> = ({ size }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { push } = useRouter();
  const { resetFilterUpdate, updateQueryParam } = useFilterStore();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      updateQueryParam('searchTerm', '');
    } else {
      updateQueryParam('searchTerm', searchTerm);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {size === 'bg' && (
        <h1 className="text-lg font-semibold pl-1 mb-3">
          Let's add something to the playlist
        </h1>
      )}
      <div className="flex relative overflow-hidden items-center justify-start h-8 w-full">
        <Input
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Type to search..."
          className="dark bg-custom w-60 focus-visible:ring-0 pl-10 ring-0 outline-none"
        />
        <SearchIcon
          onClick={handleSearch}
          size="20"
          className="absolute left-3 cursor-pointer duration-200 text-white/50 hover:text-white"
        />
      </div>
    </>
  );
};

export default Search;
