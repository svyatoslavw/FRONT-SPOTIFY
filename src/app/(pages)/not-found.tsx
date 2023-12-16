'use client'
import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="px-5 flex flex-col gap-3 w-full h-full justify-center items-center">
      <FaSpotify color="#1ed760" size={80} className="py-2" />
      <h1 className="text-4xl font-bold select-none">Страница не найдена</h1>
      <Link
        href="/"
        className="py-2 px-3 rounded-full hover:scale-105 bg-white text-black transition-all"
      >
        Вернуться на главную
      </Link>
    </div>
  )
}
