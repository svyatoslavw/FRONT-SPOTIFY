import { Track } from '@/__generated__/ggl/graphql'
import usePlay from '@/hooks/usePlay'
import { FC } from 'react'
import TrackItem from '../home/TrackItem'

const SearchedTracks: FC<{ tracks: Track[] }> = ({ tracks }) => {
  //@ts-ignore
  const play = usePlay(tracks)
  return (
    <>{tracks && tracks.map((track) => <TrackItem key={track.id} track={track} play={play} />)}</>
  )
}

export default SearchedTracks
