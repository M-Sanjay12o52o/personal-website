import ProjectCard from '@/components/ProjectCard'
import { FC } from 'react'

interface ProjectsPageProps {

}

const ProjectsPage: FC<ProjectsPageProps> = ({ }) => {
    const projects = [
        {
            title: 'Project 1',
            image: '/project1.png',
            description: 'Description 1',
            technologies: ['Tech 1', 'Tech 2'],
            link: 'https://example.com/project1'
        },
        {
            title: 'Project 2',
            image: '/project2.png',
            description: 'Description 2',
            technologies: ['Tech 3', 'Tech 4'],
            link: 'https://example.com/project2'
        }
    ]

    return <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-100'>
        <header>

        </header>
        <main className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>
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