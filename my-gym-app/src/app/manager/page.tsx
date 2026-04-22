"use client";

import { getBasicProfile } from "@/src/api/profile";
import { setItem } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ManagerPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleRedirect() {
      const params = new URLSearchParams(window.location.search);
      const userID = params.get("userID");
      const token = params.get("token");

      if(!userID || !token){
        router.replace("/login");
        return;
      }

      setItem("userID", userID);
      setItem("token", token);

      const profile = await getBasicProfile(userID);

      if(profile && profile.accCreated === 1){
        setItem("accCreated", "1");
        router.replace("/dashboard");
      }else{
        setItem("accCreated", "0");
        router.replace("/create-profile");
      }
      
    }

    handleRedirect();
  }, []);
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "16px",
      color: "gray"
    }}>
      Setting up your account...
    </div>
  );
};