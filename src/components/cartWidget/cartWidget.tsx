import { useNavigate } from 'react-router-dom'
import { CartWidgetProps } from './cartWidget.types'
import styles from './cart-widget.module.scss'

const CartWidget: React.FC<CartWidgetProps> = ({ productsCount }) => {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }
  return (
    <button className={styles.root} onClick={navigateToCart}>
      <span>{productsCount}</span>
      <img src="/icons/shopping-cart.svg" alt="Go to Cart" />
    </button>
  )
}

export default CartWidget
