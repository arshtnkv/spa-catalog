import { Product } from '../../shared/types'

export interface CatalogProps {
  products: Product[]
}

export interface CatalogState {
  products: Product[]
  loading: boolean
  error: string | null
  searchQuery: string
}
