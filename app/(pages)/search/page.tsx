import Layout from '@/app/page-layout'
import SearchPage from '@/components/screens/search/SearchPage'
import { TypeParamsFilters, TypeSearchDataFilters } from '@/services/search/search,types'
import { SearchService } from '@/services/search/search.service'

async function getTracks(searchParams: TypeSearchDataFilters) {
  const data = await SearchService.getAll(searchParams)

  return data
}

export default async function Search({ searchParams }: TypeParamsFilters) {
  const data = await getTracks(searchParams)
  return (
    <Layout>
      <SearchPage initialTracks={data} />
    </Layout>
  )
}
