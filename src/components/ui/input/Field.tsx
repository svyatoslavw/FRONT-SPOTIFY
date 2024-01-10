'use client'
import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './Field.module.scss'
import { IField } from './field.unterface'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, className, type = 'text', style, Icon, ...rest }, ref) => {
    const isReadOnly = rest.readOnly || false
    return (
      <div className={className} style={style}>
        <label>
          <span className={clsx(styles.icon)}>
            {Icon && <Icon size={18} color="white" className="mr-1.5" />}
            {placeholder}
          </span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...rest}
            className={clsx(
              styles.field,
              { 'border-primary appearance-none': !!error },
              { [styles.readOnly]: isReadOnly },
            )}
          />
        </label>
        {error ? (
          <div className="text-green-500 text-sm z-50">{error}</div>
        ) : (
          <div className="h-5"></div>
        )}
      </div>
    )
  },
)

Field.displayName = 'Field'

export default Field
