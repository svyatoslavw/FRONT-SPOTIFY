import { Track } from '@/__generated__/ggl/graphql';
import TrackSlugPage from '@/_pages/track/TrackSlugPage';
import { client } from '@/shared/api/apollo.config';
import { GET_TRACK_BY_SLUG } from '@/shared/api/graphql/queries/GetTrackBySlug';
import { GET_ALL_TRACKS } from '@/shared/api/graphql/queries/GetTracks';
import Layout from '@/shared/ui/layouts/page-layout';
import {
  IPagePlaylistSlug,
  TypeParamPlaylistSlug,
} from '@/types/playlist-param';
import { Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: IPagePlaylistSlug): Promise<Metadata> {
  const data = await getTrack(params);

  return {
    title: `${data.name} | Spotify`,
    description: `description about ${data.name}`,
  };
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_TRACKS,
  });

  const paths = data?.getAllTracks.map((track: Track) => {
    return {
      params: { slug: track.slug },
    };
  });

  return paths;
}

async function getTrack(params: TypeParamPlaylistSlug) {
  const { slug } = params || {};

  const { data } = await client.query({
    query: GET_TRACK_BY_SLUG,
    variables: { slug },
  });

  return data?.getTrackBySlug;
}

export default async function PlaylistSlug({
  params,
  searchParams,
}: IPagePlaylistSlug) {
  const track = await getTrack(params);

  return (
    <Layout>
      <TrackSlugPage track={track} />
    </Layout>
  );
}
