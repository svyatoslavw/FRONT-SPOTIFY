'use client'

import { GET_TRACK_BY_ID } from '@/api/graphql/queries/GetTrackById'
import { ITrack } from '@/types/track.types'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const useTrackUrl = (track: ITrack) => {
  const [trackUrl, setTrackUrl] = useState<string>('')

  const { data: trackData, loading } = useQuery(GET_TRACK_BY_ID, {
    variables: {
      id: track ? track.id : null,
    },
    skip: !track,
  })
  useEffect(() => {
    if (trackData && !loading && trackData?.getTrackById) {
      const { file } = trackData?.getTrackById
      setTrackUrl(file || '')
    }
  }, [trackData?.getTrackById])

  return trackUrl
}

export default useTrackUrl
