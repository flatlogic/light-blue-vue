// Product types
export interface Product {
  id: number
  title: string
  subtitle?: string
  price: number
  description?: string
  description_1?: string
  description_2?: string
  img?: string
  rating?: number
  code?: number
  hashtag?: string
  technology?: string[]
  discount?: number
  reviews?: number
  favourite?: boolean
  createdAt?: Date
  updatedAt?: Date
}
