"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="mb-4">
        <Link href={"/projects"} className="text-gray-700 hover:text-blue-500 px-4">Projects</Link>
        <Link href={"/blogs"} className="text-gray-700 hover:text-blue-500 px-4">Blogs</Link>
        <Link href={"/about"} className="text-gray-700 hover:text-blue-500 px-4">About</Link>
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-8xl md:text-9xl font-extrabold text-gray-900 drop-shadow-lg tracking-wider"
      >
        Sanjay Achar
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className="mt-8 text-2xl md:text-3xl font-semibold text-gray-600">
        Full Stack Web-Developer
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
        className="text-base md:text-lg text-gray-600 mt-4">
        {/* I'm passionate about building beautiful and functional web experiences. */}
      </motion.h3>
      <div className="flex flex-row gap-4 mt-8 pt-4">
        <Image
          priority
          className="cursor-pointer hover:scale-110"
          src='/social/twitter-x.svg'
          height={50}
          width={50}
          alt="X.com"
          onClick={() => window.open("https://x.com/msanjay12o5", "_blank")}
        />
        <Image
          priority
          className="cursor-pointer hover:scale-110"
          src='/social/discord-icon.svg'
          height={50}
          width={50}
          alt="Discord Icon"
          onClick={() => window.open("https://discord.com/channels/sanjay_2000", "_blank")}
        />
        <Image
          priority
          className="cursor-pointer hover:scale-110"
          src='/social/github.svg'
          height={50}
          width={50}
          alt="Github Icon"
          onClick={() => window.open("https://github.com/M-Sanjay12o52o", "_blank")}
        />
        <Image
          priority
          className="cursor-pointer hover:scale-110"
          src='/social/mail.svg'
          height={50}
          width={50}
          alt="G-Mail Icon"
          // onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}
          onClick={() => window.open("mailto:msnjy12o52o@gmail.com")}
        />
        <Image
          priority
          className="cursor-pointer hover:scale-110"
          src='/social/resume.svg'
          height={50}
          width={50}
          alt="Resume"
          onClick={() => window.open("/resume.pdf", "_blank")}
        />
      </div>
    </div>
  );
}
