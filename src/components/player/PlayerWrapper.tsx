'use client'
import { Query } from '@/__generated__/ggl/graphql'
import { GET_TRACK_BY_ID } from '@/api/graphql/queries/GetTrackById'
import useTrackUrl from '@/hooks/useTrackUrl'
import usePlayer from '@/stores/playerStore'
import { useQuery } from '@apollo/client'
import { FC } from 'react'
import Player from './Player'

const PlayerWrapper: FC = () => {
  const { activeId } = usePlayer()
  const { data: track } = useQuery<Query>(GET_TRACK_BY_ID, {
    variables: {
      id: activeId ? activeId : null,
    },
    skip: !activeId,
  })

  //@ts-ignore
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
