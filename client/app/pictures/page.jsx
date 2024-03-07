"use client";
import { Navbar } from "@/components/navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/components/firebase";
import { collection, query, where,deleteDoc, doc, onSnapshot } from "firebase/firestore";

export default function PicturesPage() {
  const [data, setData] = useState([]);
  const [userid, setUserid] = useState("");
const colRef = collection(db,'products')
const router = useRouter();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    router.push("/auth/login");
  } else {
    const Userid = user.uid;
    setUserid(Userid);
  }
});
useEffect(() => {
  
      const q1 = query(colRef, where("category", "==", "picture"));
      onSnapshot(q1, (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      })
  }, []);
  console.log(data);
  const deleteitem = async (id) => {
    try{
      await deleteDoc(doc(db, "products", id));
      setData(data.filter((items) =>items.id !==id))
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-[93vh] p-5">
        <div className="flex gap-5 flex-wrap">
          {data ? (
            data.map((items) => (
              <div key={items.id} className="w-fit">
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={items.document} />
                  </div>
                </div>
                <p className="p-2 text-sm text-center">{items.filename}</p>
                <details className="collapse">
                  <summary className="text-right pr-1 pb-1">::</summary>
                  <div className="flex justify-end pr-1" onClick={(id)=>deleteitem(items.id)}>
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="red"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </p>
                  </div>
                </details>
              </div>
            ))
          ) : (
            <p>No available Pictures</p>
          )}
        </div>
      </div>
    </>
  );
}
