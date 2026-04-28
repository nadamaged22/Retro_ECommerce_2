'use client'
import React, { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import { Product } from '../lib/products'
import { useCart } from '../context/CartContext'

const positionClass: Record<string, string> = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
}
export default function ProductCard({ product, priority = false }: { product: Product, priority?: boolean }){
  const { addItem } = useCart()
  const [lightbox, setLightbox] = useState(false)
  const objPos = positionClass[product.objectPosition ?? 'center'] ?? 'object-center'

  return (
    <>
      <div className="card-retro flex flex-col">
        <div
          className="w-full h-48 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center mb-3 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <CldImage
            src={product.image || 'placeholder'}
            alt={product.name}
            width={400}
            height={300}
            crop="fill"
            gravity={product.objectPosition === 'bottom' ? 'south' : product.objectPosition === 'top' ? 'north' : 'center'}
            quality="auto"
            format="auto"
            className={`object-cover w-full h-full ${objPos}`}
            priority={priority}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold" style={{fontFamily:'Playfair Display'}}>{product.name}</h3>
          <div className="text-sm text-espresso mt-1">EGP{product.price}</div>
        </div>
        <div className="mt-3">
          <button onClick={()=>addItem(product)} className="button-retro w-full">Add to Cart</button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
              onClick={() => setLightbox(false)}
            >
              &times;
            </button>
            <div className="relative w-full h-[80vh]">
              <CldImage
                src={product.image || 'placeholder'}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                quality="auto"
                format="auto"
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-2 font-semibold" style={{fontFamily:'Playfair Display'}}>{product.name}</p>
          </div>
        </div>
      )}
    </>
  )
}