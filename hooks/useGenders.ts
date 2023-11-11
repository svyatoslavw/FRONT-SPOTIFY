import { GenderService } from '@/services/gender/gender.service'
import { useQuery } from '@tanstack/react-query'

export const useGenders = () => {
  const { data, isLoading } = useQuery(['get genders'], () => GenderService.getAll(), {
    select: ({ data }) => data,
  })

  return { data, isLoading }
}
