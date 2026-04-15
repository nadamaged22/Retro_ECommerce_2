'use client'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Product } from '../lib/products'

type CartItem = Product & { quantity: number }

type State = { items: CartItem[] }

type Action =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const initialState: State = { items: [] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i)
        }
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] }
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter(i => i.id !== action.payload.id) }
    }
    case 'UPDATE_QUANTITY': {
      return { items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i) }
    }
    case 'CLEAR_CART': return { items: [] }
    default: return state
  }
}

const CartContext = createContext<any>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem('nextgen_cart')
        if (raw) return JSON.parse(raw)
      }
    } catch (e) { }
    return init
  })

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') localStorage.setItem('nextgen_cart', JSON.stringify(state))
    } catch (e) { }
  }, [state])

  const value = { state, dispatch }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  const { state, dispatch } = ctx
  const addItem = (p: Product) => dispatch({ type: 'ADD_ITEM', payload: p })
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  const updateQuantity = (id: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const itemCount = state.items.reduce((s: number, i: CartItem) => s + i.quantity, 0)
  const subtotal = state.items.reduce((s: number, i: CartItem) => s + i.quantity * i.price, 0)
  return { items: state.items as CartItem[], addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }
}
