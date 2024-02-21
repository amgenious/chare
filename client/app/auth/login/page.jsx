import React from 'react'
import Link from 'next/link'

export default function LoginPage  () {
  return (
    <div className='h-screen  flex justify-center items-center '>
       <div className='p-5 bg-white text-[#00375C]'>
        <h1 className='text-xl font-semibold text-center p-3'>Login</h1>
          <div className='flex justify-center cursor-pointer items-center p-2 border rounded-md bg-blue-950 text-white gap-1'>
            <div>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135c66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6c-63.8 0-117.8 43.1-137.1 101c-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101c33 0 61-8.7 82.9-23.4c26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1c0 74.7-26.7 137.4-73 180.1"></path></svg>
            </div>
            <div>
              <p>Login with Google</p>
            </div>
          </div>
          <p className='text-center font-bold p-3'>OR</p>
          <div className='p-5'>
            <form className='flex flex-col'>
              <input placeholder='email' type='text' className='bg-transparent p-3 border rounded-lg mb-2'required />
              <input placeholder='password' type='password' className='bg-transparent p-3 border rounded-lg mb-4' required/>
              <button className='btn bg-blue-950 text-white hover:bg-white hover:text-blue-950'>Login</button>
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
