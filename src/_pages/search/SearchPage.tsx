'use client';
import { useFilter } from '@/entities/filter/models/useFilters';
import { GET_SEARCH_QUERY } from '@/shared/api/graphql/queries/GetSearchQuery';
import { ISearchData } from '@/shared/lib/types';
import { SearchedAlbums } from '@/widgets/AlbumList';
import { Header } from '@/widgets/Header';
import { SearchedTracks } from '@/widgets/TrackList';
import { useQuery } from '@apollo/client';
import { LoaderIcon } from 'lucide-react';
import { FC } from 'react';

interface IPage {
  initialTracks: ISearchData;
}

const SearchPage: FC<IPage> = ({ initialTracks }) => {
  const { isFilterUpdated, queryParams } = useFilter();

  const { data, loading } = useQuery(GET_SEARCH_QUERY, {
    variables: {
      searchTerm: queryParams.searchTerm,
    },
    skip: !isFilterUpdated,
    fetchPolicy: 'cache-and-network',
  });
  return (
    <section className="overflow-y-auto">
      <Header />
      <div className="px-3">
        {loading ? (
          <div className="h-20 flex w-full justify-center">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : queryParams.searchTerm ? (
          <div className="grid max-h-[85.6vh] grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            <SearchedTracks tracks={data?.getSearchQuery.tracks} />
            <SearchedAlbums albums={data?.getSearchQuery.albums} />
          </div>
        ) : (
          <div className="h-20 border mt-4 border-zinc-700 text-xl font-medium flex w-full items-center justify-center">
            What song do you want to play?
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
