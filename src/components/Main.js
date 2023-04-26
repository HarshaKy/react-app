import Blogs from './Blogs';
import { useEffect, useState } from "react";
import xml2js from 'xml2js';
import BlogPage from './BlogPage';

const Main = ({ view }) => {
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
        <div style={mainStyle} className="main">
        {view === 'blogs' ?  <Blogs blogs={blogs}/> : <BlogPage blogs={blogs}/>}
        </div>
    );
}

const mainStyle = {
    width: '70%',
    height: 'auto',
    float: 'left',
    text: 'center',
    color: 'pink',
    backgroundColor: 'black',
    padding: '10px'
}

export default Main;
