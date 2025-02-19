import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { FC } from 'react'
import { blogs } from '@/helper/blog'
import Navbar from '@/components/Navbar'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='flex flex-col items-center justify-center h-full w-full bg-gray-100'>
        <Navbar pageType="Blogs" />

        <main className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8 mt-12 w-full flex items-center justify-center'>
                Blogs
            </h1>
            <div>
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.title} {...blog} />
                    ))
                }
            </div>
        </main>
    </div>
}

export default page