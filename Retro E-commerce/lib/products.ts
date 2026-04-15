export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  tag?: string;
}

export const products: Product[] = [
  { id: 'p1', name: 'Sunset Corduroy Jacket', price: 89, image: '/placeholder1.jpg', tag: 'Vintage' },
  { id: 'p2', name: 'Disco Stripe Tee', price: 29, image: '/placeholder2.jpg', tag: 'Retro' },
  { id: 'p3', name: 'Golden Era Jeans', price: 59, image: '/placeholder3.jpg', tag: 'Denim' },
  { id: 'p4', name: 'Mustard Knit Vest', price: 39, image: '/placeholder4.jpg', tag: 'Knit' },
  { id: 'p5', name: 'Boogie Overshirt', price: 69, image: '/placeholder5.jpg', tag: 'Oversize' },
  { id: 'p6', name: 'Pixel Patch Hoodie', price: 79, image: '/placeholder6.jpg', tag: 'Hoodie' },
  { id: 'p7', name: 'VHS Logo Cap', price: 19, image: '/placeholder7.jpg', tag: 'Accessories' },
  { id: 'p8', name: 'Retro Runner Sneakers', price: 99, image: '/placeholder8.jpg', tag: 'Footwear' }
]
