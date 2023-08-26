import { StateProvider } from '@/store/provider';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/theme/Provider';
import { outfit, playball } from './fonts';


export const metadata: Metadata = {
  title: 'Aphrodite Project',
  description: 'Aphrodite Project es una innovadora app para reservación de citas para peluquerías y gestión completa de negocios del sector de la belleza.',
  manifest: '/manifest.json',
  themeColor: '#000',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playball.variable} overflow-hidden`}>
        <StateProvider >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StateProvider>
      </body>
    </html>
  )
}
