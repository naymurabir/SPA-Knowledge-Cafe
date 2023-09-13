import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {


    const { title } = bookmark

    return (
        <div className='text-base bg-white shadow-md p-4 m-3 rounded-md'>
            <h2> {title} </h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;