'use client'
import React from 'react'
import Image from 'next/image'
import { Product } from '../lib/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }){
  const { addItem } = useCart()
  return (
    <div className="card-retro flex flex-col">
      <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center mb-3">
        <Image src={product.image || '/placeholder.png'} alt={product.name} width={400} height={300} className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold" style={{fontFamily:'Playfair Display'}}>{product.name}</h3>
        <div className="text-sm text-espresso mt-1">EGP{product.price}</div>
      </div>
      <div className="mt-3">
        <button onClick={()=>addItem(product)} className="button-retro w-full">Add to Cart</button>
      </div>
    </div>
  )
}
