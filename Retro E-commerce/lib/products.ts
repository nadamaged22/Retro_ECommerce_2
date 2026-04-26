export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  tag?: string;
  objectPosition?: string;
}

export const products: Product[] = [
  { id: 'p1', name: 'Black Shirt', price: 500, image: '/Black Shirt with Beige Trousers.WEBP', tag: 'Vintage',objectPosition: 'center'  },
  { id: 'p2', name: 'Bold Floral Wide‑Leg Pants', price: 400, image: '/Bold Floral Wide‑Leg Pants.JPG.jpeg', tag: 'Retro',objectPosition: 'bottom'  },
  { id: 'p3', name: ' White Tan Trousers', price: 300, image: '/Braided Belt on Tan Trousers.JPG.jpeg', tag: 'Denim',objectPosition: 'center'  },
  { id: 'p4', name: 'Brown Tie with White Shirt', price: 500, image: '/Brown Tie with White Shirt.JPG.jpeg', tag: 'Knit',objectPosition: 'center'  },
  { id: 'p5', name: 'Circular Buckle Belt with Trousers', price: 600, image: '/Circular Buckle Belt with Trousers.JPG.jpeg', tag: 'Oversize',objectPosition: 'bottom'  },
  { id: 'p6', name: 'Classic Round Glasses with Neutral shirt', price: 900, image: '/Classic Round Glasses with Neutral Headscarf.JPG.jpeg', tag: 'Hoodie',objectPosition: 'center'  },
  { id: 'p7', name: 'Relaxed Wide‑Leg Pants', price: 700, image: '/Relaxed Wide‑Leg Pants with Sneakers.JPG.jpeg', tag: 'Accessories',objectPosition: 'bottom'  },
  { id: 'p8', name: 'Retro Olive Knot‑Front Blouse with Statement Belt', price: 500, image: '/Retro Olive Knot‑Front Blouse with Statement Belt.JPG.jpeg', tag: 'Footwear',objectPosition: 'center'  },
  { id: 'p9', name: 'Retro Polka Dot Midi Dress with White Handbag', price: 600, image: '/Retro Polka Dot Midi Dress with White Handbag.JPG.jpeg', tag: 'Vintage',objectPosition: 'center'  },
  { id: 'p10', name: 'Spotted Dress with White Belt', price: 300, image: '/Spotted Dress with White Belt.JPG.jpeg', tag: 'Vintage',objectPosition: 'center'  },
  { id: 'p11', name: 'Striped Long‑Sleeve Shirt', price: 400, image: '/Striped Long‑Sleeve Shirt with Denim Overalls.jpeg', tag: 'Retro',objectPosition: 'center'  },
  { id: 'p12', name: 'Denim Overalls', price: 700, image: '/Striped Shirt with Denim Overalls.JPG.jpeg', tag: 'Retro',objectPosition: 'center'  },
  { id: 'p13', name: 'Denim Jeans', price: 700, image: '/Textured Green Flared Sleeve Top with Denim.JPG.jpeg', tag: 'Denim',objectPosition: 'center'  },
  { id: 'p14', name: 'Vintage Plaid Shawl Over Cream Blouse', price: 500, image: '/Vintage Plaid Shawl Over Cream Blouse.JPG.jpeg', tag: 'Vintage',objectPosition: 'center'  },
  { id: 'p15', name: 'Vinyl Record & Orange Vintage Shirt', price: 200, image: '/Vinyl Record Accessory Moment.JPG.jpeg', tag: 'Knit',objectPosition: 'center'  },
  { id: 'p16', name: 'Classic Black Suit with White Shirt', price: 1400, image: '/Classic Black Suit with White Shirt.jpeg', tag: 'Retro',objectPosition: 'center'  },
  { id: 'p17', name: 'Minimalist Black Short‑Sleeve Shirt', price: 700, image: '/Minimalist Black Short‑Sleeve Shirt with Glasses.jpeg', tag: 'Denim',objectPosition: 'center'  },
  { id: 'p18', name: 'Minimalist Black formal pants and formal shoes', price: 1600, image: '/Minimalist Black Short‑Sleeve Shirt.jpeg', tag: 'Vintage',objectPosition: 'center'  },
]
