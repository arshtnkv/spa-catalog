import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '@/components/cart/cartSlice'
import { CartItem } from '../types'

export const useCartActions = () => {
  const dispatch = useDispatch()

  const addItem = (item: CartItem) =>
    dispatch(addItemToCart({ ...item, quantity: 1 }))
  const removeItem = (itemId: number) => dispatch(removeItemFromCart(itemId))

  return { addItem, removeItem }
}
