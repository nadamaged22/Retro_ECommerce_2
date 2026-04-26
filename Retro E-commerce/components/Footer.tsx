'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="bg-deepDark text-retroBg mt-8 relative overflow-hidden">
      {/* Faded disco ball decoration — visible on md+ */}
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-36 h-36 pointer-events-none select-none opacity-15">
        <Image
          src="/disco-ball.jpg"
          alt=""
          fill
          priority
          sizes="144px"
          className="object-contain"
        />
      </div>

      <div className="container py-8 flex flex-col md:flex-row items-start justify-between gap-6 relative z-10">
        <div>
          <div className="font-bold text-2xl" style={{fontFamily:'Playfair Display'}}>NEXT GEN</div>
          <div className="text-sm mt-1">Make it Viral</div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="font-semibold">Navigate</span>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Follow</span>
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
      <div className="border-t border-retroTan text-center py-4 text-sm relative z-10">© 2025 Next Gen. All rights reserved.</div>
    </footer>
  )
}
