import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from './cart.types'
import { CartItem } from '@/shared/types'

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart(state) {
      state.items = []
      localStorage.setItem('cart', JSON.stringify(state.items)) // Очистка localStorage
    },
  },
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
