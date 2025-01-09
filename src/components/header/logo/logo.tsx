import { Link } from 'react-router-dom'
import styles from './logo.module.scss'

const Logo: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="/icons/logo.svg"
          className={styles.logo}
          alt="Shopping Cart Application"
        />
      </Link>
    </div>
  )
}

export default Logo
