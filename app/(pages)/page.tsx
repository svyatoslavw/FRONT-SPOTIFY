import HomePage from '@/components/screens/home/HomePage'
import { PlaylistService } from '@/services/playlist/playlist.service'
import { TrackService } from '@/services/track/track.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify home page',
}

async function getTracks() {
  const data = await TrackService.getHome()

  return data.data
}

async function getPlaylists() {
  const data = await PlaylistService.getAll()

  return data.data
}
export default async function Home() {
  const tracks = await getTracks()
  const playlists = await getPlaylists()
  return <HomePage tracks={tracks} playlists={playlists} />
}
