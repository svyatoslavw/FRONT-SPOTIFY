import { client } from '@/api/apollo.config'
import { GET_ALL_PLAYLISTS } from '@/api/graphql/queries/GetAllPlaylists'
import { GET_ALL_TRACKS } from '@/api/graphql/queries/GetTracks'
import Layout from '@/components/layouts/page-layout'
import HomePage from '@/components/screens/home/HomePage'
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME } from '@/config/seo.config'
import { getSiteUrl } from '@/config/url.config'
import { Metadata } from 'next'

export const revalidate = 30

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
  },
  title: {
    absolute: `${SITE_NAME} - Web Player`,
    template: `%s | ${SITE_NAME}`,
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    emails: `example@${SITE_NAME}`,
  },
  metadataBase: new URL(getSiteUrl()),
  applicationName: SITE_NAME,
  creator: CREATOR,
  authors: {
    name: CREATOR,
    url: GITHUB_URL,
  },
  keywords: SITE_KEYWORDS,
}

async function getTracks() {
  const { data, loading } = await client.query({
    query: GET_ALL_TRACKS,
    fetchPolicy: 'network-only',
  })

  return { tracks: data?.getAllTracks, loading }
}

async function getPlaylists() {
  const { data, loading } = await client.query({
    query: GET_ALL_PLAYLISTS,
    fetchPolicy: 'network-only',
  })

  return { playlists: data?.getAllPlaylist, loading }
}

// async function getPlaylists() {
//   const data = await PlaylistService.getAll()

//   return data.data
// }
export default async function Home() {
  const { loading, tracks } = await getTracks()
  const { playlists } = await getPlaylists()
  //const playlists = await getPlaylists()
  //const { data, loading } = useQuery(GET_ALL_USERS, {})

  return (
    <Layout>
      <HomePage tracks={tracks || []} loading={loading} playlists={playlists || []} />
    </Layout>
  )
}
