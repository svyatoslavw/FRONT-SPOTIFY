import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'NotFound',
}

export default function NotFoundCatchAll() {
  notFound()
  return null
}
