import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'

export const useProfile = () => {
  const { user } = useAuth()

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => UserService.getProfile(),
    select: ({ data }) => data,
    enabled: !!user,
    throwOnError: true,
  })

  return { profile: data }
}
