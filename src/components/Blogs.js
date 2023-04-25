import { useEffect, useState } from "react";
import xml2js from 'xml2js';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog_post_example.xml')
            .then((response) => 
            response.text())
            .then((data) => {
                xml2js.parseString(data, (err, result) => {
                    setBlogs(result.blog.post);
                });
            });
    }, []);

    return (
        <>
            {blogs.map((blog) => (
                <div key={blog.id[0]}>
                    <h1>{blog.author[0]}</h1>
                    <p>{blog.date[0]}</p>
                    <p>{blog.summary[0]['text']}</p>
                    <img className="summaryImage" src={blog.summary[0]['image_path']} alt={blog.summary[0]['text']} />
                </div>
            ))}
        </>
    )
}

export default Blogs
