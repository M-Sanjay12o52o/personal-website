import ProjectCard from '@/components/ProjectCard'
import { FC } from 'react'
import { projects } from '@/helper/projects'
import Navbar from '@/components/Navbar'

interface ProjectsPageProps {

}

const ProjectsPage: FC<ProjectsPageProps> = ({ }) => {

    return <div className='flex flex-col items-center justify-center h-full w-full bg-gray-100'>
        <Navbar pageType="Projects" />

        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8 mt-12 w-full flex items-center justify-center'>
                Projects
            </h1>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    </div>
}

export default ProjectsPage