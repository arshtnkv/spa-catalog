import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from '../components/catalog/catalogSlice'
import cartReducer from '../components/cart/cartSlice'
import bannerReducer from '../components/banners/bannersSlice'

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
    banners: bannerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
