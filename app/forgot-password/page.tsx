'use client';
import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const resetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(`If an account exists for ${email}, you will get an email to reset your password.`);
    } catch (error) {
      setMessage('Error sending password reset email. Please try again.');
    }
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send Forgot Password Email
              </button>
            </div>
            {message && (
              <div className="mt-2 text-center text-sm text-white">
                {message}
              </div>
            )}
            <div className="mt-4 text-center text-sm">
              <button onClick={() => router.push('/signin')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                Back to login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}