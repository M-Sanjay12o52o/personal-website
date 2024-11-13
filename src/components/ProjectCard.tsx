"use client"

import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
    id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ id, title, image, description, technologies, link }) => {
    return (
        <div className="project-card bg-white shadow-md rounded-lg p-6 m-8">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="project-card__title text-xl font-bold mt-4 text-indigo-700">
                {title}
            </h2>
            <p className="project-card__description text-gray-700">{description}</p>
            <Link href={`/projects/${id}`}>
                <button className="project-card__details-btn bg-gray-500 text-white px-4 py-2 rounded-md hover:text-gray-700">
                    Know more...
                </button>
            </Link>
            <ul className="project-card__technologies list-none mt-2">
                {technologies.map((tech, index) => (
                    <li key={tech} className="project-card__tech text-gray-600 inline-block mr-2">
                        {tech}
                    </li>
                ))}
                <Link href={link} target="_blank" className="project-card__view-link text-sky-500 hover:underline">
                    View Project
                </Link>
            </ul>
        </div>
    )
}

export default ProjectCard;