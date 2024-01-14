import { Playlist, Track } from '@/__generated__/ggl/graphql'
import { FC } from 'react'
import Header from '../../header/Header'
import MainPage from './MainPage'

export interface IHomePage {
  tracks: Track[]
  playlists: Playlist[]
  loading: boolean
}

const HomePage: FC<IHomePage> = ({ tracks, loading, playlists }) => {
  return (
    <main className="overflow-y-auto">
      <Header />
      <MainPage tracks={tracks} loading={loading} playlists={playlists} />
    </main>
  )
}

export default HomePage
