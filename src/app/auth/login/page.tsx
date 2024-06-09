import LoginPage from '@/_pages/login/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
  return <LoginPage />;
}
