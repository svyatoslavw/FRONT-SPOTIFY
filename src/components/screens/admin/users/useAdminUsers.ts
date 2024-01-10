import { Query } from '@/__generated__/ggl/graphql'
import { DELETE_USER } from '@/api/graphql/mutations/DeleteUser'
import { GET_ALL_USERS } from '@/api/graphql/queries/GetAllUsers'
import { ADMIN_URL } from '@/config/url.config'
import { useMutation, useQuery } from '@apollo/client'
import toast from 'react-hot-toast'

export const useAdminUsers = () => {
  const { data, loading, refetch } = useQuery<Query>(GET_ALL_USERS, {})

  const users = data?.getAllUsers.map((user) => {
    return {
      id: user.id,
      viewUrl: `/users/${user.login}`,
      editUrl: ADMIN_URL.root(`users/edit/${user.id}`),
      items: [user.image, user.email, user.name, user.role],
    }
  })
  const [deleteUser] = useMutation(DELETE_USER, {})

  const onDelete = async (id: number) => {
    try {
      await deleteUser({
        variables: {
          id,
        },
        onCompleted() {
          toast.success('Profile deleted')
          refetch()
        },
      })
    } catch (error) {
      toast.error('Something went wrong!')
      console.log(error)
    }
  }

  //   const { push } = useRouter()

  //   const { mutate: create } = useMutation(['create product'], () => ProductService.create(), {
  //     onSuccess({ data: id }) {
  //       refetch()
  //       push(getAdminUrl(`/products/edit/${id}`))
  //     },
  //   })

  return { users, loading, onDelete }
}
