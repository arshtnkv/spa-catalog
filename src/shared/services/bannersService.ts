import axios from 'axios'
import { Banner } from '@/shared/types'

const BASE_URL = '/api/banners'

const getAllBanners = async (): Promise<Banner[]> => {
  const response = await axios.get<Banner[]>(BASE_URL)
  return response.data
}

export default { getAllBanners }
