import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import LuxeNavbar from '@/components/Navigation/LuxeNavbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Navigation/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Verde NYC | Vineyard Restaurant & Wine Bar',
  description: 'Experience the essence of vineyard living in the heart of NYC. Award-winning wines, seasonal cuisine, and an ambiance that transports you to the Italian countryside.',
  keywords: 'fine dining, wine bar, NYC restaurant, vineyard, Italian cuisine, wine pairing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://verde-nyc.com',
    title: 'Verde NYC | Vineyard Restaurant & Wine Bar',
    description: 'Experience vineyard living in NYC',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg-primary text-text-primary font-montserrat">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative min-h-screen">
            {/* Vineyard Background Pattern */}
            <div className="fixed inset-0 bg-vine-pattern opacity-5 pointer-events-none -z-10" />
            
            <LuxeNavbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: 'glass-morphism border border-border-color',
                duration: 4000,
                style: {
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  backdropFilter: 'blur(10px)',
                },
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}