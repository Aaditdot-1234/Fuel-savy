'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const router = useRouter();

  const signup = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/signin');
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error("Email already in use");
        } else {
          toast.error(error.message);
        }
      }
    };
  
  return (
    <>
    <ToastContainer />
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
       Sign up
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
         <div className="flex items-center justify-between">
           <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
             Password
           </label>
         </div>
         <div className="mt-2 relative">
           <input
             id="password"
             name="password"
             type={showPassword ? "text" : "password"}
             autoComplete="current-password"
             onChange={(e) => setPassword(e.target.value)}
             required
             className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                         />
              <button
             type="button"
             onClick={() => setShowPassword(!showPassword)}
             className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
           >
             {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
           </button>          
         </div>
       </div>
       <div>
         <div className="flex items-center justify-between">
           <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
             Password Again
           </label>
         </div>
         <div className="mt-2 relative">
           <input
             id="passwordAgain"
             name="passwordAgain"
             type={showPasswordAgain ? "text" : "password"}
             autoComplete="current-password"
             onChange={(e) => setPasswordAgain(e.target.value)}
             required
             className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                         />
           <button
             type="button"
             onClick={() => setShowPasswordAgain(!showPasswordAgain)}
             className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
           >
             {showPasswordAgain ? <EyeSlashIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
           </button>
         </div>
       </div>

       <div>
         <button
           disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
           onClick={() => signup()}
           className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
         >
           Sign Up
         </button>
       </div>
     </div>
     <p className="mt-10 text-center text-sm text-gray-400">
       Already have an account? {' '}
       <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
           Sign In
       </button>
   </p>      
   </div>
 </div>
</>
)
}