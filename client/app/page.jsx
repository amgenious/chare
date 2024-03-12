'use client'
import { HomePageComponent } from "@/components/HomePageComponent";
import { auth } from "@/components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
      if (!user) {
          router.push('/auth/login')
      } else {
      }
    });
  return (
   <>
   <HomePageComponent />
   </>
  );
}
