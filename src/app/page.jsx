"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const timer = setTimeout(() => {
      router.push(token ? "/home" : "/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="home">
      <video autoPlay muted loop className="home-vid">
        <source src="/images/aakdi.mp4" type="video/mp4" />
      </video>
    </div>
  );
}