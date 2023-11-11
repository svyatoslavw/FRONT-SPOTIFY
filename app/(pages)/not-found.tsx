'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className=" justify-center items-center">
        <h1 className="text-7xl">404!</h1>
        <Link href="/" className="my-4">
          Вернуться на главную
        </Link>
      </div>
    </>
  )
}
