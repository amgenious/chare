'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/components/firebase';
import { useRouter } from 'next/navigation';


export default function LoginPage  () {
  const router = useRouter();
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const handlelogin=(e) => {
    
    e.preventDefault()
  
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    router.push('/');
    
  })
  .catch((error) => {
   setError(true)
   setErrorMessage(error.message);
  
  });
  }

  return (
    <div className='h-screen  flex justify-center items-center '>
       <div className='p-5 bg-white text-[#00375C]'>
        <h1 className='text-xl font-semibold text-center p-3'>Login</h1>
          <div className='p-5'>
            <form className='flex flex-col' onSubmit={handlelogin}>
              <input placeholder='email' type='text' className='bg-transparent p-3 border rounded-lg mb-2'required onChange={e=>setEmail(e.target.value)} />
              <input placeholder='password' type='password' className='bg-transparent p-3 border rounded-lg mb-4' required onChange={e=>setPassword(e.target.value)}/>
              <button type='submit' className='btn bg-blue-950 text-white hover:bg-white hover:text-blue-950'>Login</button>
             {error && <span className='text-center text-red-600 pt-1'>{errorMessage}</span>} 
            </form>
          </div>
          <Link href={'/auth/signup'}>
          <p className='text-right pr-5'>Signup</p>
          </Link>
          <p className='text-right pr-5'>Forgot Password?</p>
      </div>
    </div>
  )
}
