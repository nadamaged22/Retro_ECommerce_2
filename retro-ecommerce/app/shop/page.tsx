'use client'
import React from 'react'
import Image from 'next/image'
import { products } from '../../lib/products'
import ProductCard from '../../components/ProductCard'
import { CldImage } from 'next-cloudinary'

export default function Shop(){
  return (
    <div>
      {/* Decorative banner — retro collage with overlay title */}
      <div className="relative h-36 rounded-lg overflow-hidden mb-6 border-2 border-retroTan">
        <CldImage
          src="retro-ecommerce/retro-collage_hdblop"
          alt="Retro fashion collage banner"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.75 }}
          priority
        />
        <div className="absolute inset-0 bg-espresso/50 flex items-center px-6">
          <h1 className="text-4xl font-bold text-retroBg drop-shadow-md" style={{fontFamily:'Playfair Display'}}>Shop</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
