import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import { useQuery } from '@apollo/client'
import { useAuth } from './useAuth'

export const useProfile = () => {
  const { user } = useAuth()
  if (!user) return { profile: null }
  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { id: user.id || 1 }, // Предполагается, что у пользователя есть поле id
  })

  console.log(data?.getProfile)

  return { profile: data?.getProfile as any, loading, error }
}
