import { SelectHTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './select.module.scss'

const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  className,
  children,
  ...props
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <select {...props} className={rootClassName}>
      {children}
    </select>
  )
}

export default Select
