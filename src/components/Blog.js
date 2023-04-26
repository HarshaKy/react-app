import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <div className="blogSummary">
            <Link style={{color: 'pink'}} to={`/blog/${blog.id[0]}`}>
                <h1>{blog.title[0]}</h1>
            </Link>
            <p>Posted on {blog.date[0]}</p>
            <p>by {blog.author[0]}</p>
            <p>{blog.summary[0]['text']}</p>
            <img
                style={{ width: '50%', height: 'auto' }}
                className="summaryImage"
                src={blog.summary[0]['image_path']}
                alt={blog.summary[0]['text']}
            />
        </div>
    );
};

export default Blog;
