"use client";

import getRedirectPath from "@/utils/routing";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const path = getRedirectPath();
    router.replace(path);
  }, []);

  return (
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
  );
}
