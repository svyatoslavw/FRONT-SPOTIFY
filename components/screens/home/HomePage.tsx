'use client'

import { FC } from 'react'
import Header from '../../header/Header'

// interface IHomePage {
//   tracks: ITrack[]
// }<IHomePage>

const HomePage: FC = () => {
  return (
    <div className="m-2 ml-0 h-[98.2%] bg-gradient-custom rounded-xl">
      <Header />
      <div className="h-full w-full"></div>
    </div>
  )
}

export default HomePage
