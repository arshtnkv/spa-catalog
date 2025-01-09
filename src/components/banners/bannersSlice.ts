import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import services from '@/shared/services/bannersService'
import { Banner } from '@/shared/types'
import { BannersState } from './banners.types'

const initialState: BannersState = {
  items: [],
  loading: false,
  error: null,
}

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    setBanners(state, action: PayloadAction<Banner[]>) {
      state.items = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setBanners, setLoading, setError } = bannersSlice.actions

export const initializeBanners =
  () =>
  async (
    dispatch: (arg0: {
      payload: string | boolean | Banner[] | null
      type: 'banners/setBanners' | 'banners/setLoading' | 'banners/setError'
    }) => void
  ) => {
    dispatch(setLoading(true))
    try {
      const banners = await services.getAllBanners()
      dispatch(setBanners(banners))
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(setError(err.message))
      } else {
        dispatch(setError('Ошибка при загрузке баннеров'))
      }
    } finally {
      dispatch(setLoading(false))
    }
  }

export default bannersSlice.reducer
