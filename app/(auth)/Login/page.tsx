"use client"

import LoginComponent from "@/components/LoginComponent/LoginComponent";
import HomePage from "@/app/page";
import { usePathname } from "next/navigation"


export default function page() {

  const pathname = usePathname()

  return (
    <>
        {
          pathname === "/Login" && <HomePage />
        }
      <LoginComponent />

    </>
  )
}


