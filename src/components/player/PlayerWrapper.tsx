'use client'
import { GET_TRACK_BY_ID } from '@/api/graphql/queries/GetTrackById'
import useTrackUrl from '@/hooks/useTrackUrl'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useQuery } from '@apollo/client'
import { FC } from 'react'
import Player from './Player'

const PlayerWrapper: FC = () => {
  const { activeId } = useTypedSelector((state) => state.player)
  const { data: track, loading } = useQuery(GET_TRACK_BY_ID, {
    variables: {
      id: activeId ? activeId : null,
    },
    skip: !activeId,
  })

  const trackUrl = useTrackUrl(track?.getTrackById)
  if (!track?.getTrackById || !trackUrl || !activeId) {
    return null
  }
  return (
    <Player
      activeId={activeId}
      key={track?.getTrackById?.file}
      track={track?.getTrackById}
      trackUrl={track?.getTrackById?.file}
    />
  )
}

export default PlayerWrapper
