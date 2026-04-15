import React from 'react'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import { products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const featured = products.slice(0,4)
  return (
    <div>
      <HeroSection />
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{fontFamily:'Playfair Display'}}>Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Who We Are — with vintage clothing-rack illustration */}
      <section className="mt-8 p-6 rounded-lg bg-white border-2 border-retroTan overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-xl" style={{fontFamily:'Playfair Display'}}>Who We Are</h3>
            <p className="mt-2">We are a fashion brand inspired by the bold spirit of the 70s and 80s, reimagined for Gen Z and Alpha.</p>
            <div className="mt-3">
              <a href="/about" className="underline">Learn more</a>
            </div>
          </div>
          <div className="w-40 h-52 relative flex-shrink-0 opacity-90 retro-frame retro-img-hover">
            <Image
              src="/clothing-rack.jpg"
              alt="Illustration of a vintage clothing rack"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
