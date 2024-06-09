'use client';

import { LoginForm } from '@/features/Login';

const LoginPage = () => {
  return (
    <div className="flex text-white items-center justify-center h-screen overflow-hidden bg-gradient-custom">
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
