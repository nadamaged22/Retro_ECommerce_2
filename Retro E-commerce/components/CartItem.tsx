'use client'
import React from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

export default function CartItem({ item }: any){
  const { updateQuantity, removeItem } = useCart()
  return (
    <div className="flex gap-4 items-center border-b border-retroTan py-4">
      <div className="w-24 h-20 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        <Image src={item.image || '/placeholder.png'} alt={item.name} width={160} height={120} className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm">EGP{item.price}</div>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={()=> updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 border rounded">-</button>
          <div className="px-3">{item.quantity}</div>
          <button onClick={()=> updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded">+</button>
        </div>
      </div>
      <div>
        <button onClick={()=> removeItem(item.id)} className="text-sm text-red-600">Remove</button>
      </div>
    </div>
  )
}
