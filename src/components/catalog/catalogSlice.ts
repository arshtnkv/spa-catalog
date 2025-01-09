import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/shared/types'
import services from '@/shared/services/productsService'
import { CatalogState } from './catalog.types'

const initialState: CatalogState = {
  products: JSON.parse(localStorage.getItem('catalog') || '[]'),
  loading: false,
  error: null,
  searchQuery: '',
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
      localStorage.setItem('catalog', JSON.stringify(state.products))
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setCatalog, setSearchQuery, setLoading, setError } =
  catalogSlice.actions

export const initializeCatalog =
  () =>
  async (
    dispatch: (arg0: {
      payload: string | boolean | Product[] | null
      type: 'catalog/setCatalog' | 'catalog/setLoading' | 'catalog/setError'
    }) => void
  ) => {
    try {
      dispatch(setLoading(true))
      const products = await services.getAllProducts()
      dispatch(setCatalog(products))
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
      } else {
        dispatch(setError('Ошибка при загрузке товаров'))
      }
    } finally {
      dispatch(setLoading(false))
    }
  }

export default catalogSlice.reducer
