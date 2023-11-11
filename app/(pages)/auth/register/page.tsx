import RegisterPage from '@/components/screens/register/Register'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
}

export default function Register() {
  return <RegisterPage />
}
