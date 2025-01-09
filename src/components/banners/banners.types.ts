import { Banner } from '@/shared/types'

export interface BannersState {
  items: Banner[]
  loading: boolean
  error: string | null
}
