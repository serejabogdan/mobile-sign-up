// outsource dependencies
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// local dependencies
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home sweet home',
};

export default function RootLayout({ children }: Readonly<{children: ReactNode;}>) {
  return <html lang="en">
    <body className={inter.className}>
      <main>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          { children }
        </div>
      </main>
    </body>
  </html>;
}
