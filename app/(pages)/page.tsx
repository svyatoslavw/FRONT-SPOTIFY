import HomePage from '@/components/screens/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify home page',
}

export default function Home() {
  return <HomePage />
}
