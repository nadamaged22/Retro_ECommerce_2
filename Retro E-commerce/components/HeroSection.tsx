'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection(){
  return (
    <section className="relative bg-[linear-gradient(135deg,#F5F0E8_0%,#E8DFC8_100%)] rounded-lg p-8 mb-8 overflow-hidden">
      {/* Faded collage background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/retro-collage.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.08, mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold" style={{fontFamily:'Playfair Display'}}>
            Next Gen — Make it Viral
          </h1>
          <p className="mt-3 max-w-xl">Vintage 70s & 80s aesthetics reimagined for Gen Z & Alpha — bold, nostalgic, expressive.</p>
          <div className="mt-4">
            <Link href="/shop" className="button-retro">Shop Now</Link>
          </div>
        </div>

        {/* Retro globe mascot */}
        <div className="w-72 h-72 md:w-96 md:h-96 relative flex-shrink-0 drop-shadow-xl">
          <Image
            src="/logo2.png"
            alt="Retro globe mascot character"
            fill
            sizes="(max-width: 777px) 288px, 384px"
            className="object-contain rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
