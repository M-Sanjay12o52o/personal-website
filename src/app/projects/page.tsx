import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { FC } from 'react'
import { projects } from '@/helper/projects'

interface ProjectsPageProps {

}

const ProjectsPage: FC<ProjectsPageProps> = ({ }) => {

    return <div className='flex flex-col items-center justify-center h-full w-full bg-gray-100'>
        <div className="mb-4 w-full bg-gray-50 h-12 flex items-center justify-center text-2xl fixed top-0 left-0">
            <Link href={"/"} className="text-gray-700 hover:text-blue-500 px-4">Home</Link>
            <Link href={"/blogs"} className="text-gray-700 hover:text-blue-500 px-4">Blogs</Link>
            <Link href={"/about"} className="text-gray-700 hover:text-blue-500 px-4">About</Link>
        </div>
        <header>

        </header>
        <main className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8 mt-8 w-full flex items-center justify-center'>
                Projects
            </h1>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </main>
    </div>
}

export default ProjectsPage