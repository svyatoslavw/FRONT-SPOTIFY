'use client'
import useTrackUrl from '@/hooks/useTrackUrl'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TrackService } from '@/services/track/track.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import Player from './Player'

const PlayerWrapper: FC = () => {
  const { activeId } = useTypedSelector((state) => state.player)

  const { data: track } = useQuery({
    queryKey: ['track', activeId],
    queryFn: () => TrackService.byId(activeId!),
    select: ({ data }) => data,
    enabled: !!activeId,
  })

  const trackUrl = useTrackUrl(track!)
  if (!track || !trackUrl || !activeId) {
    return null
  }
  return <Player activeId={activeId} key={track?.file} track={track!} trackUrl={track?.file!} />
}

export default PlayerWrapper
