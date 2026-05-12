import config from '@/config'
import type { Product } from '@/types'

// Use local images when no backend, remote when backend is enabled
const getProductImage = (imagePath: string) => {
  if (config.isBackend) {
    return config.remote + imagePath
  }
  // Use public folder for local images
  return imagePath
}

const products: Product[] = [
  {
    id: 13,
    img: getProductImage('/assets/products/img1.jpg'),
    title: 'Tyhrt',
    subtitle: 'hyrtyhrt',
    price: 0.01,
    rating: 5,
    description_1: "Sneakers (also known as athletic shoes, tennis shoes,gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.",
    description_2: "The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.",
    code: 135234,
    hashtag: "tyhrt",
    technology: [
      "Ollie patch",
      "Cup soles",
      "Vulcanized rubber soles"
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

export default products
