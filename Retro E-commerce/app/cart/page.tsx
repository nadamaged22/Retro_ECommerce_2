'use client'
import React from 'react'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem'
import Link from 'next/link'

export default function CartPage(){
  const { items, subtotal } = useCart()
  if(items.length === 0) return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold">Your cart is empty</h2>
      <p className="mt-2">Looks like you haven't added anything yet.</p>
      <div className="mt-4">
        <Link href="/shop" className="button-retro">Go to Shop</Link>
      </div>
    </div>
  )

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {items.map((it:any)=> <CartItem key={it.id} item={it} />)}
      </div>
      <aside className="p-4 bg-white border-2 border-retroTan rounded">
        <h3 className="font-semibold">Order Summary</h3>
        <div className="mt-2">Subtotal: <strong>EGP{subtotal.toFixed(2)}</strong></div>
        <div className="mt-4">
          <button className="button-retro w-full">Proceed to Checkout</button>
        </div>
      </aside>
    </div>
  )
}
