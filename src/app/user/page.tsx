import UserPage from '@/_pages/user/UserPage';
import Layout from '@/shared/ui/layouts/page-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spotify - Svy4tosl0v3',
  description: 'Spotify profile page',
};

export default function User() {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
}
