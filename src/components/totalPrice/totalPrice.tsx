import { TotalPriceProps } from './totalPrice.types'

import styles from './total-price.module.scss'

const TotalPrice: React.FC<TotalPriceProps> = ({ amount }) => {
  return (
    <div className={styles.totalPrice}>
      <p>
        Total: <span>$ {amount.toFixed(2)}</span>
      </p>
    </div>
  )
}

export default TotalPrice
