import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopMenu from '@/components/TopMenu';
import FooterMenu from '@/components/FooterMenu';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Popeyes',
  description: 'Popeyes menu reimplementation with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classString = `${inter.className} wrapper`;
  return (
    <html lang="en">
      <body className={classString}>
        <Providers>
          <TopMenu />
          {children}
          <FooterMenu />
        </Providers>
      </body>
    </html>
  );
}
