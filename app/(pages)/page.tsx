import HomePage from '@/components/screens/home/HomePage'
import { Metadata } from 'next'
import Layout from '../page-layout'

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify home page',
}

// async function getTracks() {
//   const data = await TrackService.getHome()

//   return data.data
// }

// async function getPlaylists() {
//   const data = await PlaylistService.getAll()

//   return data.data
// }
export default async function Home() {
  //const tracks = await getTracks()
  //const playlists = await getPlaylists()
  //const { data, loading } = useQuery(GET_ALL_USERS, {})

  return (
    <Layout>
      <HomePage data={[]} tracks={[]} playlists={[]} />
    </Layout>
  )
}
