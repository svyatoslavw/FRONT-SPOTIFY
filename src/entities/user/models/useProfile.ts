import { User } from '@/__generated__/ggl/graphql';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { useQuery } from '@apollo/client';
import { useAuth } from './useAuth';

export const useProfile = () => {
  const { user } = useAuth();
  if (!user) return { profile: null };
  const {
    data,
    loading,
    error,
    refetch: refetchProfile,
    client,
  } = useQuery(GET_PROFILE, {
    variables: { id: user.id },
    fetchPolicy: 'cache-and-network',
  });

  return {
    profile: data?.getProfile as User,
    loading,
    error,
    refetchProfile,
    client,
  };
};
