import Layout from '@/app/page-layout'
import UserPage from '@/components/screens/user/UserPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify - Svy4tosl0v3',
  description: 'Spotify profile page',
}

export default function User() {
  return (
    <Layout>
      <UserPage />
    </Layout>
  )
}
