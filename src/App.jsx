
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)


  }

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    // console.log("remove the id", id);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header> </Header>

      <div className='max-w-screen-xl mx-auto my-5 px-8 md:px-16 lg:px-24 flex'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        >
        </Blogs>

        <Bookmarks
          bookmarks={bookmarks} readingTime={readingTime}>
        </Bookmarks>
      </div>
    </>
  )
}

export default App
