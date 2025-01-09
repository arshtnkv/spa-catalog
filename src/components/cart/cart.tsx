import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store'
import { useCartActions } from '@/shared/hooks/useCartActions'
import { Heading } from '@/ui'
import { Quantifier } from '@/components/quantifier'

import styles from './cart.module.scss'

const Cart: React.FC = () => {
  const { addItem, removeItem } = useCartActions()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <ul className={styles.root}>
      {cartItems.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.name} loading="lazy" />
          <div className={styles.wrapper}>
            <Heading className={styles.cartItem_title} tagName="h3" size="xs">
              {item.name}
            </Heading>
            <span>${item.price}</span>
          </div>
          <Quantifier
            quantity={item.quantity}
            addItem={() => addItem(item)}
            removeItem={() => removeItem(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default Cart
