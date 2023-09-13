import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('Blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3" >
            <h3 className="text-xl font-bold">Blogs: {blogs.length} </h3>

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                >

                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;