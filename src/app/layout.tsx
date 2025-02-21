// outsource dependencies
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// local dependencies
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up page',
};

export default function RootLayout({ children }: Readonly<{children: ReactNode;}>) {
  return <html lang="en">
    <body className={inter.className}> { children } </body>
  </html>;
}
