import { CartWidget } from '../cartWidget'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store'
import classNames from 'classnames'
import { HeaderProps } from './header.types'
import styles from './header.module.scss'
import useHeaderShrink from '@/shared/hooks/useHeaderShrink'
import { Logo } from './logo'

const Header: React.FC<HeaderProps> = ({ className }) => {
  const productsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  useHeaderShrink()

  const headerClassName = classNames(styles.header, className)

  return (
    <header className={headerClassName}>
      <Logo />
      <CartWidget productsCount={productsCount} />
    </header>
  )
}

export default Header
