'use client';
import { PlayerWrapper } from '@/entities/player/ui';
import { client } from '@/shared/api/apollo.config';
import AuthProvider from '@/shared/ui/providers/AuthProvider';
import ToasterProvider from '@/shared/ui/providers/ToasterProvider';
import { Navbar } from '@/widgets/Navbar/Navbar';
import { ApolloProvider } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { NextUIProvider } from '@nextui-org/react';
import { Open_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import './globals.css';

const roboto = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  const pathname = usePathname();

  loadDevMessages();
  loadErrorMessages();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ApolloProvider client={client}>
          <AuthProvider>
            <NextUIProvider>
              <ToasterProvider />
              <>
                {pathname.includes('auth') ||
                pathname.includes('account') ||
                pathname.includes('admin') ? (
                  <div>{children}</div>
                ) : (
                  <div className="overflow-hidden bg-black text-white grid grid-cols-[0.1fr_1fr] grid-rows-1 gap-0">
                    <Navbar />
                    <div className="p-2 pl-0">{children}</div>
                    <PlayerWrapper />
                  </div>
                )}
              </>
            </NextUIProvider>
          </AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
