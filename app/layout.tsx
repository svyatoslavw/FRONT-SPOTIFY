'use client'
import Navbar from '@/components/navbar/Navbar'
import PlayerWrapper from '@/components/player/PlayerWrapper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './globals.css'
import AuthProvider from './providers/auth-provider/AuthProvider'
import ToasterProvider from './providers/toaster-provider/ToasterProvider'
import { persistor, store } from './store/store'

const inter = Inter({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <AuthProvider>
                <ToasterProvider />
                <div>
                  {pathname.includes('auth') || pathname.includes('account') ? (
                    <div>{children}</div>
                  ) : (
                    <div className="grid overflow-hidden grid-cols-[0fr,1fr] grid-rows-1 gap-x-0 gap-y-0">
                      <Navbar />
                      <div>{children}</div>
                      <PlayerWrapper />
                    </div>
                  )}
                </div>
              </AuthProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
