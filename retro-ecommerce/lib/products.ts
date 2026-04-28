export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  tag?: string;
  objectPosition?: string;
}

export const products: Product[] = [
  { id: 'p1', name: 'Black Shirt', price: 500, image: 'retro-ecommerce/Black_Shirt_with_Beige_Trousers_edeucb', tag: 'Vintage', objectPosition: 'center' },
  { id: 'p2', name: 'Bold Floral Wide‑Leg Pants', price: 400, image: 'retro-ecommerce/Bold_Floral_Wide_Leg_Pants.JPG_t2a4eb', tag: 'Retro', objectPosition: 'bottom' },
  { id: 'p3', name: ' White Tan Trousers', price: 300, image: 'retro-ecommerce/Braided_Belt_on_Tan_Trousers.JPG_jt40mk', tag: 'Denim', objectPosition: 'center' },
  { id: 'p4', name: 'Brown Tie with White Shirt', price: 500, image: 'retro-ecommerce/Brown_Tie_with_White_Shirt.JPG_vpaoln', tag: 'Knit', objectPosition: 'center' },
  { id: 'p5', name: 'Circular Buckle Belt with Trousers', price: 600, image: 'retro-ecommerce/Circular_Buckle_Belt_with_Trousers.JPG_jy7lyg', tag: 'Oversize', objectPosition: 'bottom' },
  { id: 'p6', name: 'Classic Round Glasses with Neutral shirt', price: 900, image: 'retro-ecommerce/Classic_Round_Glasses_with_Neutral_Headscarf.JPG_fmmpyk', tag: 'Hoodie', objectPosition: 'center' },
  { id: 'p7', name: 'Relaxed Wide‑Leg Pants', price: 700, image: 'retro-ecommerce/Relaxed_Wide_Leg_Pants_with_Sneakers.JPG_twg4gp', tag: 'Accessories', objectPosition: 'bottom' },
  { id: 'p8', name: 'Retro Olive Knot‑Front Blouse with Statement Belt', price: 500, image: 'retro-ecommerce/Retro_Olive_Knot_Front_Blouse_with_Statement_Belt.JPG_ut4iiq', tag: 'Footwear', objectPosition: 'center' },
  { id: 'p9', name: 'Retro Polka Dot Midi Dress with White Handbag', price: 600, image: 'retro-ecommerce/Retro_Polka_Dot_Midi_Dress_with_White_Handbag.JPG_b5qskf', tag: 'Vintage', objectPosition: 'center' },
  { id: 'p10', name: 'Spotted Dress with White Belt', price: 300, image: 'retro-ecommerce/Spotted_Dress_with_White_Belt.JPG_rmatk6', tag: 'Vintage', objectPosition: 'center' },
  { id: 'p11', name: 'Striped Long‑Sleeve Shirt', price: 400, image: 'retro-ecommerce/Striped_Long_Sleeve_Shirt_with_Denim_Overalls_b5mzwu', tag: 'Retro', objectPosition: 'center' },
  { id: 'p12', name: 'Denim Overalls', price: 700, image: 'retro-ecommerce/Striped_Shirt_with_Denim_Overalls.JPG_g60ina', tag: 'Retro', objectPosition: 'center' },
  { id: 'p13', name: 'Denim Jeans', price: 700, image: 'retro-ecommerce/Textured_Green_Flared_Sleeve_Top_with_Denim.JPG_iulbwz', tag: 'Denim', objectPosition: 'center' },
  { id: 'p14', name: 'Vintage Plaid Shawl Over Cream Blouse', price: 500, image: 'retro-ecommerce/Vintage_Plaid_Shawl_Over_Cream_Blouse.JPG_cmp8ui', tag: 'Vintage', objectPosition: 'center' },
  { id: 'p15', name: 'Vinyl Record & Orange Vintage Shirt', price: 200, image: 'retro-ecommerce/Vinyl_Record_Accessory_Moment.JPG_hrbu9z', tag: 'Knit', objectPosition: 'center' },
  { id: 'p16', name: 'Classic Black Suit with White Shirt', price: 1400, image: 'retro-ecommerce/Classic_Black_Suit_with_White_Shirt_ktm85p', tag: 'Retro', objectPosition: 'center' },
  { id: 'p17', name: 'Minimalist Black Short‑Sleeve Shirt', price: 700, image: 'retro-ecommerce/Minimalist_Black_Short_Sleeve_Shirt_with_Glasses_tfwx7g', tag: 'Denim', objectPosition: 'center' },
  { id: 'p18', name: 'Minimalist Black formal pants and formal shoes', price: 1600, image: 'retro-ecommerce/Minimalist_Black_Short_Sleeve_Shirt_vekizv', tag: 'Vintage', objectPosition: 'center' },
]
