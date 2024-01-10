import { Heart } from 'lucide-react'
import Link from 'next/link'
import styles from '../Navbar.module.scss'

const FavoriteTracks = () => {
  return (
    <Link key={2} href="/favorites" className={styles.track}>
      <div className="flex gap-2 items-center">
        <Heart
          size={45}
          className="rounded-lg p-3.5 bg-purple"
          style={{
            background:
              'linear-gradient(to left top, rgb(233, 213, 255), rgb(140,131,228), rgb(109,82,234))',
          }}
          color="white"
          fill="white"
          strokeWidth={1}
        />
        <p className="text-sm">Favorite tracks</p>
      </div>
    </Link>
  )
}

export default FavoriteTracks
