import { FC } from 'react'

interface ProjectDetailsProps {
    params: { projectId: string }
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ params }: {
    params: { projectId: string }
}) => {
    return <div>ProjectDetails {params.projectId}</div>
}

export default ProjectDetails