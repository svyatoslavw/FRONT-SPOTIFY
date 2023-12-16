import { LucideIcon } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  Icon?: LucideIcon
  error?: string
}
