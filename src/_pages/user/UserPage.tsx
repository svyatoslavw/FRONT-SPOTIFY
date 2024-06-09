'use client';
import { useProfile } from '@/entities/user/models/useProfile';
import { UserCard } from '@/entities/user/ui/UserCard';
import { Header } from '@/widgets/Header';
import { FC } from 'react';

const UserPage: FC = () => {
  const { profile, loading } = useProfile();

  return (
    <section>
      {profile && !loading && (
        <UserCard profile={profile}>
          <Header />
        </UserCard>
      )}
      <div className="h-full w-full"></div>
    </section>
  );
};

export default UserPage;
