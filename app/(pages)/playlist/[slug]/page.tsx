import PlaylistSlugPage from '@/components/screens/playlist/PlaylistSlugPage'
import { PlaylistService } from '@/services/playlist/playlist.service'
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
  const { data } = await PlaylistService.getAll()

  const paths = data.map((playlist) => {
    return {
      params: { slug: playlist.slug },
    }
  })

  return paths
}

async function getPlaylist(params: TypeParamPlaylistSlug) {
  const { data: playlist } = await PlaylistService.bySlug(params?.slug as string)

  return playlist
}
export default async function PlaylistSlug({ params }: IPagePlaylistSlug) {
  const playlist = await getPlaylist(params)

  return <PlaylistSlugPage playlist={playlist} />
}
