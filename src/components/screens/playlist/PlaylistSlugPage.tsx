'use client'
import { GET_SEARCH_QUERY } from '@/api/graphql/queries/GetSearchQuery'
import Header from '@/components/header/Header'
import Search from '@/components/ui/search/Search'
import { useFilter } from '@/hooks/useFilters'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { ISearchData } from '@/services/search/search,types'
import { IPlaylist } from '@/types/playlist.types'
import { ITrack } from '@/types/track.types'
import { useQuery } from '@apollo/client'
import { average } from 'color.js'
import { FC, useEffect, useState } from 'react'
import PlaylistButtons from './PlaylistButtons'
import PlaylistItem from './PlaylistItem'
import PlaylistHeader from './playlist-header/PlaylistHeader'
import PlaylistSearchPage from './playlist-search/PlaylistSearchPage'

interface ISlugPage {
  playlist: IPlaylist
  initialTracks: ISearchData
}

const PlaylistSlugPage: FC<ISlugPage> = ({ playlist, initialTracks }) => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    if (playlist) {
      average(playlist.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          console.error('Error calculating color:', error)
        })
    }
  }, [playlist])

  const [isHovered, setIsHovered] = useState<number | null>(null)
  const onPlay = usePlay(playlist.tracks)
  const openHover = (index: number) => setIsHovered(index)
  const closeHover = () => setIsHovered(null)

  const { profile } = useProfile()

  const { isFilterUpdated, queryParams } = useFilter()

  const { data, loading, refetch } = useQuery(GET_SEARCH_QUERY, {
    variables: { searchTerm: queryParams.searchTerm },
    skip: !isFilterUpdated,
    fetchPolicy: 'cache-and-network',
  })

  if (!profile) return
  const profileId = profile.id
  const isFavorite =
    profile.favorites && profile.favorites.some((favorite) => favorite.playlist.id === +playlist.id)
  return (
    <div>
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
        <PlaylistButtons profileId={profileId} isFavorite={isFavorite} playlist={playlist} />
        <div className="px-10">
          {playlist && playlist.tracks.length ? (
            playlist.tracks.map((track: ITrack, index) => (
              <PlaylistItem
                openHover={() => openHover(index)}
                closeHover={closeHover}
                track={track}
                onPlay={() => onPlay(track.id)}
                index={index}
                isHovered={isHovered}
              />
            ))
          ) : (
            <div>
              <div className="bg-gray/30 h-[2px] w-full my-8"></div>
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
  )
}

export default PlaylistSlugPage
