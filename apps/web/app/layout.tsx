'use client';

import '@repo/ui/globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'jotai';
import Header from '@/app/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F8FA]`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
