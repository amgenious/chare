'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/components/firebase';
import { useRouter } from 'next/navigation';

export default function SignUpPage () {
  const router = useRouter();
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  

  const handlesignin=(e) => {
    e.preventDefault()
  
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    router.push('/auth/login');
  })
  .catch((error) => {
   setError(true)
   setErrorMessage(error.message);
  });
  }
  return (
    <div className='h-screen  flex justify-center items-center '>
      <div className='p-5 bg-white text-[#00375C]'>
      <div className="flex-1">
        <h1 className="btn btn-ghost text-2xl font-extrabold">chare</h1>
      </div>
        <h1 className='text-xl font-semibold text-center p-3'>SignUp</h1>
          <div className='p-5'>
            <form className='flex flex-col' onSubmit={handlesignin}>
              <input placeholder='email' type='text' className='bg-transparent p-3 border rounded-lg mb-2'required onChange={e=>setEmail(e.target.value)} />
              <input placeholder='password' type='password' className='bg-transparent p-3 border rounded-lg mb-4' required onChange={e=>setPassword(e.target.value)}/>
              <button className='btn bg-blue-950 text-white hover:bg-white hover:text-blue-950' type='submit'>Signup</button>
              {error && <span>{errorMessage}</span>}
            </form>
          </div>
          <Link href={'/auth/login'}>
          <p className='text-right pr-5 pt-5'>Login</p>
          </Link>
      </div>
    </div>
  )
}
