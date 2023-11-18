'use client'

import { TrackService } from '@/services/track/track.service'
import { ITrack } from '@/utils/types/track.types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const useTrackUrl = (track: ITrack) => {
  const [trackUrl, setTrackUrl] = useState<string>('')
  const { data } = useQuery({
    queryKey: ['track file'],
    queryFn: () => {
      if (track) {
        TrackService.byId(track.id).then(({ data }) => {
          setTrackUrl(data?.file || '')
        })
      }
    },
    enabled: !!track,
  })

  return trackUrl
}

export default useTrackUrl
