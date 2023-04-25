const blogs = [
    {
        id: 1,
        title: "Blog 1",
        date: "2021-01-01",
        author: 'John Doe',
        summary: "This is the first blog",
        body: "This is the body of the first blog"
    },
    {
        id: 2,
        title: "Blog 2",
        date: "2021-01-02",
        author: 'Harsha Ky',
        summary: "This is the second blog",
        body: "This is the body of the second blog"
    },
    {
        id: 3,
        title: "Blog 3",
        date: "2021-01-03",
        author: 'Sahana Reddy',
        summary: "This is the third blog",
        body: "This is the body of the third blog"
    },
    {
        id: 4,
        title: "Blog 4",
        date: "2021-01-04",
        author: 'Suhothra Reddy',
        summary: "This is the fourth blog",
        body: "This is the body of the fourth blog"
    }
]

const Blogs = () => {
    return (
        <>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.date}</p>
                    <p>{blog.author}</p>
                    <p>{blog.summary}</p>
                </div>
            ))}
        </>
    )
}

export default Blogs
