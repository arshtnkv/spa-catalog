import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@/components/cart/cartSlice'
import { ProductProps } from './product.types'
import { AppDispatch } from '@/shared/store'
import { Button } from '@/ui/button'
import styles from './product.module.scss'
import { Heading } from '@/ui'
import { FaShoppingCart } from 'react-icons/fa'

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <li className={styles.root}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className={styles.info}>
        <Link to={`/product/${product.id}`}></Link>
        <Heading size="xs" tagName="h3">
          {product.name}
        </Heading>

        <p>{product.description}</p>
        <span className={styles.price}>${product.price}</span>
        <Button
          size="sm"
          className={styles.btn}
          onClick={() => dispatch(addItemToCart({ ...product, quantity: 1 }))}
        >
          <FaShoppingCart /> В корзину
        </Button>
      </div>
    </li>
  )
}

export default Product
