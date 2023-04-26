const BlogPage = ({ blogs }) => {
    const blogId = window.location.pathname.split('/')[2];
    const blog = blogs.filter((blog) => blog.id[0] === blogId)[0];

    return (
        <div className="blogPage">
            {
                blog ?
                    <><h1>{blog.title[0]}</h1>
                        <p>Posted on {blog.date[0]}</p>
                        <p>by {blog.author[0]}</p>
                        <img
                            style={{ width: '100%', height: 'auto' }}
                            className="summaryImage"
                            src={blog.summary[0]['image_path']}
                            alt={blog.summary[0]['text']} />
                        <p>{blog.body[0]}</p>
                    </> :
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default BlogPage
