import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import { IUser } from '@/types/user.types'
import { useQuery } from '@apollo/client'
import { useAuth } from './useAuth'

export const useProfile = () => {
  const { user } = useAuth()
  if (!user) return { profile: null }
  const {
    data,
    loading,
    error,
    refetch: refetchProfile,
    client,
  } = useQuery(GET_PROFILE, {
    variables: { id: user.id },
    fetchPolicy: 'cache-and-network',
  })

  return { profile: data?.getProfile as IUser, loading, error, refetchProfile, client }
}
