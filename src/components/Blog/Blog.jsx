
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog

    return (
        <div className='mb-12'>
            <img className="mb-3 w-full rounded-md" src={cover} alt={`Cover image of the ${title}`} />

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mb-2">
                    <img className="w-14 mb-2" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold mb-3"> {author}</h3>
                        <p className="text-sm mb-2"> {posted_date} </p>
                    </div>
                </div>

                <div>
                    <span className="text-sm"> {reading_time} min read </span>
                    <button onClick={() => { handleAddToBookmark(blog) }} className='text-xl text-red-600 ml-2'>  <FaBookmark></FaBookmark> </button>

                </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Title: {title} </h4>
            <p className='mb-2 text-blue-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=""> #{hash}</a> </span>)
                }
            </p>
            <button onClick={() => { handleMarkAsRead(reading_time, id) }} className='mb-2 text-purple-600 underline font-semibold'> Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}


export default Blog;