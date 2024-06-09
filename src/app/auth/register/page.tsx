import RegisterPage from '@/_pages/register/Register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Register() {
  return <RegisterPage />;
}
