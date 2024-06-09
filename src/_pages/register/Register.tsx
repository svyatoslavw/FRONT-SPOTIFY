'use client';
import { RegisterForm } from '@/features/Register/RegisterForm';
const RegisterPage = () => {
  return (
    <div className="text-white flex items-center justify-center h-screen overflow-hidden bg-gradient-custom">
      <section>
        <RegisterForm />
      </section>
    </div>
  );
};

export default RegisterPage;
