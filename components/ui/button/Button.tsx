import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={clsx(styles.btn, className)}>
      {children}
    </button>
  )
}

export default Button
