"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home(){
  const router = useRouter();

  useEffect(() =>{
    router.replace("/splash");
  }, []);

  return(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "16px",
        color: "gray",
      }}
    >
      Loading...
    </div>
  )
}