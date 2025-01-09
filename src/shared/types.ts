export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

export type Banner = {
  id?: number
  name?: string
  image: string
  link: string
}

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}
