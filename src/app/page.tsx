"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState('black')

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('#333')
    }, 3000);

    return () => clearTimeout(timer)

  }, [])

  return (
    <div
      className="flex justify-center items-center h-screen w-screen bg-gray-100"
    >
      <h1
        style={{ color, transition: "color is ease-in-out" }}
        className="text-8xl md:text-9xl font-extrabold text-gray-900 drop-shadow-lg tracking-wider"
      >
        Sanjay Achar</h1>
    </div>
  );
}
