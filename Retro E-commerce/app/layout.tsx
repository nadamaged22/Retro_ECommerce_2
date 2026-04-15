import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'

export const metadata = {
  title: 'Next Gen — Make it Viral',
  description: 'Retro-inspired fashion for Gen Z & Alpha',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen flex flex-col grain">
            <Navbar />
            <main className="flex-1 container py-8">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
