import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const jet = JetBrains_Mono({ variable: '--font-jet', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SyncroOps',
  description: 'SyncroOps — Software agency showcase'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jet.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
