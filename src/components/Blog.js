import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <div className="blogSummary">
            <Link to={`/blog/${blog.id[0]}`}>
                <h1>{blog.title[0]}</h1>
            </Link>
            <p>{blog.date[0]}</p>
            <p>{blog.author[0]}</p>
            <p>{blog.summary[0]['text']}</p>
            <img
                className="summaryImage"
                src={blog.summary[0]['image_path']}
                alt={blog.summary[0]['text']}
            />
        </div>
    );
};

export default Blog;
