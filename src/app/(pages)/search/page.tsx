import { client } from '@/api/apollo.config'
import { GET_ALL_TRACKS } from '@/api/graphql/queries/GetTracks'
import Layout from '@/components/layouts/page-layout'
import SearchPage from '@/components/screens/search/SearchPage'
import { TypeParamsFilters, TypeSearchDataFilters } from '@/types/search.types'

async function getTracks(searchParams: TypeSearchDataFilters) {
  const { searchTerm, categoryId } = searchParams

  const { data } = await client.query({
    query: GET_ALL_TRACKS,
    variables: { searchTerm, categoryId },
  })

  return data?.getAllTracks
}

export default async function Search({ searchParams }: TypeParamsFilters) {
  const data = await getTracks(searchParams)
  return (
    <Layout>
      <SearchPage initialTracks={data} />
    </Layout>
  )
}
