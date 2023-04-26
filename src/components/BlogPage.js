const BlogPage = ({ blogs }) => {
    const blogId = window.location.pathname.split('/')[2];
    const blog = blogs.filter((blog) => blog.id[0] === blogId)[0];

    return (
        <div className="blogPage">
            <h1>{blog.title[0]}</h1>
            <p>{blog.date[0]}</p>
            <p>{blog.author[0]}</p>
            <img
                className="summaryImage"
                src={blog.summary[0]['image_path']}
                alt={blog.summary[0]['text']}
            />
            <p>{blog.body[0]}</p>
        </div>
    )
}

export default BlogPage