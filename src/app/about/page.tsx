import Link from 'next/link'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-100'>
        <div className="mb-4">
            <Link href={"/"} className="text-gray-700 hover:text-blue-500 px-4">Home</Link>
            <Link href={"/projects"} className="text-gray-700 hover:text-blue-500 px-4">Projects</Link>
            <Link href={"/blogs"} className="text-gray-700 hover:text-blue-500 px-4">Blogs</Link>
        </div>
        <header>

        </header>
        <main className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>
                About
            </h1>
            <div>

            </div>
        </main>
    </div>
}

export default page