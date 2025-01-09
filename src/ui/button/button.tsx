import React from 'react'
import classNames from 'classnames'
import { ButtonProps } from './button.types'
import styles from './button.module.scss'

const Button: React.FC<ButtonProps> = ({
  colorScheme,
  size = 'md',
  className,
  children,
  disabled = false,
  onClick,
}) => {
  const buttonClassNames = classNames(
    styles.button,
    {
      [styles[`button_${size}`]]: size,
      [styles[`button_${colorScheme}`]]: colorScheme,
      root_disabled: disabled,
    },
    className
  )

  return (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
