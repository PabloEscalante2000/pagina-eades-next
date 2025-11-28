"use client"

import { useRouter } from "next/navigation"
import React from "react"

export default function InicioButton({ child, clas }: { child: React.ReactNode, clas: string }) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/servicios")}
      className={clas}
    >
      {child}
    </button>
  )
}