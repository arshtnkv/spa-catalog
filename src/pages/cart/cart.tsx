import { useSelector } from 'react-redux'
import { Button, Heading } from '@/ui'
import { Cart } from '@/components/cart'
import { TotalPrice } from '@/components/totalPrice'
import { RootState } from '@/shared/store'

import styles from './cart.module.scss'
import { Breadcrumbs } from '@/components'

const CartPage: React.FC = () => {
  const totalPrice = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  )

  return (
    <section>
      <div className={styles.root}>
        <Breadcrumbs />
        {totalPrice === 0 ? (
          <Heading tagName="h1">Пусто</Heading>
        ) : (
          <>
            <Heading tagName="h1">Корзина</Heading>
            <Cart />
            <TotalPrice amount={totalPrice} />
            <Button size="sm">Оплатить</Button>
          </>
        )}
      </div>
    </section>
  )
}

export default CartPage
