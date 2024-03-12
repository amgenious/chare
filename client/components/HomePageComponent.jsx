'use client'
import { folders } from '@/data/constant'
import Link from 'next/link'
import { Navbar } from './navbar'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/components/firebase';
import { useRouter } from 'next/navigation';


export const HomePageComponent = () => {
    const router = useRouter();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push('/auth/login')
        } else {
        }
      });

  return (
    <>
     <Navbar />
    <div className='flex flex-col gap-2 h-[93vh] text-white bg-[#00375c]'>
    <div className='h-[50%] w-full shadow-sm shadow-white p-2'>
        <p className='text-center text-sm'>Please search your shared items here</p>
        <div className='flex gap-1 justify-center w-full p-5'>
            <input placeholder='search here' className='bg-transparent p-3 text-white border-[1px] rounded-md w-[50%]' />
            <button className='btn bg-success text-white hover:bg-success hover:text-black'>Search</button>
        </div>
        <div className='pl-5'>
            display of searched item
        </div>
    </div>
    <div className='p-5'>
        <div className='flex flex-wrap gap-5 md:flex-row'>
            {
                folders.map((folder)=>(
                    <Link key={folder.id} href={folder.url}>
                   <div className='flex flex-col items-center'>
                    <div>
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path fill="currentColor" d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32"></path></svg>
                    </div>
                    <div className='text-sm'>
                        {folder.name}
                    </div>
                   </div>
                </Link>
                ))
            }
        </div>
    </div>
    </div>
</>
  )
}
