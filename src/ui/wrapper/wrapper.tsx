import classNames from 'classnames'

import styles from './wrapper.module.scss'
import { WrapperProps } from './wrapper.types'

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  const rootClassName = classNames(styles.wrapper, className)

  return <div className={rootClassName}>{children}</div>
}

export default Wrapper
