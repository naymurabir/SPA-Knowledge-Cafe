import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3  className='text-base bg-gray-200 p-2 m-2 rounded-md mt-6 ">
            <div>
                <h3 className="text-xl mt-3 font-semibold ml-2"> Spent time on Read: {readingTime}  </h3>
            </div>

            <div>
                <h3 className="text-xl font-bold ml-3 mt-3">Bookmarked Blogs: {bookmarks.length}</h3>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;