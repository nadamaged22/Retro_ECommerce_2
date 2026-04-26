'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { itemCount } = useCart()
  return (
    <header className="bg-white border-b border-retroTan">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-deepDark font-bold text-xl" style={{fontFamily:'Playfair Display'}}>
            NEXT GEN
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/shop" className="hover:underline">Shop</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h2l1 9h11l3-6H6" stroke="#2C1810" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="20" r="1" fill="#2C1810"/>
              <circle cx="18" cy="20" r="1" fill="#2C1810"/>
            </svg>
            {mounted && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-mustard text-xs text-deepDark font-bold px-2 rounded-full">{itemCount}</span>
            )}
          </Link>
          <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-retroBg border-t border-retroTan">
          <div className="container py-3 flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/cart">Cart ({itemCount})</Link>
          </div>
        </div>
      )}
    </header>
  )
}
