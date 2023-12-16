'use client'
import { forwardRef } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../../app/globals.css'
import styles from './Field.module.scss'
import { IField } from './field.unterface'

const FieldNumber = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, className, type = 'text', style, Icon, ...field }, ref) => {
    const value = field.value !== undefined && field.value !== null ? field.value.toString() : ''

    return (
      <div className={className} style={style}>
        <label>
          <span className={styles.icon}>
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <PhoneInput
            inputClass="customInput"
            country={'ua'}
            countryCodeEditable={false}
            specialLabel={'Player Mobile Number'}
            {...field}
            value={value}
          />
        </label>
        {error && <div className="text-primary">{error}</div>}
      </div>
    )
  },
)

FieldNumber.displayName = 'FieldNumber'

export default FieldNumber
