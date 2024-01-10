import { Track } from '@/__generated__/ggl/graphql'
import { FC } from 'react'
import Header from '../../header/Header'
import MainPage from './MainPage'

export interface IHomePage {
  tracks: Track[]
  loading: boolean
}

const HomePage: FC<IHomePage> = ({ tracks, loading }) => {
  return (
    <main>
      <Header />
      <MainPage tracks={tracks} loading={loading} />
    </main>
  )
}

export default HomePage
