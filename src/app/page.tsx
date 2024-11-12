"use client"

import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <h1
        className="text-8xl md:text-9xl font-extrabold text-gray-900 drop-shadow-lg tracking-wider"
      >
        Sanjay Achar
      </h1>
      <div className="flex flex-row gap-4 mt-8 pt-4">
        <Image
          priority
          src='/social/twitter-x.svg'
          height={50}
          width={50}
          alt="X.com"
        />
        <Image
          priority
          src='/social/discord-icon.svg'
          height={50}
          width={50}
          alt="Discord Icon"
        />
        <Image
          priority
          src='/social/github.svg'
          height={50}
          width={50}
          alt="Github Icon"
        />
        <Image
          priority
          src='/social/mail.svg'
          height={50}
          width={50}
          alt="G-Mail Icon"
        />
        <Image
          priority
          src='/social/resume.svg'
          height={50}
          width={50}
          alt="Resume"
        />
      </div>
    </div>
  );
}
