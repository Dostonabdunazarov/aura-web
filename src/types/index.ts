export type BadgeType = 'spicy' | 'halal' | 'vegan' | 'new' | 'popular'

export interface MenuItem {
  id: string
  category: MenuCategory
  name: string
  description: string
  composition: string
  price: number
  calories: number
  image: string
  badges: BadgeType[]
}

export type MenuCategory =
  | 'coffee'
  | 'breakfast'
  | 'pastry'
  | 'desserts'
  | 'drinks'
  | 'lunch'
  | 'hot'
  | 'salads'
  | 'vegan'
  | 'seasonal'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  span?: 'wide' | 'tall' | 'normal'
}

export type PromoType = 'morning' | 'happy_hours' | 'combo' | 'holiday' | 'promo_code'

export interface Promotion {
  id: string
  type: PromoType
  title: string
  description: string
  discount: string
  validUntil?: Date
  image: string
  promoCode?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  date: string
}
