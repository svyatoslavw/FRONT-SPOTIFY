import { Playlist } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.config'
import { GET_ALL_PLAYLISTS } from '@/api/graphql/queries/GetAllPlaylists'
import { GET_PLAYLIST_BY_SLUG } from '@/api/graphql/queries/GetPlaylistBySlug'
import Layout from '@/components/layouts/page-layout'
import PlaylistSlugPage from '@/components/screens/playlist/PlaylistSlugPage'
import { IPagePlaylistSlug, TypeParamPlaylistSlug } from '@/types/playlist-param'
import { Metadata } from 'next'

export const revalidate = 5

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
    fetchPolicy: 'network-only',
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  })

  const paths = data.getAllPlaylist.map((playlist: Playlist) => {
    return {
      params: { slug: playlist.slug },
    }
  })

  return paths
}

async function getPlaylist(params: TypeParamPlaylistSlug, time?: number) {
  const { slug } = params || {}

  const { data } = await client.query({
    query: GET_PLAYLIST_BY_SLUG,
    fetchPolicy: 'network-only',
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
    variables: { slug },
  })

  // await client.writeQuery({
  //   query: GET_PLAYLIST_BY_SLUG,
  //   variables: { slug: data?.getPlaylistBySlug.slug },
  //   data: {
  //     getPlaylistBySlug: {
  //       ...data?.getPlaylistBySlug,
  //       name: data?.getPlaylistBySlug.name,
  //       // Добавьте другие обновленные поля сюда в соответствии с вашими данными плейлиста
  //     },
  //   },
  // })

  return data?.getPlaylistBySlug
}

export default async function PlaylistSlug({ params }: IPagePlaylistSlug) {
  const playlist = await getPlaylist(params)

  return (
    <Layout>
      <PlaylistSlugPage playlist={playlist} />
    </Layout>
  )
}
