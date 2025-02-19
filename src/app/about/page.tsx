import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Navbar pageType="About" />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    About
                </h1>
                <div className="text-lg text-gray-600">
                    <p>
                        Hi, I'm Sanjay, a full-stack web developer based in India. I'm passionate about building
                        beautiful and functional web experiences. I'm proficient in a wide range of technologies,
                        including HTML, CSS, JavaScript, React, Next.js, and more.
                    </p>
                    <p>
                        When I'm not coding, I enjoy reading books, watching movies and Podcasts.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default page
