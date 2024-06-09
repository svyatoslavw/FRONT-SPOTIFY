'use client';

import { Track } from '@/__generated__/ggl/graphql';
import { GET_TRACK_BY_ID } from '@/shared/api/graphql/queries/GetTrackById';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const useTrackUrl = (track: Track | undefined) => {
  const [trackUrl, setTrackUrl] = useState<string>('');

  const { data: trackData, loading } = useQuery(GET_TRACK_BY_ID, {
    variables: {
      id: track ? track.id : null,
    },
    skip: !track,
  });
  useEffect(() => {
    if (trackData && !loading && trackData?.getTrackById) {
      const { file } = trackData?.getTrackById;
      setTrackUrl(file || '');
    }
  }, [trackData?.getTrackById]);

  return trackUrl;
};

export default useTrackUrl;
