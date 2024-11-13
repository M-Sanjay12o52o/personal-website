import { FC } from 'react'

interface BlogDetailsProps {
    params: { blogId: string }
}

const BlogDetails: FC<BlogDetailsProps> = ({ params }: {
    params: { blogId: string }
}) => {
    return <div>Blog Details {params.blogId}</div>
}

export default BlogDetails