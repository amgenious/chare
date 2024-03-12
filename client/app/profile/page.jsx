'use client'
import { Navbar } from '@/components/navbar'
import React,{useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/components/firebase';
import { useRouter } from 'next/navigation';



export default function ProfilePage  ()  {
    const router = useRouter();
    const [fullemail, setFullemail] = useState('')
    const [email, setEmail] = useState('')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.email;
        setFullemail(uid)
        const text = uid.slice(0,2)
        setEmail(text)
      } else {
        router.push('/auth/login')
      }
    });

  return (
    <>
    <Navbar />
    <div className='h-[93vh] flex justify-center items-center bg-[#00375c]'>
        <div className='p-5 flex flex-col justify-center items-center'>
                <div className='w-32 h-32 rounded-full bg-white flex items-center justify-center p-2'>
                    <h1 className='text-[#00375C] text-5xl font-bold capitalize'>{email}</h1>
                </div>
                    <p className='pt-3 text-white'>{fullemail}</p>
        </div>
    </div>
    </>
  )
}
