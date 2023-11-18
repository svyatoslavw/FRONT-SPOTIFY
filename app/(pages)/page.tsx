import HomePage from '@/components/screens/home/HomePage'
import { TrackService } from '@/services/track/track.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify home page',
}

async function getTracks() {
  const data = await TrackService.getAll()

  return data.data
}

export default async function Home() {
  const tracks = await getTracks()
  return <HomePage tracks={tracks} />
}
