import axios from 'axios'
import { Product } from '@/shared/types'

const BASE_URL = '/api/products'

const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(BASE_URL)
  return response.data
}

export default { getAllProducts }
