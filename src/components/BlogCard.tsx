import { FC } from 'react';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const BlogCard: FC<BlogCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-8">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4 text-gray-800">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <Link href={link}>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                    Read More
                </button>
            </Link>
        </div>
    );
};

export default BlogCard;