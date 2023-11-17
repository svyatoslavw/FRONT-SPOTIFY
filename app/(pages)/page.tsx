import HomePage from '@/components/screens/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify home page',
}

// async function getTracks() {
//   const data = await TrackService.byNews()

//   return data.data
// }
//const tracks = await getTracks()

export default async function Home() {
  return <HomePage />
}
