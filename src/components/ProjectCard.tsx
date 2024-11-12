import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, image, description, technologies, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-700 ">
                {description}
            </p>
            <ul className="list-none mt-2">
                {technologies.map((tech, index) => (
                    <li key={tech} className="text-gray-600 inline-block mr-2">
                        {tech}
                    </li>
                ))}
                <Link href={link}>
                    View Project
                </Link>
            </ul>
        </div>
    )
}

export default ProjectCard;