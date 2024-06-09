'use client';
import { Playlist, Track } from '@/__generated__/ggl/graphql';
import { useFilter } from '@/entities/filter/models/useFilters';
import usePlay from '@/entities/player/models/usePlay';
import { useProfile } from '@/entities/user/models/useProfile';
import { GET_SEARCH_QUERY } from '@/shared/api/graphql/queries/GetSearchQuery';
import Search from '@/shared/ui/search';
import { Header } from '@/widgets/Header';
import { useQuery } from '@apollo/client';
import { Divider } from '@nextui-org/react';
import { average } from 'color.js';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PlaylistItem from './PlaylistItem';
import { PlaylistButtons } from './playlist-header/PlaylistButtons';
import PlaylistHeader from './playlist-header/PlaylistHeader';
import PlaylistSearchPage from './playlist-search/PlaylistSearchPage';

interface ISlugPage {
  playlist: Playlist;
}

const PlaylistSlugPage: FC<ISlugPage> = ({ playlist }) => {
  const [color, setColor] = useState<string>('');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const { isFilterUpdated, queryParams } = useFilter();

  const onPlay = usePlay(playlist.tracks);

  useEffect(() => {
    if (playlist) {
      average(playlist.image)
        .then((result: any) => {
          setColor(result);
        })
        .catch((error) => {
          toast.error('Error calculating color');
        });
    }
  }, [playlist]);

  const openHover = (index: number) => setIsHovered(index);
  const closeHover = () => setIsHovered(null);

  const { profile } = useProfile();

  const { data, loading } = useQuery(GET_SEARCH_QUERY, {
    variables: { searchTerm: queryParams.searchTerm },
    skip: !isFilterUpdated,
    fetchPolicy: 'cache-and-network',
  });

  if (!profile) return;

  const isFavorite =
    profile.favorites &&
    profile.favorites.some((favorite) => favorite.playlist.id === +playlist.id);
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {playlist && <PlaylistHeader playlist={playlist} />}
      </div>

      <div className="w-full">
        <PlaylistButtons
          isFavorite={isFavorite}
          playlist={playlist}
          profile={profile}
        />
        <div className="px-10 h-[300px]">
          {playlist && playlist?.tracks?.length ? (
            playlist?.tracks?.map((track: Track, index) => (
              <PlaylistItem
                key={index}
                openHover={() => openHover(index)}
                closeHover={closeHover}
                track={track}
                onPlay={() => onPlay(track.id)}
                index={index}
                isHovered={isHovered}
                profile={profile}
              />
            ))
          ) : (
            <div>
              <Divider
                orientation="horizontal"
                className="bg-gray/30 h-[2px] my-4"
              />
              <Search size="bg" />
              <PlaylistSearchPage
                albums={data?.getSearchQuery.albums || []}
                tracks={data?.getSearchQuery.tracks || []}
                isLoading={loading}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSlugPage;
