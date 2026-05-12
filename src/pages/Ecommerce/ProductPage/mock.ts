import bannerImage from '@/assets/products/img1.jpg'

export interface ProductDetails {
  img: string
  title: string
  subtitle: string
  price: number
  rating: number
  description_1: string
  description_2: string
  code: number
  hashtag: string
  technology: string[]
  reviews: number
}

export const defaultProduct: ProductDetails = {
  img: bannerImage,
  title: 'trainers',
  subtitle: 'Trainers In White',
  price: 76,
  rating: 4.6,
  description_1: "Sneakers (also known as athletic shoes, tennis shoes, gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.",
  description_2: "The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.",
  code: 135234,
  hashtag: "whitetrainers",
  technology: [
    "Ollie patch",
    "Cup soles",
    "Vulcanized rubber soles"
  ],
  reviews: 32
}
