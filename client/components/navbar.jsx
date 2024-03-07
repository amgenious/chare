"use client";
import {useState} from "react";
import Link from "next/link";
import { UploadFileForms } from "./UploadFileForms";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '@/components/firebase';


export const Navbar = () => {
  const [email, setEmail] = useState('')
  onAuthStateChanged(auth, (user) => {
   
    if (user) {
      const uid = user.email;
      const text = uid.slice(0,2)
      setEmail(text)
    } else {
      
    }
  });

  return (
    <div className="navbar bg-blue-950">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-2xl font-extrabold">chare</Link>
      </div>
      <div className="flex-none gap-3">
        <Link href={"/apps"}>
          <div>
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                fill="currentColor"
                d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H212V212h200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H612V212h200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16m-52 268H612V612h200zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"
              ></path>
            </svg>
          </div>
        </Link>

        <button
          className=""
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9z"
            ></path>
            <path
              fill="currentColor"
              d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7c-23.5-24.2-36-56.8-34.9-90.6c.9-26.4 9.9-51.2 26.2-72.1c16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9l13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9c15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5l37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3"
            ></path>
          </svg>
        </button>
        <dialog id="my_modal_5" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg pb-5">Upload Document</h3>
             <UploadFileForms />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="w-10 rounded-full bg-base-100 p-3">
              <p className="text-center text-white capitalize">
                {email}
                </p>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/profile"}>Profile</Link >
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={()=>
            {signOut(auth)
           }}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
