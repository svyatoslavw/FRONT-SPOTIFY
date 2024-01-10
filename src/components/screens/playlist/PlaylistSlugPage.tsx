'use client'
import { GET_SEARCH_QUERY } from '@/api/graphql/queries/GetSearchQuery'
import Header from '@/components/header/Header'
import Search from '@/components/ui/search/Search'
import { useFilter } from '@/hooks/useFilters'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { IPlaylist } from '@/types/playlist.types'
import { ITrack } from '@/types/track.types'
import { IUser } from '@/types/user.types'
import { useQuery } from '@apollo/client'
import { Divider, useDisclosure } from '@nextui-org/react'
import { average } from 'color.js'
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import EditPlaylistModal from './EditPlaylistModal'
import PlaylistItem from './PlaylistItem'
import styles from './PlaylistSlug.module.scss'
import PlaylistButtons from './playlist-header/PlaylistButtons'
import PlaylistHeader from './playlist-header/PlaylistHeader'
import PlaylistSearchPage from './playlist-search/PlaylistSearchPage'

interface ISlugPage {
  playlist: IPlaylist
}

const PlaylistSlugPage: FC<ISlugPage> = ({ playlist }) => {
  const [color, setColor] = useState<string>('')
  const [isHovered, setIsHovered] = useState<number | null>(null)

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { isFilterUpdated, queryParams } = useFilter()
  const onPlay = usePlay(playlist.tracks)

  useEffect(() => {
    if (playlist) {
      average(playlist.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          toast.error('Error calculating color')
        })
    }
  }, [playlist])

  const openHover = (index: number) => setIsHovered(index)
  const closeHover = () => setIsHovered(null)

  const { profile } = useProfile()

  const { data, loading } = useQuery(GET_SEARCH_QUERY, {
    variables: { searchTerm: queryParams.searchTerm },
    skip: !isFilterUpdated,
    fetchPolicy: 'cache-and-network',
  })

  if (!profile) return

  const isFavorite =
    profile.favorites && profile.favorites.some((favorite) => favorite.playlist.id === +playlist.id)
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
          }}
          className={styles.container__header}
        >
          <Header />
          {playlist && <PlaylistHeader playlist={playlist} />}
        </div>

        <div className="w-full">
          <PlaylistButtons
            isFavorite={isFavorite}
            playlist={playlist}
            profile={profile}
            onOpen={onOpen}
          />
          <div className="px-10 h-[300px]">
            {playlist && playlist.tracks.length !== 0 ? (
              playlist.tracks.map((track: ITrack, index) => (
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
                <Divider orientation="horizontal" className={styles.container__divider} />
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
      <EditPlaylistModal
        profile={profile as IUser}
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        playlist={playlist}
      />
    </>
  )
}

export default PlaylistSlugPage
