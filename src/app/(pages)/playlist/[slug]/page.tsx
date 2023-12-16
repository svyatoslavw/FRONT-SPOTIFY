import { Playlist } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.interceptor'
import { GET_ALL_PLAYLISTS } from '@/api/graphql/queries/GetAllPlaylists'
import { GET_PLAYLIST_BY_SLUG } from '@/api/graphql/queries/GetPlaylistBySlug'
import { GET_ALL_TRACKS } from '@/api/graphql/queries/GetTracks'
import Layout from '@/components/layouts/page-layout'
import PlaylistSlugPage from '@/components/screens/playlist/PlaylistSlugPage'
import { TypeSearchDataFilters } from '@/services/search/search,types'
import { IPagePlaylistSlug, TypeParamPlaylistSlug } from '@/types/playlist-param'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({ params }: IPagePlaylistSlug): Promise<Metadata> {
  const data = await getPlaylist(params)

  return {
    title: `${data.name} | Spotify`,
    description: `description about ${data.name}`,
  }
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_PLAYLISTS,
  })

  const paths = data?.getAllPlaylist.map((playlist: Playlist) => {
    return {
      params: { slug: playlist.slug },
    }
  })

  return paths
}

// async function getTracks(searchParams: TypeSearchDataFilters) {
//   const data = await SearchService.getAll(searchParams)

//   return data
// }

async function getTracks(searchParams: TypeSearchDataFilters) {
  const { searchTerm, categoryId } = searchParams

  const { data } = await client.query({
    query: GET_ALL_TRACKS,
    variables: { searchTerm, categoryId },
  })

  return data?.getAllTracks
}

async function getPlaylist(params: TypeParamPlaylistSlug) {
  const { slug } = params || {}

  const { data } = await client.query({
    query: GET_PLAYLIST_BY_SLUG,
    variables: { slug },
  })

  return data?.getPlaylistBySlug
}
export default async function PlaylistSlug({ params, searchParams }: IPagePlaylistSlug) {
  const playlist = await getPlaylist(params)
  const data = await getTracks(searchParams)

  return (
    <Layout>
      <PlaylistSlugPage playlist={playlist} initialTracks={data} />
    </Layout>
  )
}
