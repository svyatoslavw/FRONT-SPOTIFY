'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-5 flex flex-col py-5 gap-3 w-full h-full justify-center items-center">
      <Image src={'/logo.png'} alt="logo" width={80} height={80} />
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
