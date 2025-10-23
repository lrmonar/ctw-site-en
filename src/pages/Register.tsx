
import React from 'react';
import RegisterForm from '@/components/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">Create an Account</h1>
              <p className="text-gray-600 mt-2">Join our community and access exclusive resources</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <RegisterForm />
            </div>
            
            <p className="text-center text-sm text-gray-600 mt-8">
              Questions? <Link to="/contact" className="text-consulting-blue hover:underline">Contact our team</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
