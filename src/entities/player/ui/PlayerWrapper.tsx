'use client';
import { Query } from '@/__generated__/ggl/graphql';
import usePlayer from '@/entities/player/models/playerStore';
import useTrackUrl from '@/entities/player/models/useTrackUrl';
import { GET_TRACK_BY_ID } from '@/shared/api/graphql/queries/GetTrackById';
import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { Player } from './Player';

const PlayerWrapper: FC = () => {
  const { activeId } = usePlayer();
  const { data: track } = useQuery<Query>(GET_TRACK_BY_ID, {
    variables: {
      id: activeId || null,
    },
    skip: !activeId,
  });

  const trackUrl = useTrackUrl(track?.getTrackById);
  if (!track?.getTrackById || !trackUrl || !activeId) {
    return null;
  }
  return (
    <Player
      activeId={activeId}
      key={track?.getTrackById?.file}
      track={track?.getTrackById}
      trackUrl={track?.getTrackById?.file}
    />
  );
};

export { PlayerWrapper };
