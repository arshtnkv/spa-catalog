import { Button } from '@/ui'
import { QuantifierProps } from './quantifier.types'
import styles from './quantifier.module.scss'

const Quantifier: React.FC<QuantifierProps> = ({
  quantity,
  addItem,
  removeItem,
}) => {
  return (
    <div className={styles.quantifier}>
      <Button colorScheme="white" size="sm" onClick={removeItem}>
        -
      </Button>
      <span>{quantity}</span>
      <Button colorScheme="white" size="sm" onClick={addItem}>
        +
      </Button>
    </div>
  )
}

export default Quantifier
