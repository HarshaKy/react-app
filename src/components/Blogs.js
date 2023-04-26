import Blog from "./Blog"

const Blogs = ({ blogs }) => {
    return (
        <>
            {blogs.map((blog) => (
                <Blog key={blog.id[0]} blog={blog} />
            ))}
        </>
    )
}

export default Blogs
